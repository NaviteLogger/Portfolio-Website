import { profile } from "@/lib/content";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Build something that matters.">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-4" />
        <div className="md:col-span-8">
          <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
            I&apos;m interested in engineering leadership, technical management, and senior product-engineering roles where I can help a strong team turn complex problems into dependable systems. The best way to reach me is{" "}
            <a href={`mailto:${profile.email}`} className="link-underline text-[color:var(--color-fg)]">
              email
            </a>
            .
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-y-6 font-mono text-sm sm:grid-cols-2">
            <ContactItem label="Email" href={`mailto:${profile.email}`} text={profile.email} />
            <ContactItem label="GitHub" href={profile.github} text="navitelogger" external />
            <ContactItem label="LinkedIn" href={profile.linkedin} text="marek-kacprzak" external />
            <div>
              <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">Based in</dt>
              <dd className="mt-1 text-[color:var(--color-fg)]">{profile.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}

function ContactItem({ label, href, text, external = false }: { label: string; href: string; text: string; external?: boolean }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-[color:var(--color-subtle)]">{label}</dt>
      <dd className="mt-1">
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="link-underline text-[color:var(--color-fg)]">
          {text}
        </a>
      </dd>
    </div>
  );
}
