import type { Project } from "@/lib/content";
import { projects } from "@/lib/content";
import { Section } from "./Section";

export function Projects() {
  const featured = projects.filter((p) => p.category === "featured");
  const engineering = projects.filter((p) => p.category === "engineering");
  const research = projects.filter((p) => p.category === "research");

  return (
    <Section id="projects" eyebrow="Selected Work" title="Things I've worked on.">
      <div className="space-y-16">
        <SubGroup label="Featured">
          <FeaturedGrid projects={featured} />
        </SubGroup>

        <SubGroup label="More work">
          <CompactList projects={engineering} />
        </SubGroup>

        <SubGroup label="Research & Academic">
          <CompactList projects={research} />
        </SubGroup>
      </div>
    </Section>
  );
}

function SubGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
        <span
          className="h-px w-6 bg-[color:var(--color-accent)]"
          aria-hidden
        />
        {label}
      </div>
      {children}
    </div>
  );
}

function FeaturedGrid({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-border)] md:grid-cols-2">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="flex flex-col gap-6 bg-[color:var(--color-bg-elevated)] p-8 transition-colors hover:bg-[color:var(--color-bg)]"
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
              <li
                key={t}
                className="rounded-full border border-[color:var(--color-border)] px-2.5 py-1"
              >
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
  );
}

function CompactList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
      {projects.map((project) => (
        <li
          key={project.slug}
          className="group py-5 transition-colors hover:bg-[color:var(--color-bg-elevated)]"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="font-sans text-base font-medium leading-tight tracking-tight text-[color:var(--color-fg)]">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
              {project.year}
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-muted)]">
            {project.tagline}
          </p>

          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[11px] text-[color:var(--color-subtle)]">
            {project.tech.map((t, i) => (
              <li key={t}>
                {t}
                {i < project.tech.length - 1 && (
                  <span aria-hidden className="ml-2">
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>

          {project.links && project.links.length > 0 && (
            <div className="mt-3 flex gap-4 font-mono text-xs">
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
  );
}
