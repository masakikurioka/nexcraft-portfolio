const SOCIALS = [
  { label: "X (Twitter)", href: "https://x.com/nexcraft_dev" },
  { label: "GitHub", href: "https://github.com/nexcraft-dev" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-foreground">
            Nex<span className="gradient-text">Craft</span>
          </p>
          <p className="text-sm text-foreground-subtle mt-1">
            &copy; {new Date().getFullYear()} Nex Craft. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
