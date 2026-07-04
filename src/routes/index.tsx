import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PORTRAIT_MAIN, PORTRAIT_STORY, PROJECTS, TESTIMONIALS, REASONS } from "@/lib/site-data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jan Hotovec — Webdesignér, který dělá weby s příběhem" },
      {
        name: "description",
        content:
          "Navrhuji a stavím weby, které vás důstojně představí a podpoří vaše podnikání. Návrh dostanete zdarma — a pak se rozhodnete. 14+ projektů, 17+ referencí, Liberec.",
      },
      { property: "og:title", content: "Jan Hotovec — Webdesignér z Liberce" },
      {
        property: "og:description",
        content: "Navrhuji a stavím weby, které vás důstojně představí. Návrh dostanete zdarma.",
      },
      { property: "og:image", content: PORTRAIT_MAIN },
      { name: "twitter:image", content: PORTRAIT_MAIN },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Reasons />
        <Portfolio />
        <Story />
        <Testimonials />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ------------------------------- HERO ------------------------------- */
function Hero() {
  return (
    <section id="uvod" className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
        {/* Editorial issue tag */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Tvorba webů · SEO · osobní přístup
          </div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Liberec · online spolupráce
          </div>
        </div>

        <div className="grid items-end gap-12 md:grid-cols-12">
          {/* Headline */}
          <div className="md:col-span-7">
            <p className="mb-6 font-display text-sm uppercase tracking-[0.22em] text-primary">
              Studio Jana Hotovce
            </p>
            <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,6.5rem)] font-medium leading-[0.95]">
              Návrh webu{" "}
              <span className="italic text-primary">zdarma</span>.<br />
              Rozhodnete{" "}
              <span className="relative inline-block">
                až
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 w-full text-accent"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q25,0 50,4 T100,3" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>{" "}
              potom.
            </h1>

            <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              Pomohu vám vytvořit web, který bude přehledný, funkční a bude důstojně reprezentovat vás i vaše podnikání – bez zbytečných složitostí.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Chci nový web
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                to="/pribeh"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Poznejte mě
              </Link>
            </div>

            {/* Stat strip */}
            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 md:max-w-lg">
              <Stat n="14+" l="Projektů" />
              <Stat n="17+" l="Referencí" />
              <Stat n="2018" l="Tvořím" />
            </dl>
          </div>

          {/* Portrait */}
          <div className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
              <img
                src={PORTRAIT_MAIN}
                alt="Jan Hotovec, webdesignér z Liberce"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" />
            </div>

            {/* Floating caption card */}
            <div className="absolute -left-4 bottom-10 max-w-[260px] rounded-2xl bg-foreground p-5 text-background shadow-[var(--shadow-lift)] md:-left-10">
              <div className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-background/60">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                K dispozici · Liberec
              </div>
              <p className="font-display text-base leading-snug">
                Život ve skafandru mě naučil hledat cestu i tam, kde na první pohled není.
              </p>
            </div>

            {/* corner badge */}
            <div className="absolute -top-4 right-4 grid h-20 w-20 place-items-center rounded-full bg-primary text-center font-display text-xs font-bold uppercase tracking-wider text-primary-foreground md:-top-6 md:right-8">
              JH<br />98
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-medium md:text-4xl">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{l}</dd>
    </div>
  );
}

