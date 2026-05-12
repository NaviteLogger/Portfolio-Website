import { about } from "@/lib/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="What I do.">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4" />
        <div className="space-y-5 text-lg leading-relaxed text-[color:var(--color-muted)] md:col-span-8">
          {about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
