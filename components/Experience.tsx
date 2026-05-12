import type { WorkExperience } from "@/lib/content";
import { experience } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="space-y-14">
        {experience.map((entry) => (
          <OrgEntry key={entry.org} entry={entry} />
        ))}
      </ol>
    </Section>
  );
}

function OrgEntry({ entry }: { entry: WorkExperience }) {
  const isMultiRole = entry.roles.length > 1;

  return (
    <li className="grid gap-6 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-4">
        <h3 className="font-sans text-lg font-medium leading-tight tracking-tight text-[color:var(--color-fg)]">
          {entry.org}
        </h3>
        <div className="mt-1 font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
          {entry.meta}
        </div>
      </div>

      <ol
        className={
          isMultiRole
            ? "space-y-8 border-l border-[color:var(--color-border)] pl-6 md:col-span-8"
            : "md:col-span-8"
        }
      >
        {entry.roles.map((role, i) => (
          <li
            key={`${role.title}-${i}`}
            className={isMultiRole ? "relative" : ""}
          >
            {isMultiRole && (
              <span
                aria-hidden
                className="absolute -left-[29px] top-[7px] h-2.5 w-2.5 rounded-full border-2 border-[color:var(--color-bg)] bg-[color:var(--color-accent)]"
              />
            )}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h4 className="font-sans text-base font-medium leading-tight text-[color:var(--color-fg)]">
                {role.title}
              </h4>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                {role.period}
              </span>
            </div>
            <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted)]">
              {role.summary}
            </p>
          </li>
        ))}
      </ol>
    </li>
  );
}
