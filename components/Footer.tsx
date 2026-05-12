export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] py-10">
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[color:var(--color-subtle)]">
        <span>© {new Date().getFullYear()} Marek Kacprzak.</span>
        <span>Built with Next.js, TypeScript, Tailwind.</span>
      </div>
    </footer>
  );
}
