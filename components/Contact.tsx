import { profile } from "@/lib/content";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk.">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4" />
        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
            The best way to reach me is{" "}
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-[color:var(--color-fg)]"
            >
              email
            </a>
            . I&apos;m most interested in backend-leaning roles with strong engineering peers and a product I can take ownership of.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-y-6 font-mono text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline text-[color:var(--color-fg)]"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                GitHub
              </dt>
              <dd className="mt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-[color:var(--color-fg)]"
                >
                  navitelogger
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                LinkedIn
              </dt>
              <dd className="mt-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-[color:var(--color-fg)]"
                >
                  marek-kacprzak
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">
                Based in
              </dt>
              <dd className="mt-1 text-[color:var(--color-fg)]">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
