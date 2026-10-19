import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { StateField } from "@/components/v4/StateField";
import { SystemLabel } from "@/components/v4/SystemLabel";
import { AnchorButton } from "@/components/v4/creators/AnchorButton";
import { BAR_FILL, CHIP_FILL } from "@/components/v4/ai/TaskChip";
import {
  AI_ANCHORS,
  DEFAULT_HOURLY_COST,
  DEFAULT_SAVING,
  ROLES,
  TASK_CLASS_ORDER,
  WORK_WEEKS_PER_YEAR,
  freedHours,
  nextTaskClass,
  selectAiOption,
} from "@/data/v4Ai";
import type { AiTexts, RoleTask, TaskClass } from "@/data/v4Ai";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));
const toNumber = (raw: string, fallback: number) => {
  const n = Number(raw.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
};

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-v4-signal";
const numberClass =
  "w-full rounded-lg border border-v4-ivory/20 bg-v4-ivory/[0.06] px-3 py-2.5 font-v4-sans text-base tabular-nums text-v4-ivory focus:border-v4-signal focus:outline-none";

/** − value + : big touch targets, typed input still possible. */
function Stepper({
  value,
  onChange,
  label,
  unit,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  unit: string;
  max: number;
}) {
  const btn =
    "flex h-10 w-10 shrink-0 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-v4-ivory/20 font-v4-sans text-lg text-v4-ivory/80 transition-colors hover:border-v4-ivory/50 active:scale-95 " +
    focusRing;
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label={label}>
      <button type="button" className={btn} onClick={() => onChange(clamp(value - 1, 0, max))} aria-label={`${label} −1`}>
        −
      </button>
      <span className="min-w-[2.75rem] text-center sm:min-w-[3.25rem] font-v4-sans text-base font-semibold tabular-nums text-v4-ivory" aria-live="polite">
        {value}
        <span className="ml-0.5 text-xs font-normal text-v4-ivory/55">{unit}</span>
      </span>
      <button type="button" className={btn} onClick={() => onChange(clamp(value + 1, 0, max))} aria-label={`${label} +1`}>
        +
      </button>
    </div>
  );
}

/**
 * TASK MAP. The interactive lead magnet: a role, its tasks with hours, a class per task (tap to
 * change), people and hourly cost, and the result. All state starts from fixed defaults, so the
 * prerendered HTML and the first client render are identical. The two savings assumptions stand
 * next to the result and can be changed. "Get this map" hands role and result to the form.
 */
