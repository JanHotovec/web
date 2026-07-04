import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr_1fr] md:px-10">
        <div>
          <p className="font-display text-3xl leading-[1.05] md:text-5xl">
            Pojďme si napsat.<br />
            <span className="text-background/60">Návrh dostanete zdarma.</span>
          </p>
          <Link
            to="/kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Začít projekt <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase tracking-[0.18em] text-background/50">Navigace</span>
          <Link to="/" className="hover:text-background/80">Úvod</Link>
          <Link to="/sluzby" className="hover:text-background/80">Služby</Link>
          <Link to="/projekty" className="hover:text-background/80">Projekty</Link>
          <Link to="/" hash="reference" className="hover:text-background/80">Reference</Link>
          <Link to="/cv" className="hover:text-background/80">CV</Link>
          <Link to="/pribeh" className="hover:text-background/80">Příběh</Link>
          <Link to="/dopisy-skafandr" className="hover:text-background/80">Dopisy z hlavy & Skafandr</Link>
          <Link to="/sponzori" className="hover:text-background/80">Sponzoři a dárci</Link>
          <Link to="/kontakt" className="hover:text-background/80">Kontakt</Link>
          <Link to="/legal" className="hover:text-background/80">Legal</Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase tracking-[0.18em] text-background/50">Najdete mě</span>
          <a href="https://www.linkedin.com/in/janhotovec98/" target="_blank" rel="noreferrer" className="hover:text-background/80">LinkedIn</a>
          <a href="mailto:janhotovec98@gmail.com" className="hover:text-background/80">janhotovec98@gmail.com</a>
          <span className="text-background/50">Liberec · Česko</span>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-background/50 md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} Bc. Jan Hotovec. Všechna práva vyhrazena.</span>
          <span className="font-display tracking-wide">JH98 · život ve skafandru</span>
        </div>
      </div>
    </footer>
  );
}