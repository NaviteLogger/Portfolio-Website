import type { Project, ProjectDetails } from "@/lib/content";
import { projects } from "@/lib/content";
import { Section } from "./Section";

export function Projects() {
  const featured = projects.filter((p) => p.category === "featured");
  const engineering = projects.filter((p) => p.category === "engineering");
  const research = projects.filter((p) => p.category === "research");

  return (
    <Section id="projects" eyebrow="Selected Work" title="Systems and products I've led.">
      <div className="space-y-16">
        <SubGroup label="Leadership & impact">
          <FeaturedGrid projects={featured} />
        </SubGroup>

        <SubGroup label="Engineering depth">
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
          className="flex flex-col gap-6 bg-[color:var(--color-bg-elevated)] p-8 transition-colors"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
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

          <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-[color:var(--color-muted)]">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[color:var(--color-border)] px-2.5 py-1"
              >
                {t}
              </li>
            ))}
          </ul>

          <ProjectFooter project={project} />
        </li>
      ))}
    </ul>
  );
}

function CompactList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
      {projects.map((project) => (
        <li key={project.slug} className="py-5">
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

          <ProjectFooter project={project} compact />
        </li>
      ))}
    </ul>
  );
}

function ProjectFooter({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const hasDetails = Boolean(project.details);
  const hasLinks = project.links && project.links.length > 0;

  if (!hasDetails && !hasLinks) return null;

  return (
    <div className={compact ? "mt-3 space-y-3" : "mt-auto space-y-4"}>
      {hasLinks && (
        <div className="flex gap-5 font-mono text-sm">
          {project.links!.map((link) => (
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

      {hasDetails && <ExpandableDetails details={project.details!} />}
    </div>
  );
}

function ExpandableDetails({ details }: { details: ProjectDetails }) {
  return (
    <details className="group/details border-t border-[color:var(--color-border)] pt-4">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-xs uppercase tracking-wider text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-fg)] [&::-webkit-details-marker]:hidden">
        <span className="group-open/details:hidden">Show details</span>
        <span className="hidden group-open/details:inline">Hide details</span>
        <span
          aria-hidden
          className="transition-transform group-open/details:rotate-180"
        >
          ↓
        </span>
      </summary>

      <div className="mt-5 space-y-6">
        {details.overview && (
          <p className="text-sm leading-relaxed text-[color:var(--color-muted)]">
            {details.overview}
          </p>
        )}

        {details.sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-fg)]">
              {section.heading}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {section.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed text-[color:var(--color-muted)]"
                >
                  <span className="font-medium text-[color:var(--color-fg)]">
                    {bullet.label}:
                  </span>{" "}
                  {bullet.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}
