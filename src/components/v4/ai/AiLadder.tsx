import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton } from "@/components/v4/creators/AnchorButton";
import { AI_ANCHORS, selectAiOption } from "@/data/v4Ai";
import type { AiTexts, LadderTier } from "@/data/v4Ai";

const overlineClass =
  "block font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.16em] text-v4-ivory/55";

function Includes({ tier, label, featured }: { tier: LadderTier; label: string; featured: boolean }) {
  return (
    <div>
      <SystemLabel as="p" className="text-v4-ivory/50">
        {label}
      </SystemLabel>
      <ul className="mt-3 flex flex-col border-b border-v4-ivory/12">
        {tier.includes.map((item) => (
          <li key={item} className="flex gap-3 border-t border-v4-ivory/12 py-2.5 font-v4-sans text-sm leading-relaxed text-v4-ivory/85">
            <span
              aria-hidden="true"
              className={cn("mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full", featured ? "bg-v4-signal" : "bg-v4-ivory/40")}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Price({ tier, big = true }: { tier: LadderTier; big?: boolean }) {
  return (
    <p>
      <span className={overlineClass}>{tier.overline}</span>
      <span
        className={cn(
          "mt-3 block whitespace-nowrap font-v4-sans font-extrabold leading-none tracking-tight text-v4-ivory",
          big ? "text-[3rem] md:text-[3.5rem]" : "text-[2.5rem]"
        )}
      >
        {tier.figure}
        {tier.unit && <span className="ml-2 text-base font-semibold tracking-normal text-v4-ivory/70">{tier.unit}</span>}
      </span>
    </p>
  );
}

/** A main card: Audit (featured), Onboarding, Sprint. Rows line up from 1024 px (subgrid). */
function TierCard({ tier, t }: { tier: LadderTier; t: AiTexts }) {
  const featured = Boolean(tier.badge);
  return (
    <li
      className={cn(
        "relative flex flex-col gap-6 rounded-[1.5rem] border p-6 md:p-8",
        "lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-y-6",
        featured
          ? "border-v4-signal bg-v4-ivory/[0.08] shadow-[0_0_0_1px_#B7F52A,0_40px_80px_-40px_rgba(183,245,42,0.35)]"
          : "border-v4-ivory/15 bg-v4-ivory/[0.035]"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-v4-mono text-xs text-v4-ivory/40">{tier.step}</span>
          <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ivory">{tier.name}</h3>
        </div>
        {tier.badge && (
          <span className="shrink-0 rounded-full bg-v4-signal px-3 py-1.5 font-v4-mono text-[length:var(--v4-text-label)] uppercase leading-none tracking-[0.14em] text-v4-ink">
            {tier.badge}
          </span>
        )}
      </div>
      <div className="border-t border-v4-ivory/12 pt-6">
        <Price tier={tier} />
      </div>
      <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
        {tier.terms}{" "}
        <span className="whitespace-nowrap text-v4-ivory/50">
          · {t.ladder.durationLabel}: {tier.duration}
        </span>
      </p>
      <Includes tier={tier} label={t.ladder.includesLabel} featured={featured} />
      <AnchorButton
        href={`#${AI_ANCHORS.form}`}
        tone={featured ? "signal" : "outline"}
        arrow
        className="mt-auto w-full lg:mt-0 lg:self-end"
        onClick={() => selectAiOption({ option: tier.option })}
      >
        {tier.cta}
      </AnchorButton>
    </li>
  );
}

/** A wide card: System and Care. Price left, list right from 768 px. */
function WideCard({ tier, t }: { tier: LadderTier; t: AiTexts }) {
  return (
    <li className="grid gap-6 rounded-[1.5rem] border border-v4-ivory/15 bg-v4-ivory/[0.035] p-6 md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-8">
      <div className="flex flex-col gap-5">
        <div className="flex items-baseline gap-3">
          <span className="font-v4-mono text-xs text-v4-ivory/40">{tier.step}</span>
          <h3 className="font-v4-sans text-xl font-semibold tracking-tight text-v4-ivory">{tier.name}</h3>
        </div>
        <Price tier={tier} big={false} />
        <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
          {tier.terms} <span className="text-v4-ivory/50">· {t.ladder.durationLabel}: {tier.duration}</span>
        </p>
        <AnchorButton
          href={`#${AI_ANCHORS.form}`}
          tone="outline"
          arrow
          className="mt-auto w-full sm:w-fit"
          onClick={() => selectAiOption({ option: tier.option })}
        >
          {tier.cta}
        </AnchorButton>
      </div>
      <Includes tier={tier} label={t.ladder.includesLabel} featured={false} />
    </li>
  );
}

/**
 * PRICES. The free check as an entry band, three main cards with the audit in the middle of the
 * reader's path, then System and Care as wide cards, the solo line and the notes. Every button
 * preselects its option in the form and jumps there.
 */
export function AiLadder({ t }: { t: AiTexts }) {
  const tiers = Object.fromEntries(t.ladder.tiers.map((x) => [x.id, x])) as Record<LadderTier["id"], LadderTier>;
  const check = tiers.check;
  return (
    <StateField field="dark" as="section" id={AI_ANCHORS.prices} aria-labelledby="ai-prices" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div>
            <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
              {t.ladder.label}
            </SystemLabel>
            <h2
              id="ai-prices"
              className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
            >
              {t.ladder.title}
            </h2>
            <p className="mt-6 max-w-md font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">
              {t.ladder.text}
            </p>
          </div>
          <div>
            <h3 className="font-v4-mono text-[length:var(--v4-text-label)] font-normal uppercase leading-none tracking-[0.18em] text-v4-ivory/60">
              {t.ladder.fitLabel}
            </h3>
            <ul className="mt-4 flex flex-col border-b border-v4-ivory/15">
              {t.ladder.fits.map((fit) => (
                <li key={fit.pick} className="border-t border-v4-ivory/15 py-3.5 font-v4-sans text-sm leading-relaxed text-v4-ivory/70 sm:text-base">
                  {fit.when} <strong className="whitespace-nowrap font-semibold text-v4-signal">{fit.pick}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* entry band: the free check */}
        <div className="mt-14 flex flex-col gap-5 rounded-[1.5rem] border border-dashed border-v4-ivory/30 p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
          <div className="flex items-center gap-6">
            <span className="shrink-0 font-v4-sans text-[2.75rem] font-extrabold leading-none tracking-tight text-v4-signal">{check.figure}</span>
            <div>
              <h3 className="font-v4-sans text-lg font-semibold tracking-tight text-v4-ivory">
                <span className="mr-2 font-v4-mono text-xs font-normal text-v4-ivory/40">{check.step}</span>
                {check.name}
              </h3>
              <p className="mt-1 font-v4-sans text-sm text-v4-ivory/65">
                {check.terms} {check.duration}.
              </p>
            </div>
          </div>
          <AnchorButton
            href={`#${AI_ANCHORS.form}`}
            className="shrink-0"
            onClick={() => selectAiOption({ option: check.option })}
          >
            {check.cta}
          </AnchorButton>
        </div>

        <ul className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
          {[tiers.audit, tiers.onboarding, tiers.sprint].map((tier) => (
            <TierCard key={tier.id} tier={tier} t={t} />
          ))}
        </ul>

        <ul className="mt-6 grid gap-6 lg:grid-cols-2">
          {[tiers.system, tiers.care].map((tier) => (
            <WideCard key={tier.id} tier={tier} t={t} />
          ))}
        </ul>

        <div className="mt-6 flex flex-col gap-3 border-t border-v4-ivory/15 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-v4-sans text-sm leading-relaxed text-v4-ivory/70">
            <strong className="font-semibold text-v4-ivory">{t.ladder.solo.title}</strong> {t.ladder.solo.body}
          </p>
          <a
            href={`#${AI_ANCHORS.form}`}
            onClick={() => selectAiOption({ option: t.ladder.solo.option })}
            className="inline-flex min-h-[44px] shrink-0 items-center font-v4-sans text-sm text-v4-ivory underline underline-offset-4 hover:text-v4-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal"
          >
            {t.ladder.solo.cta} →
          </a>
        </div>

        <ul className="mt-4 flex flex-col gap-x-10 gap-y-2 md:flex-row md:flex-wrap">
          {t.ladder.notes.map((note) => (
            <li key={note} className="font-v4-sans text-sm leading-relaxed text-v4-ivory/55">
              {note}
            </li>
          ))}
        </ul>
      </div>
    </StateField>
  );
}
