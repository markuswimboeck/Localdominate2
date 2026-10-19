import { useEffect, useState } from "react";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { CheckForm } from "@/components/v4/check/CheckForm";
import { BOOKING_IS_EXTERNAL, BOOKING_URL } from "@/lib/booking";
import { AI_ANCHORS, onAiOption } from "@/data/v4Ai";
import type { AiTexts } from "@/data/v4Ai";

/** RULES. "AI takes tasks, not people", four commitments and the AI-literacy note with its source. */
export function AiRules({ t }: { t: AiTexts }) {
  return (
    <StateField field="light" as="section" id={AI_ANCHORS.rules} aria-labelledby="ai-rules" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 pb-12 pt-20 md:px-10 md:pb-16 md:pt-28">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
              {t.rules.label}
            </SystemLabel>
            <h2
              id="ai-rules"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal italic leading-[1.04] text-v4-ink"
            >
              {t.rules.title}
            </h2>
          </div>
          <p className="max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ink/70">{t.rules.text}</p>
        </div>
        <ul className="mt-14 grid gap-x-10 gap-y-8 border-t border-v4-ink/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.rules.items.map((item) => (
            <li key={item.title} className="flex flex-col gap-3">
              <span aria-hidden="true" className="h-2 w-8 rounded-full bg-v4-signal" />
              <h3 className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ink">{item.title}</h3>
              <p className="font-v4-sans text-base leading-relaxed text-v4-ink/70">{item.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 rounded-2xl bg-v4-ink/[0.05] p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-7">
          <p className="max-w-3xl font-v4-sans text-sm leading-relaxed text-v4-ink/75">{t.rules.law.text}</p>
          <a
            href={t.rules.law.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] shrink-0 items-center font-v4-sans text-sm font-medium text-v4-ink underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink"
          >
            {t.rules.law.link} ↗
          </a>
        </div>
      </div>
    </StateField>
  );
}

/** FAQ. Native <details>, every answer is in the HTML. The same array fills the FAQPage JSON-LD. */
export function AiFaq({ t }: { t: AiTexts }) {
  return (
    <StateField field="light" as="section" id={AI_ANCHORS.faq} aria-labelledby="ai-faq" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 pb-20 pt-8 md:px-10 md:pb-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
            {t.faq.label}
          </SystemLabel>
          <h2 id="ai-faq" className="text-balance font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
            {t.faq.title}
          </h2>
        </div>
        <div className="border-b border-v4-ink/15">
          {t.faq.items.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-v4-ink/15">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-4 font-v4-sans text-lg font-semibold leading-snug tracking-tight text-v4-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-ink [&::-webkit-details-marker]:hidden">
                <h3 className="font-[inherit] text-[length:inherit]">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="relative h-8 w-8 shrink-0 rounded-full border border-v4-ink/25 transition-transform duration-200 before:absolute before:left-1/2 before:top-1/2 before:h-px before:w-3 before:-translate-x-1/2 before:bg-v4-ink after:absolute after:left-1/2 after:top-1/2 after:h-3 after:w-px after:-translate-y-1/2 after:bg-v4-ink group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-6 pr-12 font-v4-sans text-base leading-relaxed text-v4-ink/75">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </StateField>
  );
}

/**
 * FORM. The shared CheckForm with this page's texts. A price card or the calculator can choose the
 * option and fill the free field before the visitor arrives here.
 */
export function AiForm({ t }: { t: AiTexts }) {
  const [option, setOption] = useState<string>();
  const [note, setNote] = useState<string>();
  useEffect(
    () =>
      onAiOption((detail) => {
        if (detail.option) setOption(detail.option);
        if (detail.note) setNote(detail.note);
      }),
    []
  );

  return (
    <StateField field="dark" as="section" id={AI_ANCHORS.form} aria-labelledby="ai-form" className="scroll-mt-16">
      <div className="mx-auto grid max-w-[1300px] gap-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-x-20">
        <div className="flex flex-col gap-6 lg:gap-8">
          <SystemLabel as="p" className="text-v4-ivory/60">
            {t.form.label}
          </SystemLabel>
          <h2 id="ai-form" className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory">
            {t.form.title}
          </h2>
          <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{t.form.text}</p>
          <ul className="flex max-w-lg flex-col border-b border-v4-ivory/15">
            {t.form.terms.map((term) => (
              <li key={term} className="flex gap-4 border-t border-v4-ivory/15 py-4 font-v4-sans text-sm leading-relaxed text-v4-ivory/80">
                <span aria-hidden="true" className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-v4-signal" />
                {term}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
            <p className="font-v4-serif text-[length:var(--v4-text-subhead)] leading-tight text-v4-ivory">{t.form.callTitle}</p>
            <a
              href={BOOKING_URL}
              {...(BOOKING_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-v4-ivory/30 px-7 py-3 font-v4-sans text-sm font-medium text-v4-ivory/90 transition-[border-color] hover:border-v4-ivory/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
            >
              {t.form.callLabel}
            </a>
          </div>
        </div>
        <CheckForm texts={t.form.texts} id={t.form.idPrefix} option={option} note={note} className="self-start" />
      </div>
    </StateField>
  );
}
