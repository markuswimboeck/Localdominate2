import { Link } from "react-router-dom";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { PORTRAIT } from "@/data/v4About";
import { AI_ANCHORS } from "@/data/v4Ai";
import type { AiTexts } from "@/data/v4Ai";

/** HOW IT WORKS. Four steps on a rail; you decide after each one. */
export function AiSteps({ t }: { t: AiTexts }) {
  return (
    <StateField field="light" as="section" id={AI_ANCHORS.steps} aria-labelledby="ai-steps" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          {t.steps.label}
        </SystemLabel>
        <h2
          id="ai-steps"
          className="max-w-3xl text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ink"
        >
          {t.steps.title}
        </h2>
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-v4-ink/15 md:block" />
          {t.steps.items.map((step, i) => (
            <li key={step.n} className="relative flex flex-col gap-3">
              <span
                className={
                  "relative z-10 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full font-v4-mono text-xs " +
                  (i === 0 ? "bg-v4-signal text-v4-ink" : "border border-v4-ink/20 bg-v4-ivory text-v4-ink/70")
                }
              >
                {step.n}
              </span>
              <h3 className="mt-2 font-v4-sans text-xl font-semibold tracking-tight text-v4-ink">{step.title}</h3>
              <p className="font-v4-sans text-base leading-relaxed text-v4-ink/70">{step.body}</p>
              <SystemLabel as="p" className="mt-1 text-v4-ink/50">
                {step.meta}
              </SystemLabel>
            </li>
          ))}
        </ol>
      </div>
    </StateField>
  );
}

/**
 * PROOF OF WORK. No client logos yet (truth rule). Instead the structure this site is built with,
 * drawn as one lead session handing work to specialists, three figures from this site's own build
 * and the person behind it.
 */
export function AiProof({ t }: { t: AiTexts }) {
  const [lead, ...specialists] = t.proof.roles;
  return (
    <StateField field="dark" as="section" id={AI_ANCHORS.proof} aria-labelledby="ai-proof" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SystemLabel as="p" className="text-v4-ivory/60">
              {t.proof.label}
            </SystemLabel>
            <h2
              id="ai-proof"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
            >
              {t.proof.title}
            </h2>
            <p className="max-w-lg font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{t.proof.text}</p>

            <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-v4-ivory/15 pt-8">
              {t.proof.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse gap-2">
                  <dt className="font-v4-sans text-xs leading-snug text-v4-ivory/60 sm:text-sm">{fact.label}</dt>
                  <dd className="font-v4-sans text-[2.25rem] font-extrabold leading-none tracking-tight text-v4-signal sm:text-[3rem]">
                    {fact.figure}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="font-v4-sans text-xs text-v4-ivory/45">{t.proof.note}</p>
          </div>

          <div className="flex flex-col gap-8">
            {/* the structure: one lead session, three specialists */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl border border-v4-signal bg-v4-signal/10 p-5">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-v4-signal shadow-[0_0_0_6px_rgba(183,245,42,0.15)]" />
                  <h3 className="font-v4-sans text-base font-semibold text-v4-ivory">{lead.name}</h3>
                </div>
                <p className="mt-2 font-v4-sans text-sm leading-relaxed text-v4-ivory/75">{lead.body}</p>
              </div>
              <div aria-hidden="true" className="mx-auto hidden h-8 w-px bg-v4-ivory/25 sm:block" />
              <div aria-hidden="true" className="mx-[16.6%] hidden h-px bg-v4-ivory/25 sm:block" />
              <ul className="mt-4 grid gap-4 sm:mt-0 sm:grid-cols-3">
                {specialists.map((role) => (
                  <li key={role.name} className="relative flex flex-col gap-2 rounded-2xl border border-v4-ivory/15 bg-v4-ivory/[0.035] p-4 sm:pt-6">
                    <span aria-hidden="true" className="absolute -top-px left-1/2 hidden h-6 w-px -translate-y-full bg-v4-ivory/25 sm:block" />
                    <h3 className="font-v4-sans text-sm font-semibold text-v4-ivory">{role.name}</h3>
                    <p className="font-v4-sans text-xs leading-relaxed text-v4-ivory/65">{role.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-5 border-t border-v4-ivory/15 pt-8">
              <img
                src={PORTRAIT.src}
                width={PORTRAIT.width}
                height={PORTRAIT.height}
                alt={PORTRAIT.alt}
                loading="lazy"
                decoding="async"
                className="h-[72px] w-[72px] shrink-0 rounded-full object-cover object-top"
              />
              <div className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
                <p className="font-semibold text-v4-ivory">{t.proof.who.lead}</p>
                <p className="mt-1">{t.proof.who.body}</p>
                <Link
                  to={t.proof.who.linkTo}
                  className="inline-flex min-h-[44px] items-center text-v4-ivory underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
                >
                  {t.proof.who.link}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StateField>
  );
}
