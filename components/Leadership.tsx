import { leadershipHighlights } from "@/lib/content";
import { Section } from "./Section";

export function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="How I create leverage.">
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-border)] sm:grid-cols-2">
        {leadershipHighlights.map((item) => (
          <li key={item.label} className="bg-[color:var(--color-bg-elevated)] p-7 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-[color:var(--color-accent)]">
              {item.value}
            </div>
            <h3 className="mt-4 text-lg font-medium tracking-tight text-[color:var(--color-fg)]">
              {item.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
