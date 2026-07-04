import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/sponzori")({
  head: () => ({
    meta: [
      { title: "Sponzoři a dárci — Jan Hotovec" },
      {
        name: "description",
        content:
          "Upřímné poděkování sponzorům a dárcům, kteří podporují moji cestu, kondici i každodenní život.",
      },
      { property: "og:title", content: "Sponzoři a dárci — Jan Hotovec" },
    ],
  }),
  component: Sponzori,
});

type Partner = {
  name: string;
  text: string;
  links?: { label: string; href: string }[];
};

const partners: Partner[] = [
  {
    name: "MIBAG sanace spol. s r.o.",
    text: "Liberecká společnost, jejíž dlouhodobé podpory si nesmírně cením.",
    links: [{ label: "Web", href: "https://mibag.cz/" }],
  },
  {
    name: "Technology s.r.o.",
    text: "Společnost z blízkosti Liberce, jejíž dlouhodobé podpory si velmi vážím.",
    links: [{ label: "Web", href: "https://technology.cz/" }],
  },
  {
    name: "Ondra Festa",
    text: "Kadeřník a expert na Goldwell. Od roku 2019 jsme se stali přáteli. Díky Ondrově pomoci jsem navázal spolupráci se Studiem Lilie v Liberci. Vážím si našeho přátelství a dlouhodobé podpory.",
    links: [{ label: "Web", href: "https://www.lilie-liliova.com/" }],
  },
  {
    name: "Fameplay",
    text:
      "Fameplay.ai je špičková společnost zaměřená na využití umělé inteligence v oblasti tvorby videí, dabingu, lipsyncu, hlasových technologií a AI avatarů.\n\nNaše cesty propojila společnost Nolimi, která pomáhá vytvářet příležitosti mezi lidmi se zdravotním postižením a zaměstnavateli.\n\nDíky týmu Fameplay.ai vznikl můj vlastní AI avatar, který mi otevírá nové možnosti komunikace v online prostoru. Pomáhá mi lépe předávat myšlenky, sdílet svůj příběh a překonávat některé bariéry, které s sebou můj „skafandr“ přináší.\n\nO to víc si vážím jejich důvěry, podpory a ochoty hledat inovativní řešení tam, kde mohou skutečně pomáhat lidem.",
    links: [
      { label: "Fameplay.ai", href: "https://www.fameplay.ai/" },
      { label: "Nolimi.cz", href: "https://www.nolimi.cz/" },
    ],
  },
  {
    name: "Martin Bronec a jeho tým",
    text: "Splnili mi sen účastí na Metrostav cyklo handy maratonu. Jejich podpora a humor jsou pro mě neocenitelné.",
    links: [{ label: "Web", href: "https://www.bronecsport.cz/" }],
  },
  {
    name: "Osmikrásky",
    text: "Těmto úžasným dámám děkuji za jejich denní a stálou podporu.",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100064310366625" },
    ],
  },
  {
    name: "Geoprint s.r.o.",
    text: "Liberecká tiskárna, která mi poskytla podporu při tisku propagačních materiálů, vizitek a letáků.",
    links: [{ label: "Web", href: "https://www.geoprint.cz/" }],
  },
  {
    name: "Fitness Life Liberec",
    text:
      "Díky velkorysosti Fitness Life Liberec mám možnost pravidelně využívat jejich moderní fitness centrum. Tento přístup mi umožňuje udržovat se v kondici a zlepšovat své fyzické zdraví.\n\nOceňuji také profesionální přístup jejich trenérů, kteří jsou vždy připraveni poradit a motivovat mě k dosažení mých cílů.\n\nJejich podpora je pro mě nesmírně cenná a velmi si jí vážím.",
    links: [{ label: "Web", href: "https://fitnesslifeliberec.cz/" }],
  },
  {
    name: "Level UP Liberec",
    text:
      "Velké poděkování patří Level Up Fitness za vstřícnost a podporu v podobě umístění mých letáků a především za možnost trénovat v jejich moderním, privátním fitness prostředí.\n\nTato spolupráce pro mě znamená nejen lepší přístup k pravidelnému tréninku, ale i motivaci posouvat se dál — fyzicky i mentálně.\n\nDěkuji za otevřenost, profesionální přístup a důvěru, které si opravdu vážím.",
    links: [{ label: "Web", href: "https://lvlupfitness.cz/" }],
  },
  {
    name: "Nadace Jedličkova ústavu",
    text: "Děkuji za příspěvek na invalidní Segway vozík FREEE v roce 2018 a na rehabilitační pobyt v roce 2021.",
    links: [{ label: "Web", href: "https://nadaceju.cz/" }],
  },
  {
    name: "Lukov Plast spol. s r.o.",
    text: "Společnost z Českého Dubu, která mi poskytla sponzorský dar na kompenzační pomůcku FREEE, jež mi usnadňuje pohyb v exteriéru.",
    links: [{ label: "Web", href: "https://www.lukovplast.cz/" }],
  },
  {
    name: "Zdeněk Štádler",
    text: "Děkuji za dar na boty Nike Adapt v roce 2021, které mi usnadňují každodenní život.",
  },
  {
    name: "Nordbeans",
    text: "Liberecká pražírna, která mi poskytla možnost umístění svých propagačních materiálů na pobočku Lázně.",
    links: [
      { label: "Web", href: "https://www.nordbeans.cz/provozovny/3/kavarna-lazne" },
    ],
  },
  {
    name: "Vinotéka Dvoudecka",
    text: "Liberecká vinotéka, která mi poskytla možnost umístění svých propagačních materiálů.",
    links: [{ label: "Facebook", href: "https://www.facebook.com/vinotekadvoudecka" }],
  },
  {
    name: "Tereza Sloupová",
    text: "Terezu Sloupovou jsem poznal při kariérním poradenství na úřadu práce v Jablonci nad Nisou. Od roku 2021 se z nás stali přátelé a Tereza mi dlouhodobě pomáhá v mém podnikání.",
    links: [{ label: "Web", href: "https://www.tvorimsrdcem.com/" }],
  },
  {
    name: "Ivana Kudrnová",
    text:
      "Mentorka, webdesignérka a osobní koučka. Naše spolupráce v oblasti webdesignu v Praze je pro mě nesmírně cenná.\n\nIvana je empatická, upřímná a vždy připravena naslouchat. Její terapie zaměřené na práci s energií jsou obohacující.",
    links: [{ label: "Web", href: "https://www.ivanakudrnova.com/" }],
  },
];