/* ---------------------------- MARQUEE ---------------------------- */
function Marquee() {
  const items = [
    "Osobní portfolio",
    "Lokální byznys",
    "Finanční služby",
    "Wellness & krása",
    "Eventy",
    "Stavebnictví",
    "Sport & cestování",
    "Zdravotnictví",
    "Komunita",
  ];
  return (
    <section aria-hidden className="border-y border-border/60 bg-secondary/40 py-5 overflow-hidden">
      <div className="flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-lg text-muted-foreground">
            <span>{it}</span>
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-33.333%); } }`}</style>
    </section>
  );
}

/* ---------------------------- REASONS ---------------------------- */
function Reasons() {
  return (
    <section id="sluzby" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">§ 02 — Proč web</span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
            Pět důvodů, proč mít vlastní web v&nbsp;roce 2026
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Web je prostor, který máte pod kontrolou. Pomáhá vám být dohledatelní, budovat důvěru a ukázat lidem, kdo jste, co nabízíte a proč si vybrat právě vás.
          </p>
        </div>
        <ol className="md:col-span-8 grid gap-4 sm:grid-cols-2">
          {REASONS.map((r) => (
            <li
              key={r.n}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="font-display text-xs uppercase tracking-[0.22em] text-primary">{r.n}</span>
              <h3 className="mt-3 font-display text-xl font-medium">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
              <div className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------- PORTFOLIO ---------------------------- */
function Portfolio() {
  return (
    <section id="projekty" className="border-t border-border/60 bg-secondary/30 py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary">§ 03 — Vybrané projekty</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
              Projekty s přesahem a smyslem
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium text-foreground/80">
              Weby, které vznikaly z pochopení, důvěry a společné práce.
            </p>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Najdete zde výběr projektů, na kterých jsem měl možnost se podílet – od osobních značek přes lokální podnikání až po firemní weby. Každý projekt pro mě představuje jinou zkušenost, jiný příběh a jiný způsob, jak propojit funkčnost, estetiku a potřeby klienta.
            </p>
          </div>
        </div>

        {/* Compact stat strip */}
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-border/70 bg-background/60 p-5 text-xs uppercase tracking-[0.14em] text-muted-foreground md:grid-cols-4">
          <div><span className="mr-2 font-display text-lg text-foreground">{PROJECTS.length}+</span> realizovaných projektů</div>
          <div><span className="mr-2 text-primary">↗</span> aktivní odkazy na weby</div>
          <div>osobní značky · firmy · služby</div>
          <div>Wix · Wix Studio · SEO</div>
        </div>

        {/* Slider */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative"
        >
          <CarouselContent className="-ml-4">
            {PROJECTS.map((p, i) => (
              <CarouselItem
                key={p.slug}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-[30%]"
              >
                <ProjectCard p={p} index={i + 1} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center justify-end gap-3">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projekty"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Zobrazit všechny projekty <span aria-hidden>→</span>
          </Link>
          <a
            href="#reference"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            Přečíst reference
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  index,
}: {
  p: (typeof PROJECTS)[number];
  index?: number;
}) {
  const external = Boolean(p.url);
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.title} — ${p.category}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
        {p.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground">
            ★ Featured
          </span>
        )}
        {index !== undefined && !p.featured && (
          <span className="absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur">
            № {String(index).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {p.category} · {p.year}
          </p>
          <h3 className="mt-2 font-display text-xl leading-tight">{p.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.client}</p>
        </div>
        {external ? (
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-between gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Otevřít web <span aria-hidden>↗</span>
          </a>
        ) : (
          <span className="inline-flex items-center justify-between gap-2 rounded-full border border-dashed border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Připravujeme
          </span>
        )}
      </div>
    </article>
  );
}

/* ---------------------------- STORY ---------------------------- */
function Story() {
  return (
    <section id="pribeh" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src={PORTRAIT_STORY}
              alt="Jan Hotovec — osobní příběh"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Honza, 27 · Liberec · DMO od narození
          </p>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">§ 04 — Příběh</span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] md:text-6xl">
            Chtěl jsem mít prostor, kde se potká{" "}
            <span className="italic text-primary">příběh</span> a tvorba.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Jmenuji se Honza a svůj první web jsem si vytvořil proto, abych mohl důstojně představit sám sebe i svůj příběh. Chtěl jsem mít vlastní prostor – místo, kde se potká osobní zkušenost, tvorba a chuť být vidět po svém.
            </p>
            <p>
              Od narození žiji s dětskou mozkovou obrnou, které s nadsázkou říkám <em className="text-foreground">skafandr</em>. Ovlivňuje můj pohyb i komunikaci, ale nikdy mi nevzala chuť tvořit, učit se nové věci a hledat cestu dál.
            </p>
            <p className="text-foreground">
              V roce 2018 vznikl dokument <em>Dopisy z hlavy</em>, který zachytil část mé cesty i účast na Metrostav Handy Cyklo Maratonu – 2 222 km, 111 hodin a tým lidí, kteří věřili, že společně zvládneme víc, než by se zdálo.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.janhotovec.com/dopisy-z-hlavy-skafandr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              ♪ Soundtrack Skafandr
            </a>
            <Link
              to="/pribeh"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Celý příběh →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- TESTIMONIALS ---------------------------- */
type RefCategory = "Webdesign" | "Audit webu" | "Správa webu" | "Mentoring / spolupráce";
type RefSource = "LinkedIn" | "Google" | "Facebook";

// Metadata paired with TESTIMONIALS by index — keeps site-data.ts untouched.
const TESTIMONIAL_META: { category: RefCategory; source: RefSource }[] = [
  { category: "Webdesign", source: "Google" },              // Veronika Horáčková
  { category: "Webdesign", source: "Google" },              // Ivan Brabec
  { category: "Webdesign", source: "Facebook" },            // Michal Farský
  { category: "Správa webu", source: "Google" },            // Alice Bednářová
  { category: "Webdesign", source: "Google" },              // Milan Hrnčíř
  { category: "Mentoring / spolupráce", source: "LinkedIn" }, // Martina Zrzavá
  { category: "Správa webu", source: "LinkedIn" },          // Radim Chalupník
  { category: "Webdesign", source: "LinkedIn" },            // Jaromír Spěšný
  { category: "Audit webu", source: "Google" },             // Adéla Soukupová
  { category: "Správa webu", source: "Google" },            // AXIS
  { category: "Audit webu", source: "Google" },             // Jakub Kovář
  { category: "Mentoring / spolupráce", source: "LinkedIn" }, // Tereza Sloupová
  { category: "Mentoring / spolupráce", source: "Google" },  // Sdružení Tulipán
  { category: "Mentoring / spolupráce", source: "LinkedIn" }, // Ivana Kudrnová
  { category: "Mentoring / spolupráce", source: "LinkedIn" }, // Jana Wollmannová
  { category: "Webdesign", source: "LinkedIn" },             // Jan Plachý
];

const FILTERS: ("Vše" | RefCategory)[] = [
  "Vše",
  "Webdesign",
  "Audit webu",
  "Správa webu",
  "Mentoring / spolupráce",
];

function excerpt(text: string, max = 180) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return cut.slice(0, lastSpace > 120 ? lastSpace : max).trimEnd() + "…";
}

function Testimonials() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Vše");

  const items = useMemo(
    () =>
      TESTIMONIALS.map((t, i) => ({ ...t, ...TESTIMONIAL_META[i] })).filter(
        (t) => filter === "Vše" || t.category === filter,
      ),
    [filter],
  );

  return (
    <section id="reference" className="border-y border-border/60 bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent">§ 05 — Reference</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl">
              Co říkají{" "}
              <span className="italic text-accent">klienti o spolupráci</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base text-background/70">
              Zkušenosti lidí a firem, se kterými jsem měl možnost spolupracovat na webových projektech, auditech i dlouhodobé správě webů.
            </p>
          </div>
        </div>

        {/* Compact stat strip */}
        <div className="mb-10 grid gap-4 rounded-2xl border border-background/10 bg-background/[0.04] p-5 sm:grid-cols-2 md:mb-12 md:grid-cols-4">
          <div>
            <div className="font-display text-3xl text-accent">16+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-background/60">Referencí</div>
          </div>
          <div>
            <div className="font-display text-3xl text-accent">13+</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-background/60">Projektů</div>
          </div>
          <div>
            <div className="font-display text-3xl text-accent">3</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-background/60">Zdroje hodnocení</div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <a href="https://www.linkedin.com/in/janhotovec98/" target="_blank" rel="noreferrer" className="rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10">LinkedIn</a>
            <a href="https://www.google.com/search?q=Jan+Hotovec+webdesign+Liberec" target="_blank" rel="noreferrer" className="rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10">Google</a>
            <a href="https://www.facebook.com/janhotovec98.fb/reviews" target="_blank" rel="noreferrer" className="rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10">Facebook</a>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mb-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-background/20 text-background/70 hover:bg-background/10"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-4">
            {items.map((t, i) => (
              <CarouselItem key={`${filter}-${i}`} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <TestimonialCard t={t} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="text-xs uppercase tracking-[0.18em] text-background/50">
              {items.length} {items.length === 1 ? "reference" : "referencí"}
            </div>
            <div className="flex gap-2">
              <CarouselPrevious className="static translate-y-0 border-background/20 bg-background/5 text-background hover:bg-background/10" />
              <CarouselNext className="static translate-y-0 border-background/20 bg-background/5 text-background hover:bg-background/10" />
            </div>
          </div>
        </Carousel>

        {/* Final CTA within section */}
        <div className="mt-16 rounded-2xl border border-background/10 bg-background/[0.04] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl md:text-3xl">
                Chcete se přidat mezi <span className="italic text-accent">spokojené klienty</span>?
              </h3>
              <p className="mt-3 max-w-xl text-sm text-background/70">
                Rád se podívám i na váš projekt a navrhnu, jak by mohl fungovat lépe — obsahově, vizuálně i technicky.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Domluvit spolupráci <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number] & { category: RefCategory; source: RefSource };
}) {
  const short = excerpt(t.quote, 180);
  const isTruncated = short !== t.quote;
  return (
    <figure className="group relative flex h-full flex-col rounded-2xl border border-background/10 bg-background/[0.04] p-6 transition-colors hover:bg-background/[0.07]">
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-background/50">
        <span className="rounded-full border border-background/20 px-2 py-1">{t.source}</span>
        <span>{t.category}</span>
      </div>
      <span className="font-display text-5xl leading-none text-accent">"</span>
      <blockquote className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-background/90">
        {short}
      </blockquote>
      <figcaption className="mt-5 border-t border-background/10 pt-4">
        <div className="font-display text-base">{t.name}</div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-background/60">
          {t.role} · {t.year}
        </div>
      </figcaption>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
        {isTruncated && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="rounded-full border border-background/20 px-3 py-1.5 text-background/80 transition-colors hover:bg-background/10">
                Číst celou referenci
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">{t.name}</DialogTitle>
                <DialogDescription>
                  {t.role} · {t.year} · {t.source}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 max-h-[60vh] overflow-y-auto pr-2 text-sm leading-relaxed text-muted-foreground">
                <span className="font-display text-4xl leading-none text-primary">"</span>
                <p className="mt-2 whitespace-pre-line">{t.quote}</p>
              </div>
              {t.url && (
                <a
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  Otevřít projekt ↗
                </a>
              )}
            </DialogContent>
          </Dialog>
        )}
        {t.url && (
          <a
            href={t.url}
            target="_blank"
            rel="noreferrer"
            className="text-background/70 transition-colors hover:text-accent"
          >
            Odkaz na projekt ↗
          </a>
        )}
      </div>
    </figure>
  );
}

/* ---------------------------- FINAL CTA ---------------------------- */
function FinalCTA() {
  return (
    <section id="kontakt" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-secondary/40 p-10 md:p-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary">§ 06 — Začněme spolupráci</span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-7xl">
              Udělám vám{" "}
              <span className="italic text-primary">návrh zdarma</span>.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Napište mi pár vět o vašem nápadu. Do pár dní vám pošlu konkrétní návrh — a teprve pak se rozhodnete.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              to="/kontakt"
              className="group flex items-center justify-between gap-4 rounded-2xl bg-foreground p-6 text-background transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-background/60">Nejrychlejší cesta</div>
                <div className="mt-1 font-display text-2xl">Vyplnit zadání →</div>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-xl text-primary-foreground transition-transform group-hover:rotate-12">
                ✦
              </span>
            </Link>
            <a
              href="mailto:janhotovec98@gmail.com"
              className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Nebo e-mail</div>
                <div className="mt-1 font-display text-xl">janhotovec98@gmail.com</div>
              </div>
              <span className="text-xl">↗</span>
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      </div>
    </section>
  );
}
