import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTRAIT_STORY } from "@/lib/site-data";

export const Route = createFileRoute("/poznejte-me")({
  head: () => ({
    meta: [
      { title: "Poznejte mě — Jan Hotovec" },
      {
        name: "description",
        content:
          "Rozcestník osobní části webu — příběh Jana Hotovce, výzva 111 hodin 2018 a poděkování sponzorům a dárcům.",
      },
      { property: "og:title", content: "Poznejte mě — Jan Hotovec" },
      {
        property: "og:description",
        content: "Příběh, 111 hodin 2018 a poděkování těm, kteří mě podporují.",
      },
      { property: "og:image", content: PORTRAIT_STORY },
    ],
  }),
  component: PoznejteMe,
});

type Card = {
  eyebrow: string;
  title: string;
  text: string;
  to: string;
  cta: string;
};

const cards: Card[] = [
  {
    eyebrow: "Osobní",
    title: "Příběh",
    text: "Honza, 27, Liberec. Život ve skafandru — dětská mozková obrna od narození, ale tělo mě nezastaví. Krátký, upřímný pohled do mého života.",
    to: "/pribeh",
    cta: "Přečíst příběh",
  },
  {
    eyebrow: "Výzva 2018",
    title: "111 hodin 2018",
    text: "Metrostav Handy Cyklo Maraton, 2 222 km napříč Českem a film Dopisy z hlavy / Skafandr. Silný okamžik, který mě formuje dodnes.",
    to: "/dopisy-skafandr",
    cta: "Zobrazit sekci",
  },
  {
    eyebrow: "Poděkování",
    title: "Sponzoři a dárci",
    text: "Lidé a firmy, kteří dlouhodobě podporují moji cestu, kondici i každodenní život. Bez jejich důvěry by to nešlo.",
    to: "/sponzori",
    cta: "Poděkovat s námi",
  },
];

function PoznejteMe() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1100px] px-6 pt-20 pb-8 md:px-10 md:pt-28">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">
            Poznejte mě
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            Za weby stojí <span className="italic text-primary">člověk</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Jsem Honza. Webdesignér ve skafandru z Liberce. Kromě práce pro klienty
            mě formuje i osobní příběh, výzvy, které si dávám, a lidé, kteří stojí
            při mně. Tady je to nejdůležitější na jednom místě.
          </p>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="liquid-pill group flex h-full flex-col rounded-[1.75rem] p-8 transition-transform hover:-translate-y-1"
              >
                <span className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  {c.eyebrow}
                </span>
                <h2 className="mt-4 font-display text-2xl leading-tight md:text-3xl">
                  {c.title}
                </h2>
                <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {c.cta}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10 md:pb-32">
          <div className="rounded-[2rem] border border-border bg-secondary/40 p-10 md:p-14">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl md:text-4xl">
                  Chcete se podívat i na profesní stranu?
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Kompletní životopis, vzdělání a zkušenosti najdete v mém CV.
                </p>
              </div>
              <Link
                to="/cv"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Zobrazit CV →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}