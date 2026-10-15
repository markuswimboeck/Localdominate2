# Sales chat (Claude API)

A chat assistant on every public page that answers questions, recommends one fitting offer with its
published price and leads the visitor to the next step (free check, 15-min call, AI check) or takes
the enquiry right in the chat.

## How it works

| Part | File | What it does |
|---|---|---|
| Mount | `src/components/salesChat/SalesChatMount.tsx` | In the main bundle (tiny). Loads the widget on the first interaction or after 5 s. Hidden on admin/analytics/preview pages and for automated browsers (prerender, SEO check). |
| Widget | `src/components/salesChat/SalesChat.tsx` | Separate 14 KB chunk. Launcher, chat window, next-step buttons, one-time hint after 20 s. Conversation kept in `sessionStorage` across page changes. |
| Texts | `src/components/salesChat/salesChatTexts.ts` | German/English UI texts and the next-step buttons (reuse `CHECK_*` and `BOOKING_*`). German on `/de`, the blog and the legal pages, English elsewhere. |
| API | `api/chat.ts` | Vercel function `POST /api/chat`. Calls the Claude Messages API, runs the two tools (`suggest_next_step`, `save_lead`), returns `{ reply, nextSteps, lead }`. |
| Rules | `api/_lib/prompt.ts` | How the assistant behaves (consultative, one offer, truth-first rules, consent before saving a lead). |
| Facts | `public/llms.txt` | The only source for offers, prices and terms. Update prices there and the bot follows on the next deploy. |

Leads: the assistant asks for name, email and an explicit yes before calling `save_lead`. The browser
then sends the lead **plus the chat transcript** through the same Web3Forms key as the free-check form
(`VITE_WEB3FORMS_KEY`), so it arrives in the same inbox with the subject "Chat-Anfrage: …" /
"Chat enquiry: …". Nothing is stored on the server.

Analytics (GA4, respects Consent Mode): `sales_chat_open`, `sales_chat_message`, `sales_chat_cta`,
`sales_chat_link`, `sales_chat_teaser_shown`, `sales_chat_restart`, and `generate_lead` with
`method: sales_chat`. Mark `generate_lead` as a key event in GA4.

## Switch it on

In Vercel → project `localdominate` → Settings → Environment Variables (Production and Preview):

1. `ANTHROPIC_API_KEY` = a key from console.anthropic.com (server-side only, **no** `VITE_` prefix).
2. `VITE_SALES_CHAT` = `on` (shows the widget to everyone). Without it the widget only appears with
   `?saleschat=1` in the URL (kept for the browser session, `?saleschat=0` turns it off again).
3. Optional `CLAUDE_MODEL` (default `claude-sonnet-5-5`; `claude-haiku-5-5` is cheaper, weaker sales talk).
4. Redeploy (the `VITE_` value is baked in at build time).

In the Anthropic Console set a monthly spend limit. Rough cost with Sonnet 5.5 ($2 in / $10 out per
million tokens) and prompt caching: a few cents per conversation.

## Before going live

- Privacy policy (`/datenschutz`): add a paragraph on the chat (provider Anthropic PBC, USA; purpose:
  answering enquiries; legal basis; chat content and, with consent, contact details are forwarded by
  email via Web3Forms; no storage on our server). The widget links to `/datenschutz`.
- Test on the Preview URL with `?saleschat=1`: ask for prices, ask something off-topic, try to get a
  discount, leave contact details and check that the email with transcript arrives.

## Limits and protection

- Origin check (localdominate.org, *.vercel.app, localhost), 30 requests per IP per 10 minutes (per
  function instance), max 20 visitor turns and 2,000 characters per message, 900 output tokens.
- The facts are cached for one hour per function instance.
- `vercel.json`: the SPA rewrite excludes `/api/`, and `functions` bundles `public/llms.txt` with the function.
