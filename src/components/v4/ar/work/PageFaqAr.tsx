import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import type { Faq } from "@/data/v4Faq";

/** Arabic copy of PageFaqSection (the English one has the label "Questions" built in). */
export function PageFaqSectionAr({
  id,
  label,
  title,
  items,
}: {
  id: string;
  label: string;
  title: string;
  items: readonly Faq[];
}) {
  return (
    <StateField field="light" as="section" className="border-t border-v4-ink/10" aria-labelledby={id}>
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <SystemLabel as="p" className="mb-6 block text-v4-ink/60">
          {label}
        </SystemLabel>
        <h2 id={id} className="max-w-2xl font-v4-serif text-[length:var(--v4-text-heading)] font-normal leading-[1.08] text-v4-ink">
          {title}
        </h2>
        <div className="mt-12 border-b border-v4-ink/15">
          {items.map((faq) => (
            <div key={faq.q} className="grid gap-2 border-t border-v4-ink/15 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-10">
              <h3 className="font-v4-sans text-lg font-semibold leading-snug text-v4-ink">{faq.q}</h3>
              <p className="max-w-xl font-v4-sans text-sm leading-relaxed text-v4-ink/70">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </StateField>
  );
}
