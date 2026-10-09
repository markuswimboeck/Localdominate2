import { cn } from "@/lib/utils";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { HOW_WE_WORK_AR, HOW_WE_WORK_NOTE_AR } from "@/data/ar/home.ar";

/** Arabic copy of HowWeWork: the four commitments as a numbered list (light field). */
export function HowWeWorkAr({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ol className="grid gap-x-10 sm:grid-cols-2">
        {HOW_WE_WORK_AR.map((item, i) => (
          <li key={item.title} className={cn("flex gap-5 border-t border-v4-ink/15 py-7")}>
            <SystemLabel className="pt-1.5 text-v4-ink/60">{String(i + 1).padStart(2, "0")}</SystemLabel>
            <div>
              <h3 className="font-v4-sans text-lg font-semibold text-v4-ink">{item.title}</h3>
              <p className="mt-2 max-w-md font-v4-sans text-sm leading-relaxed text-v4-ink/70">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="border-t border-v4-ink/15 pt-5 font-v4-sans text-xs leading-relaxed text-v4-ink/60">
        {HOW_WE_WORK_NOTE_AR.before}
        <span className="ltr-run">{HOW_WE_WORK_NOTE_AR.price}</span>
        {HOW_WE_WORK_NOTE_AR.after}
      </p>
    </div>
  );
}
