const items = [
  { href: "#about", label: "About" },
  { href: "#leadership", label: "Leadership" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 -mx-6 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/80 px-6 backdrop-blur-md sm:-mx-10 sm:px-10">
      <div className="flex h-14 items-center justify-between font-mono text-xs uppercase tracking-wider">
        <a href="#" className="text-[color:var(--color-fg)]" aria-label="Back to top">
          MK
        </a>
        <ul className="hidden gap-6 text-[color:var(--color-muted)] md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-[color:var(--color-fg)]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
