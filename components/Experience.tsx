import { experience } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="space-y-12">
        {experience.map((entry, i) => (
          <li
            key={`${entry.org}-${i}`}
            className="grid gap-4 md:grid-cols-12 md:gap-8"
          >
            <div className="md:col-span-4">
              <div className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                {entry.period}
              </div>
              <div className="mt-2 font-sans text-base font-medium text-[color:var(--color-fg)]">
                {entry.org}
              </div>
              <div className="font-mono text-xs text-[color:var(--color-muted)]">
                {entry.location}
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="font-sans text-lg font-medium leading-tight text-[color:var(--color-fg)]">
                {entry.role}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[color:var(--color-muted)]">
                {entry.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
