import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTRAIT_STORY, PORTRAIT_MAIN } from "@/lib/site-data";

export const Route = createFileRoute("/pribeh")({
  head: () => ({
    meta: [
      { title: "Příběh — Jan Hotovec | Život ve skafandru" },
      {
        name: "description",
        content:
          "Honza, 27, Liberec. Život ve skafandru — DMO od narození, ale tělo mě nezastaví. Příběh kluka, který si plní sny a staví weby.",
      },
      { property: "og:title", content: "Příběh — Jan Hotovec | Život ve skafandru" },
      { property: "og:image", content: PORTRAIT_STORY },
    ],
  }),
  component: Pribeh,
});

function Pribeh() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1100px] px-6 py-20 md:px-10 md:py-28">
        <span className="text-xs uppercase tracking-[0.22em] text-primary">Poznejte mě</span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.0] md:text-7xl">
          Život ve <span className="italic text-primary">skafandru</span>, ale s plnou hlavou nápadů.
        </h1>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.3fr] md:items-start">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={PORTRAIT_STORY} alt="Jan Hotovec" className="h-full w-full object-cover" />
          </div>

          <article className="prose-lg space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Jmenuji se <strong className="text-foreground">Honza</strong>. Je mi 27 let a jsem z Liberce. Chtěl jsem
              se světu ukázat — být viděn a sdělit svůj příběh v tom nejlepším světle. Vytvořil jsem si proto web.
              Úplně sám. Zabralo to spoustu času a šperkuju ho dodnes, ale je{" "}
              <em className="text-foreground">můj</em> a ze mě.
            </p>
            <p>
              Od narození mám dětskou mozkovou obrnu. V hlavě mi to pálí o 106, ale tělo mě neposlouchá na 100 %.
              Nemůžu běhat, ani pořádně chodit a mluvit. To mě ale nezastaví, abych si plnil své sny.
            </p>
            <h2 className="mt-10 font-display text-3xl text-foreground md:text-4xl">
              V roce 2018 o mně natočili film.
            </h2>
            <p>
              Jeli jsme na kole. Léto, slunce, vedro a hlavně pořádná výzva. To je něco pro mě. Nejsem žádná
               s***čka. V&nbsp;týmu nás bylo&nbsp;7 a jeden postižený, AKA já. Na startovní čáře jsme měli{" "}
              <strong className="text-foreground">2&nbsp;222&nbsp;km</strong> po České republice a{" "}
              <strong className="text-foreground">111 hodin</strong> na to to ujet.
            </p>
            <p>Co myslíte, dali jsme to?</p>
          </article>
        </div>

        <div className="mt-16 grid gap-6 rounded-[2rem] border border-border bg-secondary/40 p-10 md:grid-cols-3">
          {[
            { n: "27", l: "Let" },
            { n: "Liberec", l: "Domov" },
            { n: "JH98", l: "Značka" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl">{s.n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4">
          <Link to="/kontakt" className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Napsat Honzovi
          </Link>
          <Link to="/" className="rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">
            ← Zpět na práci
          </Link>
        </div>

        <img src={PORTRAIT_MAIN} alt="" className="sr-only" aria-hidden />
      </main>
      <SiteFooter />
    </div>
  );
}