function initials(name: string) {
  return name
    .replace(/spol\.|s\.r\.o\.|s r\.o\.|a\.s\./gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function Sponzori() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1100px] px-6 pt-20 pb-10 md:px-10 md:pt-28">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">
            § — Poděkování
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            Sponzoři a <span className="italic text-primary">dárci</span>.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>
              Rád bych z celého srdce poděkoval za jakoukoli podporu od sponzorů a dárců. Díky
              jejich pomoci mohu lépe udržovat svou kondici, pracovat na sobě a usnadňovat si
              každodenní život pomocí kompenzačních pomůcek.
            </p>
            <p>
              Každý příspěvek — finanční, materiální, praktický nebo ve formě času a důvěry — má
              pro mě velkou hodnotu.
            </p>
            <p>
              Pokud se chcete přidat k mým sponzorům a dárcům, budu rád, když se mi ozvete.
            </p>
            <p>Ještě jednou děkuji za vaši důvěru a podporu.</p>
            <p className="text-foreground">
              S úctou,
              <br />
              Bc. Jan Hotovec
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <article
                key={p.name}
                className="liquid-pill flex h-full flex-col rounded-[1.75rem] p-7 md:p-8"
                style={{ overflowWrap: "anywhere" }}
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-background/60 font-display text-lg font-semibold text-primary ring-1 ring-primary/15">
                    {initials(p.name)}
                  </div>
                  <h2 className="min-w-0 font-display text-lg leading-tight md:text-xl">
                    {p.name}
                  </h2>
                </div>
                <div className="mt-5 flex-1 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {p.text.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {p.links && p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 pt-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-background/60 px-4 py-2 text-xs font-medium text-primary transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5"
                        style={{ overflowWrap: "anywhere" }}
                      >
                        {l.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 pb-24 md:px-10 md:pb-32">
          <div className="rounded-[2rem] border border-border bg-secondary/40 p-10 md:p-16 text-center">
            <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight md:text-5xl">
              Chcete podpořit moji cestu nebo se jen ozvat?
            </h2>
            <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground">
              Napište mi. Každá zpráva, doporučení i drobná pomoc má pro mě hlubokou cenu.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
            >
              Kontaktujte mě →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}