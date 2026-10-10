import { cn } from "@/lib/utils";
import type { TaskClass } from "@/data/v4Ai";

/**
 * The visual motif of the AI pages: a task in one of three states.
 * Signal green = AI does it, cobalt = AI drafts and a person decides, outline = stays human.
 * `surface` says which field the chip stands on, so the outline state stays visible on both.
 */
export const CHIP_FILL: Record<TaskClass, string> = {
  automate: "bg-v4-signal text-v4-ink border-v4-signal",
  assist: "bg-v4-cobalt text-v4-white border-v4-cobalt",
  human: "bg-transparent border-dashed",
};

export const BAR_FILL: Record<TaskClass, string> = {
  automate: "bg-v4-signal",
  assist: "bg-v4-cobalt",
  human: "bg-v4-ivory/20",
};

export function ClassDot({ cls, className }: { cls: TaskClass; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block h-2.5 w-2.5 shrink-0 rounded-full border",
        cls === "automate" && "border-v4-signal bg-v4-signal",
        cls === "assist" && "border-v4-cobalt bg-v4-cobalt",
        cls === "human" && "border-dashed border-current bg-transparent",
        className
      )}
    />
  );
}

export function TaskChip({
  cls,
  children,
  surface = "dark",
  className,
}: {
  cls: TaskClass;
  children: React.ReactNode;
  surface?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-v4-sans text-xs font-medium leading-none",
        CHIP_FILL[cls],
        cls === "human" && (surface === "dark" ? "border-v4-ivory/40 text-v4-ivory/85" : "border-v4-ink/35 text-v4-ink/80"),
        className
      )}
    >
      {children}
    </span>
  );
}
