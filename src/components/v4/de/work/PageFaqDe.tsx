import { FaqList } from "@/components/v4/PageFaq";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import type { Faq } from "@/data/v4Faq";

/** Deutsche Fassung von PageFaqSection (das englische hat das Label "Questions" fest eingebaut). */
export function PageFaqSectionDe({
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
        <div className="mt-12">
          <FaqList items={items} />
        </div>
      </div>
    </StateField>
  );
}
