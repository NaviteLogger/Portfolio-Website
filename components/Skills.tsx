import { skillGroups } from "@/lib/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Stack" title="Tools I reach for.">
      <dl className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
              {group.label}
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-[color:var(--color-fg)]">
              {group.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
