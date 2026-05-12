import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="border-t border-[color:var(--color-border)] py-20 sm:py-28">
      <header className="mb-12 grid gap-3 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
            <span className="h-px w-6 bg-[color:var(--color-accent)]" aria-hidden />
            {eyebrow}
          </div>
        </div>
        <h2 className="font-sans text-3xl font-medium leading-tight tracking-tight text-[color:var(--color-fg)] sm:text-4xl md:col-span-8">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
