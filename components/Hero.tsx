import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
        <span className="h-px w-8 bg-[color:var(--color-accent)]" aria-hidden />
        {profile.location}
      </div>

      <h1 className="font-sans text-5xl font-medium leading-[1.05] tracking-tight text-[color:var(--color-fg)] sm:text-6xl md:text-7xl">
        {profile.name}.
      </h1>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[color:var(--color-muted)] sm:text-2xl">
        {profile.tagline}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm">
        <a
          href={profile.resumeHref}
          className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-fg)] px-5 py-2.5 text-[color:var(--color-bg)] transition hover:bg-[color:var(--color-accent)]"
        >
          Leadership CV
          <span aria-hidden className="transition group-hover:translate-x-0.5">↗</span>
        </a>
        <a
          href={profile.github}
          className="link-underline text-[color:var(--color-fg)]"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          className="link-underline text-[color:var(--color-fg)]"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline text-[color:var(--color-fg)]"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
