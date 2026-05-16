import { NavLink } from "react-router-dom";
import { site } from "../data/site";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-graphite/72 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 border-b border-graphite-line px-4 sm:px-8"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="shrink-0 text-sm font-semibold text-ember transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:text-ink sm:hover:text-ember"
        >
          {site.name}
        </NavLink>
        <div className="flex min-w-0 shrink items-center gap-0 rounded-full border border-graphite-line bg-ink/[0.04] p-0.5 sm:gap-1 sm:p-1">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "rounded-full px-2 py-1.5 text-xs font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ember min-[390px]:px-2.5 sm:px-3 sm:py-2 sm:text-sm",
                  isActive
                    ? "bg-ember text-graphite shadow-glow"
                    : "text-ink-muted hover:text-ember",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
