# Sales chat assistant

A small AI assistant on the V4 pages. It qualifies visitors, recommends one fixed-price offer or the
free check, and hands contact details to the team. It is a guide, not a hard-sell bot.

## Parts

| Part | File |
|---|---|
| Backend (Netlify Function, `POST /api/chat`) | `netlify/functions/chat.mts` |
| Widget (mounted after hydration from `V4Page`) | `src/components/v4/chat/SalesChat.tsx` |
| Widget texts (EN/DE) | `src/components/v4/chat/chatTexts.ts` |

The browser never sees the Anthropic key. The function calls the Messages API with `fetch`, so no new
dependency was added (both lockfiles are untouched).

## Setup (once, in Netlify → Site configuration → Environment variables)

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | yes | Key from the Anthropic Console organisation that holds the credits. Without it the endpoint answers 503 and the widget shows its error text. |
| `VITE_WEB3FORMS_KEY` | already used by the check form | Where captured leads are delivered. Without it the widget opens a pre-filled email instead. |
| `CHAT_MODEL` | no | Default `claude-sonnet-5-5`. |
| `CHAT_ENABLED` | no | Set to `false` to switch the bot off without a deploy. |

Set a monthly spend limit for the key's workspace in the Anthropic Console.

## Before it goes live

1. **Privacy policy.** Messages are processed by Anthropic. `/datenschutz` has to name that processing
   (processor, purpose, legal basis, third-country transfer) before the widget is shown to visitors.
   The widget links to the policy and tells visitors not to share sensitive data. The policy text itself
   was deliberately not changed here.
2. **Netlify deploy preview.** Test a German and an English conversation, an objection, an off-topic
   question and one lead hand-over end to end (the lead must arrive in the Web3Forms inbox).

## How it stays truthful (Hard Rule 06)

- Offers, prices and delivery times are imported from `src/data/v4Offers.ts`, so the bot cannot quote a
  figure that differs from `/services`. Reply time comes from `src/lib/check.ts`.
- All other facts in the system prompt are copied from published pages. Do not add claims there that
  the site does not make.
- The prompt forbids ranking, traffic and revenue promises, invented clients, discounts and legal terms.
- A lead is only accepted if the model reports an explicit yes to being contacted and the email is valid;
  the function checks both again.

## Limits and abuse protection

Origin allow-list (localdominate.org, www, Netlify previews, localhost), at most 24 messages of 1,200
characters per request, 600 output tokens, a best-effort limit of 25 requests per 10 minutes per IP
(memory is per function instance, so this slows abuse but is not a hard cap), the system prompt is cached.

## Not included on purpose

No database writes (the Lovable Cloud project stays untouched, Hard Rule 6), no conversation logging,
no streaming. Each can be added later as its own change.