export function TaskMapCalculator({ t }: { t: AiTexts }) {
  const m = t.map;
  const [roleId, setRoleId] = useState(ROLES[0].id);
  const [tasksByRole, setTasksByRole] = useState<Record<string, readonly RoleTask[]>>(() =>
    Object.fromEntries(ROLES.map((r) => [r.id, r.tasks]))
  );
  const [people, setPeople] = useState(2);
  const [cost, setCost] = useState(DEFAULT_HOURLY_COST);
  const [saving, setSaving] = useState<Record<TaskClass, number>>({ ...DEFAULT_SAVING });

  const tasks = tasksByRole[roleId];
  const updateTask = (id: string, patch: Partial<RoleTask>) =>
    setTasksByRole((prev) => ({ ...prev, [roleId]: prev[roleId].map((x) => (x.id === id ? { ...x, ...patch } : x)) }));

  const result = useMemo(() => {
    const total = tasks.reduce((sum, x) => sum + x.hours, 0);
    const perPerson = tasks.reduce((sum, x) => sum + freedHours(x, saving), 0);
    const teamWeek = perPerson * people;
    const year = teamWeek * WORK_WEEKS_PER_YEAR;
    const value = year * cost;
    const daysPerMonth = (year / 12) / 8;
    const byClass = TASK_CLASS_ORDER.map((cls) => ({
      cls,
      hours: tasks.filter((x) => x.cls === cls).reduce((sum, x) => sum + x.hours, 0),
    }));
    const top = [...tasks]
      .filter((x) => x.cls !== "human")
      .sort((a, b) => freedHours(b, saving) - freedHours(a, saving))
      .slice(0, 3)
      .map((x) => m.tasks[x.id])
      .join(", ");
    return { total, perPerson, teamWeek, year, value, daysPerMonth, byClass, top };
  }, [tasks, saving, people, cost, m.tasks]);

  const takeAlong = () =>
    selectAiOption({
      option: t.ladder.tiers[0].option,
      note: m.note({
        role: m.roles[roleId],
        people,
        perPerson: m.formatHours(result.perPerson),
        perYear: m.formatHours(Math.round(result.year)),
        top: result.top || "–",
      }),
    });

  return (
    <StateField field="dark" as="section" id={AI_ANCHORS.map} aria-labelledby="ai-map" className="scroll-mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <SystemLabel as="p" className="mb-6 block text-v4-ivory/60">
            {m.label}
          </SystemLabel>
          <h2
            id="ai-map"
            className="text-balance font-v4-serif text-[length:var(--v4-text-major)] font-normal leading-[1.04] text-v4-ivory"
          >
            {m.title}
          </h2>
          <p className="mt-6 max-w-2xl font-v4-sans text-[length:var(--v4-text-body)] leading-relaxed text-v4-ivory/70">{m.text}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
          {/* left: role and tasks */}
          <div className="min-w-0 rounded-[1.75rem] border border-v4-ivory/15 bg-v4-ivory/[0.03] p-5 sm:p-7">
            <div role="radiogroup" aria-label={m.roleLabel} className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {ROLES.map((role) => {
                const active = role.id === roleId;
                return (
                  <button
                    key={role.id}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setRoleId(role.id)}
                    className={cn(
                      "min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-4 font-v4-sans text-sm font-medium transition-colors",
                      focusRing,
                      active
                        ? "border-v4-ivory bg-v4-ivory text-v4-ink"
                        : "border-v4-ivory/20 text-v4-ivory/75 hover:border-v4-ivory/50"
                    )}
                  >
                    {m.roles[role.id]}
                  </button>
                );
              })}
            </div>

            {/* phones: the live result next to the tasks, the full panel follows below */}
            <p className="mt-5 flex items-baseline justify-between gap-3 rounded-xl bg-v4-signal px-4 py-3 font-v4-sans text-v4-ink lg:hidden">
              <span className="text-sm font-medium">{m.perPerson}</span>
              <span className="text-2xl font-extrabold tabular-nums">
                {m.formatHours(result.perPerson)}
                <span className="ml-0.5 text-sm font-bold">{m.hoursUnit}</span>
              </span>
            </p>

            <div className="mt-6 flex h-2.5 w-full overflow-hidden rounded-full bg-v4-ivory/10" aria-hidden="true">
              {result.byClass.map(({ cls, hours }) => (
                <span
                  key={cls}
                  className={cn("h-full transition-[width] duration-300", BAR_FILL[cls])}
                  style={{ width: result.total ? `${(hours / result.total) * 100}%` : "0%" }}
                />
              ))}
            </div>

            <div className="mt-6 hidden grid-cols-[1fr_auto] gap-4 px-1 pb-2 sm:grid">
              <SystemLabel className="text-v4-ivory/45">{m.classHint}</SystemLabel>
              <SystemLabel className="text-right text-v4-ivory/45">{m.hoursLabel}</SystemLabel>
            </div>
            <ul className="flex flex-col">
              {tasks.map((task) => {
                const name = m.tasks[task.id];
                return (
                  <li
                    key={`${roleId}-${task.id}`}
                    className="flex items-center justify-between gap-3 border-t border-v4-ivory/10 py-4"
                  >
                    <div className="flex min-w-0 flex-col gap-2">
                      <span className="font-v4-sans text-base font-medium text-v4-ivory">{name}</span>
                      <button
                        type="button"
                        onClick={() => updateTask(task.id, { cls: nextTaskClass(task.cls) })}
                        aria-label={`${name}: ${m.classes[task.cls]}. ${m.classHint}`}
                        className={cn(
                          "inline-flex min-h-[36px] w-fit items-center gap-2 rounded-full border px-3.5 font-v4-sans text-xs font-semibold transition-colors",
                          focusRing,
                          CHIP_FILL[task.cls],
                          task.cls === "human" && "border-v4-ivory/45 text-v4-ivory/85"
                        )}
                      >
                        {m.classes[task.cls]}
                        <span aria-hidden="true" className="opacity-60">
                          ⇄
                        </span>
                      </button>
                    </div>
                    <Stepper
                      value={task.hours}
                      onChange={(hours) => updateTask(task.id, { hours })}
                      label={`${name}, ${m.hoursLabel}`}
                      unit={m.hoursUnit}
                      max={40}
                    />
                  </li>
                );
              })}
            </ul>

            <div className="mt-2 grid gap-4 border-t border-v4-ivory/10 pt-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-v4-sans text-sm text-v4-ivory/70">
                {m.peopleLabel}
                <input
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={200}
                  value={people}
                  onChange={(e) => setPeople(clamp(Math.round(toNumber(e.target.value, 1)), 1, 200))}
                  className={numberClass}
                />
              </label>
              <label className="flex flex-col gap-2 font-v4-sans text-sm text-v4-ivory/70">
                {m.costLabel}
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  max={500}
                  value={cost}
                  onChange={(e) => setCost(clamp(toNumber(e.target.value, 0), 0, 500))}
                  className={numberClass}
                />
              </label>
            </div>
          </div>

          {/* right: result */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[1.75rem] bg-v4-signal p-6 text-v4-ink sm:p-8" aria-live="polite">
              <SystemLabel as="p" className="text-v4-ink/65">
                {m.resultLabel}
              </SystemLabel>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="font-v4-sans text-[4.5rem] font-extrabold leading-none tracking-tight tabular-nums sm:text-[5.25rem]">
                  {m.formatHours(result.perPerson)}
                </span>
                <span className="font-v4-sans text-xl font-bold">{m.hoursUnit}</span>
              </p>
              <p className="mt-2 font-v4-sans text-sm font-medium text-v4-ink/75">{m.perPerson}</p>

              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-v4-ink/15">
                <div className="bg-v4-signal p-3">
                  <dt className="font-v4-sans text-xs text-v4-ink/65">{m.perTeamWeek}</dt>
                  <dd className="mt-1 font-v4-sans text-xl font-bold tabular-nums">{m.formatHours(result.teamWeek)}</dd>
                </div>
                <div className="bg-v4-signal p-3">
                  <dt className="font-v4-sans text-xs text-v4-ink/65">{m.perYear}</dt>
                  <dd className="mt-1 font-v4-sans text-xl font-bold tabular-nums">{m.formatHours(Math.round(result.year))}</dd>
                </div>
                <div className="col-span-2 bg-v4-signal p-3">
                  <dt className="font-v4-sans text-xs text-v4-ink/65">{m.value}</dt>
                  <dd className="mt-1 font-v4-sans text-2xl font-extrabold tabular-nums">{m.formatMoney(result.value)}</dd>
                </div>
              </dl>
              <p className="mt-5 font-v4-sans text-sm leading-relaxed text-v4-ink/80">
                {m.capacity(m.formatHours(Math.round(result.daysPerMonth * 10) / 10))}
              </p>

              <AnchorButton
                href={`#${AI_ANCHORS.form}`}
                onClick={takeAlong}
                tone="signal"
                className="mt-6 w-full !bg-v4-ink !text-v4-ivory"
              >
                {m.cta}
              </AnchorButton>
              <p className="mt-3 text-center font-v4-sans text-xs text-v4-ink/65">{m.ctaNote}</p>
            </div>

            <div className="mt-4 rounded-2xl border border-v4-ivory/15 p-5">
              <SystemLabel as="p" className="text-v4-ivory/50">
                {m.assumptionsLabel}
              </SystemLabel>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {(["automate", "assist"] as const).map((cls) => (
                  <label key={cls} className="flex flex-col gap-2 font-v4-sans text-xs text-v4-ivory/65">
                    {m.assumption(m.classes[cls])}
                    <span className="relative">
                      <input
                        type="number"
                        inputMode="numeric"
                        min={0}
                        max={100}
                        step={5}
                        value={saving[cls]}
                        onChange={(e) =>
                          setSaving((prev) => ({ ...prev, [cls]: clamp(Math.round(toNumber(e.target.value, 0)), 0, 100) }))
                        }
                        className={cn(numberClass, "pr-8")}
                      />
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-v4-ivory/50">%</span>
                    </span>
                  </label>
                ))}
              </div>
              <p className="mt-4 font-v4-sans text-xs leading-relaxed text-v4-ivory/55">{m.assumptionsNote}</p>
            </div>
          </div>
        </div>
      </div>
    </StateField>
  );
}
