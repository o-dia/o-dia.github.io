import { NavLink } from "react-router-dom";
import { site } from "../data/site";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-graphite-line bg-graphite/72 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          className="text-sm font-semibold uppercase tracking-[0.24em] text-ink"
        >
          {site.name}
        </NavLink>
        <div className="flex items-center gap-1 rounded-full border border-graphite-line bg-ink/[0.04] p-1">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "rounded-full px-3 py-2 text-xs font-medium text-ink-muted transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ember sm:text-sm",
                  isActive ? "bg-ink text-graphite" : "",
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
