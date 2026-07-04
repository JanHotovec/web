import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PROJECTS } from "@/lib/site-data";

export const Route = createFileRoute("/projekty")({
  head: () => ({
    meta: [
      { title: "Projekty — Jan Hotovec | Portfolio webdesignéra z Liberce" },
      {
        name: "description",
        content:
          "Vybrané projekty a realizace webových stránek. Osobní značky, firmy, lokální byznys i B2B služby — všechny weby tvořím na míru.",
      },
      { property: "og:title", content: "Projekty — Jan Hotovec" },
      {
        property: "og:description",
        content: "Portfolio realizovaných webů — od osobních značek po lokální firmy.",
      },
    ],
  }),
  component: Projekty,
});

function Projekty() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-10 md:pt-28">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">§ — Projekty</span>
          <div className="mt-6 grid items-end gap-8 md:grid-cols-12">
            <h1 className="md:col-span-8 font-display text-5xl leading-[0.98] md:text-7xl">
              {PROJECTS.length}+ projektů, na které jsem <span className="italic text-primary">hrdý</span>.
            </h1>
            <p className="md:col-span-4 text-lg text-muted-foreground">
              Každý web má vlastní příběh. Tady jsou ty, na kterých jsem v posledních letech pracoval — od osobních značek po lokální byznysy.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32">
          <div className="grid gap-6 md:grid-cols-12">
            {PROJECTS.map((p, i) => {
              const span =
                p.size === "lg" ? "md:col-span-8" : p.size === "sm" ? "md:col-span-4" : "md:col-span-6";
              const Wrap: React.ElementType = p.url ? "a" : "div";
              const props = p.url ? { href: p.url, target: "_blank", rel: "noreferrer" } : {};
              return (
                <div key={p.slug} className={span}>
                  <Wrap
                    {...props}
                    className="group block overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={`${p.title} — ${p.category}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute left-5 top-5 font-display text-xs uppercase tracking-[0.22em] text-background/90">
                        № {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-end justify-between gap-6 p-6">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                          {p.category} · {p.year}
                        </p>
                        <h3 className="mt-2 font-display text-2xl leading-tight md:text-3xl">{p.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
                      </div>
                      <span className={`shrink-0 grid h-11 w-11 place-items-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary ${p.url ? "" : "opacity-30"}`} aria-hidden>↗</span>
                    </div>
                  </Wrap>
                </div>
              );
            })}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Link to="/kontakt" className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform">
              Chci nový web →
            </Link>
            <Link to="/" hash="reference" className="rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">
              Přečíst reference
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}