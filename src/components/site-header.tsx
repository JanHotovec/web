import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

type LeafLink = {
  label: string;
  to: string;
  hash?: string;
  description?: string;
};

type NavItem =
  | ({ kind: "link" } & LeafLink)
  | { kind: "group"; label: string; children: LeafLink[]; matchPaths: string[] };

const nav: NavItem[] = [
  { kind: "link", label: "Domů", to: "/" },
  {
    kind: "group",
    label: "Business",
    matchPaths: ["/sluzby", "/projekty", "/cv"],
    children: [
      { label: "Služby", to: "/sluzby", description: "Co pro vás mohu udělat" },
      { label: "Projekty", to: "/projekty", description: "Realizace a case studies" },
      { label: "Reference", to: "/", hash: "reference", description: "Slova mých klientů" },
      { label: "CV", to: "/cv", description: "Profesní životopis" },
    ],
  },
  {
    kind: "group",
    label: "Poznejte mě",
    matchPaths: ["/poznejte-me", "/pribeh", "/dopisy-skafandr", "/sponzori", "/cv"],
    children: [
      { label: "Příběh", to: "/pribeh", description: "Život ve skafandru" },
      { label: "111 hodin 2018", to: "/dopisy-skafandr", description: "Výzva a film" },
      { label: "Sponzoři a dárci", to: "/sponzori", description: "Poděkování" },
    ],
  },
  { kind: "link", label: "Kontakt", to: "/kontakt" },
];

function isGroupActive(item: Extract<NavItem, { kind: "group" }>, pathname: string) {
  return item.matchPaths.some((p) => (p === "/" ? pathname === "/" : pathname.startsWith(p)));
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileGroup(null);
  }, [pathname]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 160);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link to="/" className="group flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold transition-transform group-hover:rotate-12">
            JH
          </span>
          <div className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate font-display text-sm font-semibold">Bc. Jan Hotovec</span>
            <span className="truncate text-[11px] tracking-[0.02em] text-muted-foreground">
              webdesignér ve skafandru <span className="text-primary">○</span> Liberec
            </span>
          </div>
        </Link>

        <nav
          onMouseLeave={scheduleClose}
          className="liquid-nav absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full p-1.5 lg:flex"
        >
          {nav.map((item) => {
            if (item.kind === "link") {
              const active =
                item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenGroup(null);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const active = isGroupActive(item, pathname);
            const isOpen = openGroup === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenGroup(item.label);
                }}
              >
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                  onClick={() => setOpenGroup(isOpen ? null : item.label)}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active || isOpen ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`text-[0.65rem] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full z-20 mt-3 w-72 -translate-x-1/2 pt-1"
                    onMouseEnter={cancelClose}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="liquid-nav rounded-2xl p-2 shadow-[var(--shadow-soft)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          hash={c.hash}
                          role="menuitem"
                          onClick={() => setOpenGroup(null)}
                          className="block rounded-xl px-4 py-3 transition-colors hover:bg-primary/5"
                        >
                          <div className="text-sm font-semibold text-foreground">{c.label}</div>
                          {c.description && (
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {c.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <Link
          to="/kontakt"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
        >
          Návrh zdarma
          <span aria-hidden>→</span>
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="liquid-nav grid h-11 w-11 shrink-0 place-items-center rounded-full lg:hidden"
        >
          <span className="font-display text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-[1400px] px-6 pb-4 lg:hidden">
          <div className="liquid-nav flex flex-col gap-1 rounded-3xl p-3">
            {nav.map((item) => {
              if (item.kind === "link") {
                const active =
                  item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              const expanded = mobileGroup === item.label;
              const active = isGroupActive(item, pathname);
              return (
                <div key={item.label} className="rounded-2xl">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setMobileGroup(expanded ? null : item.label)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      active || expanded
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span
                      aria-hidden
                      className={`text-xs transition-transform ${expanded ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </button>
                  {expanded && (
                    <div className="mt-1 flex flex-col gap-1 pl-3">
                      {item.children.map((c) => (
                        <Link
                          key={c.label}
                          to={c.to}
                          hash={c.hash}
                          onClick={() => setOpen(false)}
                          className="rounded-xl px-4 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Návrh zdarma →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}