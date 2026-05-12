import { projects } from "@/lib/content";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Things I've built.">
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-border)] md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="group flex flex-col gap-6 bg-[color:var(--color-bg-elevated)] p-8 transition-colors hover:bg-[color:var(--color-bg)]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-sans text-xl font-medium leading-tight tracking-tight text-[color:var(--color-fg)]">
                {project.title}
              </h3>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                {project.year}
              </span>
            </div>

            <p className="text-base leading-relaxed text-[color:var(--color-muted)]">
              {project.tagline}
            </p>

            <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
              {project.description}
            </p>

            <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-[color:var(--color-muted)]">
              {project.tech.map((t) => (
                <li key={t} className="rounded-full border border-[color:var(--color-border)] px-2.5 py-1">
                  {t}
                </li>
              ))}
            </ul>

            {project.links && project.links.length > 0 && (
              <div className="flex gap-5 font-mono text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-[color:var(--color-accent)]"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
