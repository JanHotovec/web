import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV | Bc. Jan Hotovec – webdesignér Liberec" },
      {
        name: "description",
        content:
          "Profesní cesta Bc. Jana Hotovce – webdesignéra z Liberce. Přehled vzdělání, pracovních zkušeností, webových projektů, SEO dovedností a osobního příběhu života ve skafandru.",
      },
      { property: "og:title", content: "CV | Bc. Jan Hotovec – webdesignér Liberec" },
    ],
  }),
  component: CV,
});

const TIMELINE: { year: string; items: { title: string; body?: string }[] }[] = [
  {
    year: "2014",
    items: [
      { title: "Přijetí na Střední školu při Jedličkově ústavu v Praze", body: "Obor: Sociální činnost." },
    ],
  },
  {
    year: "2017",
    items: [
      {
        title: "Školní odborná praxe — Domov Maxov Smržovka",
        body: "Během studia jsem absolvoval školní odbornou praxi v Domově Maxov ve Smržovce, kde jsem působil jako administrativní asistent. Tato zkušenost mi pomohla lépe poznat prostředí sociálních služeb a práci s administrativou.",
      },
    ],
  },
  {
    year: "2018",
    items: [
      { title: "Maturita — Střední škola při Jedličkově ústavu v Praze", body: "Obor: Sociální činnost." },
      { title: "Přijetí na Metropolitní univerzitu Praha", body: "Obor: Veřejná správa." },
      { title: "Natáčení filmu Dopisy z hlavy se soundtrackem Skafandr", body: "Během závodu 111 hodin." },
      { title: "Metrostav Handy Cyklo Maraton", body: "2 222 km kolem České republiky v limitu 111 hodin." },
      { title: "Ocenění Muž roku Cesty za snem 2018" },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "Dosažení titulu Bc.", body: "Obhájení bakalářského titulu na Metropolitní univerzitě Praha, obor Veřejná správa." },
      { title: "Webdesigner pro Eventime", body: "Září 2021 – květen 2022. Podíl na tvorbě webových stránek pro Eventime / Jana Plachého." },
      { title: "Přijetí na Ekonomickou fakultu TU v Liberci", body: "Obor: Management podnikových procesů. V únoru 2022 jsem zjistil, že tato cesta není tou, kterou chci dlouhodobě jít." },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "Recepční — Rezidence Park Masarykova, Liberec", body: "Prosinec 2022 – dosud. Chod komplexu, administrativa, přebírání pošty, tvorba dokumentů, koordinace závad a inovací." },
      { title: "Webmaster pro Axis Medical", body: "Srpen 2022 – prosinec 2023. Správa webových stránek." },
      { title: "Webdesigner pro Studio Lilie Liberec", body: "Červen 2022 – dosud. Tvorba a správa webových stránek; v roce 2025 kompletní redesign." },
      { title: "Obchodní referent — Sdružení Tulipán, Liberec", body: "Květen 2022 – dosud. Vyhledávání veřejných zakázek." },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Spolupráce s Jakubem Kovářem — Profi Opravy", body: "Práce na webu profi-opravy.cz, hledání vhodného plánu, designu a SEO. Spolupráce probíhala také formou vzájemné podpory, konzultací a kariérního rozvoje." },
      { title: "Osobní a profesní rozvoj", body: "Intenzivní správa webu Axis Medical, administrativa v Rezidenci Park Masarykova, práce pro Studio Lilie, účast na akci DemoDay pořádané Jakubem Kovářem." },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Aufori o.p.s. — administrativní pracovník", body: "Nástup říjen 2024. Administrativa, blog, sekce lidé v Aufori, partneři, tabulky a inzeráty." },
      { title: "Singltrek pod Smrkem o.p.s.", body: "Červenec 2024 – říjen 2024. Tvorba landing page." },
      { title: "APPIA Consult s.r.o.", body: "Listopad 2024 – dosud. Tvorba a správa webových stránek." },
      { title: "SEO mentoring", body: "Díky doporučení Jakuba Kováře navázána spolupráce s Martinou Libřickou. Technické SEO, SEO audit, obsahové a datové SEO, práce s nástroji a optimalizace webů." },
      { title: "AI rozvoj", body: "Objevování možností AI nástrojů: ChatGPT, Operator, Atlas, tvorba vlastních modelů." },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "BSS Home", body: "Únor 2025 – duben 2025. Tvorba webu pro Michala Farského." },
      { title: "Ivan Brabec", body: "Duben 2025 – říjen 2025. Tvorba landing page pro bankéře Ivana Brabce." },
      { title: "Gasso.cz", body: "Březen 2025 – dosud. Správa e-shopu pro Gasso / Gabrielu Lehkou." },
      { title: "Studio Lilie", body: "Kompletní redesign webu." },
    ],
  },
  {
    year: "2026",
    items: [
      { title: "Zpomal", body: "Říjen 2025 – únor 2026. Tvorba webu pro Veroniku Horáčkovou." },
      { title: "Linaskea Stav s.r.o.", body: "Od března 2026 tvorba a správa webových stránek." },
      { title: "Fameplay.ai", body: "Leden 2026 – dosud. Spolupráce v oblasti webdesignu a AI." },
      { title: "Tvořím srdcem", body: "Březen 2026 – dosud. Pomoc s tvorbou webu pro Terezu Sloupovou zaměřeného na kreativní tvorbu." },
    ],
  },
];

const EDUCATION = [
  {
    period: "2014 — 2018",
    title: "Střední škola při Jedličkově ústavu v Praze",
    org: "Obor: Sociální činnost",
    body: "Ukončeno maturitou.",
  },
  {
    period: "2018 — 2021",
    title: "Metropolitní univerzita Praha",
    org: "Obor: Veřejná správa",
    body: "Ukončeno titulem Bc.",
  },
  {
    period: "2021 — 2022",
    title: "Ekonomická fakulta Technické univerzity v Liberci",
    org: "Obor: Management podnikových procesů",
    body: "Krátké navazující studium, které mi pomohlo lépe pochopit vlastní směřování.",
  },
];

const EXPERIENCE = [
  {
    period: "Květen 2022 — dosud",
    role: "Obchodní referent",
    org: "Sdružení Tulipán",
    body: "Vyhledávání veřejných zakázek a práce s informacemi.",
    tags: ["administrativa", "veřejné zakázky", "komunikace"],
  },
  {
    period: "Prosinec 2022 — dosud",
    role: "Recepční",
    org: "Rezidence Park Masarykova",
    body: "Administrativní činnost, přebírání pošty, tvorba dokumentů, koordinace závad a inovací.",
    tags: ["administrativa", "koordinace", "komunikace"],
  },
  {
    period: "Říjen 2024 — dosud",
    role: "Administrativní pracovník",
    org: "Aufori o.p.s.",
    body: "Administrativa, blog, sekce lidé v Aufori, partneři, tabulky a inzeráty.",
    tags: ["administrativa", "obsah", "blog"],
  },
  {
    period: "2021 — dosud",
    role: "Webdesignér",
    org: "Jan Hotovec / JH98",
    body: "Tvorba webových stránek, správa webů, redesigny, SEO, obsah, konzultace a dlouhodobý rozvoj webových projektů.",
    tags: ["webdesign", "SEO", "správa webu"],
  },
];

type ProjectTag = "Webdesign" | "Správa webu" | "SEO" | "Landing page" | "E-shop" | "AI" | "Audit" | "Konzultace";
const PROJECTS: { name: string; period: string; role: string; body: string; href?: string; hrefAlt?: string; hrefAltLabel?: string; hrefLabel?: string; tags: ProjectTag[] }[] = [
  { name: "Eventime / GigaCzech", period: "2021 — 2022", role: "Webdesigner", body: "Podíl na tvorbě webových stránek pro Jana Plachého.", href: "http://www.eventime.cz/cs/", tags: ["Webdesign"] },
  { name: "Axis Medical", period: "2022 — 2023", role: "Webmaster", body: "Správa webových stránek zdravotnické společnosti.", href: "https://www.axis-medical.eu/", tags: ["Správa webu"] },
  { name: "Studio Lilie", period: "2022 — dosud", role: "Webdesigner", body: "Tvorba, správa a kompletní redesign v roce 2025.", href: "https://www.lilie-liliova.com/", hrefLabel: "Aktuální web ↗", hrefAlt: "https://janhotovec98.wixsite.com/lilie-liliova", hrefAltLabel: "Původní web ↗", tags: ["Webdesign", "Správa webu"] },
  { name: "Společně na výlet", period: "2022 / 2024", role: "Audit webu", body: "Audit webových stránek zaměřený na design, přehlednost, uživatelskou přívětivost a SEO. Výstupem byla konkrétní doporučení pro další zlepšení webu.", href: "https://spolecne-na-vylet.webnode.cz/", tags: ["Audit", "SEO"] },
  { name: "Profi Opravy", period: "2023", role: "Webdesigner & SEO", body: "Web, plán, design a SEO ve spolupráci s Jakubem Kovářem.", href: "https://www.profi-opravy.cz/", tags: ["Webdesign", "SEO"] },
  { name: "Singltrek pod Smrkem", period: "2024", role: "Webdesigner", body: "Tvorba landing page.", href: "https://janhotovec98.wixsite.com/singltrekpodsmrkem", tags: ["Landing page"] },
  { name: "APPIA Consult", period: "2024 — dosud", role: "Webdesigner", body: "Tvorba a správa webových stránek.", href: "https://janhotovec98.wixsite.com/appia", tags: ["Webdesign", "Správa webu"] },
  { name: "Chalupníkova.cz", period: "2024", role: "Webový konzultant", body: "Pomoc s technickým řešením webu, propojením s doménou, úpravou designu, SEO a mobilní optimalizací. Součástí bylo předávání znalostí klientovi pro další správu webu.", href: "https://www.chalupnikova.cz/", tags: ["Konzultace", "SEO"] },
  { name: "BSS Home", period: "2025", role: "Webdesigner", body: "Tvorba webu pro Michala Farského.", href: "https://janhotovec98.wixstudio.com/bssh", tags: ["Webdesign"] },
  { name: "Ivan Brabec", period: "2025", role: "Webdesigner", body: "Landing page pro bankéře Ivana Brabce.", href: "https://janhotovec98.wixstudio.com/ivanbrabec", tags: ["Landing page"] },
  { name: "Gasso.cz", period: "2025 — dosud", role: "Správa e-shopu", body: "Správa e-shopu pro Gabrielu Lehkou.", href: "https://www.gasso.cz/", tags: ["E-shop", "Správa webu"] },
  { name: "Zpomal", period: "2025 — 2026", role: "Webdesigner", body: "Tvorba webu pro Veroniku Horáčkovou.", href: "https://www.zpomal.com/", tags: ["Webdesign"] },
  { name: "Linaskea Stav", period: "2026 — dosud", role: "Webdesigner", body: "Tvorba a správa webových stránek.", href: "https://www.linaskeastav.com/", tags: ["Webdesign", "Správa webu"] },
  { name: "Fameplay.ai", period: "2026 — dosud", role: "Webdesign & AI", body: "Spolupráce v oblasti webdesignu a AI.", tags: ["Webdesign", "AI"] },
  { name: "Tvořím srdcem", period: "2026 — dosud", role: "Webdesigner", body: "Web pro Terezu Sloupovou zaměřený na kreativní tvorbu.", href: "https://www.tvorimsrdcem.com/", tags: ["Webdesign"] },
];

const PROJECT_FILTERS: ("Vše" | ProjectTag | "E-shop / AI")[] = [
  "Vše",
  "Webdesign",
  "Správa webu",
  "SEO",
  "Landing page",
  "Audit",
  "Konzultace",
  "E-shop / AI",
];

const CV_SECTIONS: { id: string; label: string }[] = [
  { id: "profil", label: "Profil" },
  { id: "casova-osa", label: "Časová osa" },
  { id: "vzdelani", label: "Vzdělání" },
  { id: "zkusenosti", label: "Pracovní zkušenosti" },
  { id: "webove-projekty", label: "Webové projekty" },
  { id: "dovednosti", label: "Dovednosti" },
  { id: "certifikaty", label: "Certifikáty a rozvoj" },
  { id: "jazyky", label: "Jazyky" },
  { id: "pracovni-podminky", label: "Pracovní podmínky" },
  { id: "zajmy", label: "Zájmy" },
  { id: "osobni-milniky", label: "Osobní milníky" },
  { id: "kontakt", label: "Kontakt" },
];

const SKILLS = [
  { group: "Webdesign a SEO", items: ["Wix", "Wix Studio", "Tvorba webových stránek", "Správa webů", "Responzivní design", "SEO", "Google Search Console"] },
  { group: "AI a digitální nástroje", items: ["ChatGPT", "AI prompting", "Tvorba vlastních modelů", "Google Disk", "Webové editory"] },
  { group: "Kancelářské a technické nástroje", items: ["Microsoft Office", "Word", "Excel", "PowerPoint", "Základní orientace v Money S3", "Windows", "macOS", "iOS"] },
  { group: "Soft skills", items: ["Komunikace", "Schopnost spolupráce", "Sebereflexe", "Aktivní přístup", "Samostatnost", "Týmová spolupráce", "Zvyšování kvalifikace", "Kreativní myšlení", "Otevřená mysl", "Posouvání vlastních hranic", "Time management", "Odpovědnost"] },
];

const CERTIFICATES = [
  {
    year: "2025",
    title: "AI Prompting",
    body: "Rozvoj v oblasti práce s AI nástroji, ChatGPT, tvorby vlastních modelů a efektivního promptování.",
    tags: ["ChatGPT", "AI nástroje", "Vlastní modely", "Prompting"],
  },
  {
    year: "2024",
    title: "SEO mentoring",
    body: "Mentoring v oblasti SEO se zaměřením na technické SEO, nástroje pro SEO audit, obsahové SEO, datové SEO a praktickou optimalizaci webů.",
    tags: ["Technické SEO", "SEO audit", "Obsahové SEO", "Datové SEO"],
  },
  {
    year: "průběžně",
    title: "Průběžný rozvoj",
    body: "Dlouhodobě se vzdělávám v oblasti webdesignu, SEO, AI nástrojů, přístupnosti a efektivní online komunikace.",
    tags: ["Webdesign", "SEO", "AI", "Přístupnost"],
  },
];

const LANGUAGES = [
  { name: "Anglický jazyk", level: "B2" },
  { name: "Španělský jazyk", level: "A2" },
];

const WORK_CONDITIONS = [
  "ZTP/P",
  "Možnost úpravy podmínek dle osobní domluvy",
  "Efektivní online spolupráce",
  "Apple ekosystém",
  "Možnost práce na vlastním zařízení",
  "Preference písemné nebo dobře strukturované komunikace",
];

const INTERESTS = [
  "Projekt Asistence navzájem",
  "Cyklistika na tricyklu",
  "Plavání",
  "Saunování",
  "Zájem o výpočetní techniku",
  "Vzdělávání se",
  "Kulturní akce",
  "Čas s rodinou a přáteli",
];

function CV() {
  const years = TIMELINE.map((t) => t.year);
  const [activeSection, setActiveSection] = useState<string>("profil");
  const [activeYear, setActiveYear] = useState<string>(years[0]);
  const [projectFilter, setProjectFilter] = useState<(typeof PROJECT_FILTERS)[number]>("Vše");

  useEffect(() => {
    const ids = CV_SECTIONS.map((s) => s.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection((visible[0].target as HTMLElement).id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "Vše") return PROJECTS;
    if (projectFilter === "E-shop / AI")
      return PROJECTS.filter((p) => p.tags.includes("E-shop") || p.tags.includes("AI"));
    return PROJECTS.filter((p) => p.tags.includes(projectFilter as ProjectTag));
  }, [projectFilter]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28">
        <span className="text-xs uppercase tracking-[0.22em] text-primary">§ — Curriculum Vitae</span>
        <h1 className="mt-6 font-display text-6xl leading-[0.98] md:text-8xl">CV</h1>
        <p className="mt-6 font-display text-2xl text-primary md:text-3xl">
          Co mě přivedlo tam, kde dnes jsem?
        </p>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
          <p>
            Moje profesní cesta není přímka, ale mapa plná výzev, objevů a nových směrů. Každý projekt, spolupráce i osobní překážka mě posunula dál – a formovala mě nejen jako webdesignera, ale i jako člověka.
          </p>
          <p>
            Věřím, že práce není jen o tom, co děláme, ale jak to děláme. V mém případě je to o poctivém přístupu, schopnosti naslouchat a hledat řešení, která mají smysl.
          </p>
          <p>Na této stránce najdete přehled mých zkušeností, projektů a dovedností.</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/projekty" className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform">
            Projekty →
          </Link>
          <Link to="/kontakt" className="rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">
            Kontaktujte mě
          </Link>
        </div>

        {/* Mobile section dropdown */}
        <div className="mt-10 lg:hidden">
          <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Přejít na sekci
          </label>
          <Select
            value={activeSection}
            onValueChange={(id) => {
              setActiveSection(id);
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <SelectTrigger className="liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold">
              <SelectValue placeholder="Vyberte část CV">
                {CV_SECTIONS.find((s) => s.id === activeSection)?.label ?? "Vyberte část CV"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="max-h-[60vh]">
              {CV_SECTIONS.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(220px,260px)_minmax(0,1fr)] lg:gap-12">
          {/* Desktop sticky Obsah CV */}
          <aside className="hidden lg:block">
            <div className="sticky top-[120px] self-start h-fit max-h-[calc(100vh-140px)] overflow-y-auto">
              <div className="liquid-nav rounded-3xl p-4">
                <div className="mb-3 px-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Obsah CV
                </div>
                <ul className="flex flex-col gap-1">
                  {CV_SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => handleAnchor(e, s.id)}
                        className={`block rounded-full px-4 py-2 text-sm transition-all ${
                          activeSection === s.id
                            ? "bg-primary/15 text-primary shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
                            : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                        }`}
                      >
                        {s.label}
                      </a>
                      {s.id === "casova-osa" && (
                        <ul className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-border/40 pl-3">
                          {years.map((y) => (
                            <li key={y}>
                              <a
                                href={`#rok-${y}`}
                                onClick={(e) => handleAnchor(e, `rok-${y}`)}
                                className={`block rounded-full px-3 py-1 text-xs transition-colors ${
                                  activeSection === "casova-osa" && activeYear === y
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {y}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
        <Section id="profil" title="Profil">
          <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_1fr]">
            <div>
              <div className="font-display text-2xl">Bc. Jan Hotovec</div>
              <div className="mt-1 text-sm text-primary">Webdesignér · Liberec · online spolupráce</div>
              <div className="mt-6 space-y-1 text-sm text-muted-foreground">
                <div><a className="hover:text-foreground" href="mailto:janhotovec98@gmail.com">janhotovec98@gmail.com</a></div>
                <div><a className="hover:text-foreground" href="tel:+420721038777">721 038 777</a></div>
                <div><a className="hover:text-foreground" href="https://janhotovec.com" target="_blank" rel="noreferrer">janhotovec.com</a></div>
                <div><a className="hover:text-foreground" href="https://www.linkedin.com/in/janhotovec98/" target="_blank" rel="noreferrer">linkedin.com/in/janhotovec98</a></div>
              </div>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">
              Jsem webdesignér z Liberce, který propojuje technické dovednosti, osobní přístup a zkušenost života „ve skafandru“. Věnuji se tvorbě a správě webových stránek, SEO, obsahu a dlouhodobému rozvoji webových projektů. Každou spolupráci vnímám jako prostor pro naslouchání, důvěru a hledání řešení, která mají smysl.
            </p>
          </div>
        </Section>

        <Section id="casova-osa" title="Časová osa">
          <YearsTimeline onActiveYear={setActiveYear} />
        </Section>

        <Section id="vzdelani" title="Vzdělání">
          <div className="grid gap-5 md:grid-cols-3">
            {EDUCATION.map((e) => (
              <div key={e.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-primary">{e.period}</div>
                <h3 className="mt-3 font-display text-xl">{e.title}</h3>
                <div className="mt-1 text-sm text-primary/80">{e.org}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="zkusenosti" title="Pracovní zkušenosti">
          <div className="grid gap-5 md:grid-cols-2">
            {EXPERIENCE.map((e) => (
              <div key={e.role + e.period} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-primary">{e.period}</div>
                <h3 className="mt-3 font-display text-xl">{e.role}</h3>
                <div className="text-sm text-primary/80">{e.org}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="webove-projekty" title="Webové projekty">
          {/* Mobile: dropdown filter */}
          <div className="mb-6 sm:hidden">
            <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Filtrovat projekty
            </label>
            <Select
              value={projectFilter}
              onValueChange={(v) => setProjectFilter(v as (typeof PROJECT_FILTERS)[number])}
            >
              <SelectTrigger className="liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold">
              <SelectValue placeholder="Všechny projekty">{projectFilter}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {PROJECT_FILTERS.map((f) => (
                  <SelectItem key={f} value={f}>
                    {f}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Desktop: chips */}
          <div className="mb-6 hidden flex-wrap gap-2 sm:flex">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setProjectFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${
                  projectFilter === f
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-border bg-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p) => (
              <div key={p.name} className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 [overflow-wrap:anywhere]">
                <div className="text-xs uppercase tracking-[0.18em] text-primary">{p.period}</div>
                <div className="mt-2 font-display text-lg">{p.name}</div>
                <div className="text-sm text-primary/80">{p.role}</div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/80">
                      {t}
                    </li>
                  ))}
                </ul>
                {p.href ? (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">
                      {p.hrefLabel ?? "Otevřít web ↗"}
                    </a>
                    {p.hrefAlt && (
                      <a href={p.hrefAlt} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-muted-foreground hover:text-primary hover:underline">
                        {p.hrefAltLabel ?? "Původní web ↗"}
                      </a>
                    )}
                  </div>
                ) : (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Připravujeme
                  </span>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="dovednosti" title="Dovednosti">
          <div className="grid gap-6 sm:grid-cols-2">
            {SKILLS.map((s) => (
              <div key={s.group} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-lg">{s.group}</div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80 transition-colors hover:bg-primary/15 hover:text-primary">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certifikaty" title="Certifikáty, mentoring a profesní rozvoj">
          <div className="grid gap-5 md:grid-cols-3">
            {CERTIFICATES.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-primary">{c.year}</div>
                <h3 className="mt-3 font-display text-xl">{c.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/80">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="jazyky" title="Jazyky">
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((l) => (
              <div key={l.name} className="flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5">
                <span className="font-display text-sm">{l.name}</span>
                <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary">{l.level}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section id="pracovni-podminky" title="Pracovní podmínky a způsob spolupráce">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Ke spolupráci přistupuji individuálně a férově. Vzhledem k mému zdravotnímu stavu je pro mě důležitá jasná domluva, možnost přizpůsobení pracovních podmínek a efektivní komunikace. Nejlépe se mi pracuje v prostředí, kde je prostor pro důvěru, plánování a vzájemný respekt.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {WORK_CONDITIONS.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="zajmy" title="Zájmy a dobrovolná činnost">
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Vedle práce a webdesignu se zajímám o technologie, osobní rozvoj, sport a aktivity, které mi pomáhají udržovat energii a chuť posouvat se dál.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {INTERESTS.map((i) => (
                <li key={i} className="rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground/80">{i}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="osobni-milniky" title="Osobní milníky">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">2018</div>
              <div className="mt-2 font-display text-lg">Dopisy z hlavy & Skafandr</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                V roce 2018 vznikl dokument Dopisy z hlavy a soundtrack Skafandr, které zachycují část mého osobního příběhu, účast na Metrostav Handy Cyklo Maratonu a pohled do života „ve skafandru“.
              </p>
              <Link to="/dopisy-skafandr" className="mt-4 text-sm font-semibold text-primary hover:underline">
                Otevřít stránku →
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">2018</div>
              <div className="mt-2 font-display text-lg">Metrostav Handy Cyklo Maraton</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Účast v závodu dlouhém 2 222 km kolem České republiky v limitu 111 hodin.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-primary">2018</div>
              <div className="mt-2 font-display text-lg">Muž roku Cesty za snem 2018</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ocenění, kterého si velmi vážím a které vnímám jako připomenutí síly spolupráce, podpory a lidského propojení.
              </p>
            </div>
          </div>
        </Section>

        <section id="kontakt" className="mt-20 scroll-mt-32 rounded-3xl border border-border bg-card p-10 md:p-14">
          <h2 className="font-display text-3xl md:text-4xl">Chcete navázat spolupráci?</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Rád se podívám i na váš projekt a navrhnu, jak by mohl fungovat lépe – obsahově, vizuálně i technicky.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/kontakt" className="rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform">
              Kontaktujte mě →
            </Link>
            <Link to="/projekty" className="rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary">
              Prohlédnout projekty
            </Link>
          </div>
          <div className="mt-8 text-sm text-muted-foreground">
            <div><a className="hover:text-foreground" href="mailto:janhotovec98@gmail.com">janhotovec98@gmail.com</a></div>
            <div><a className="hover:text-foreground" href="tel:+420721038777">721 038 777</a></div>
          </div>
        </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-16 scroll-mt-32">
      <h2 className="mb-8 font-display text-3xl md:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

function YearsTimeline({ onActiveYear }: { onActiveYear?: (y: string) => void }) {
  const years = TIMELINE.map((t) => t.year);
  const [active, setActive] = useState(years[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const y = (visible[0].target as HTMLElement).dataset.year!;
          setActive(y);
          onActiveYear?.(y);
        }
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 },
    );
    years.forEach((y) => {
      const el = document.getElementById(`rok-${y}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [years.join(",")]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, y: string) => {
    e.preventDefault();
    const el = document.getElementById(`rok-${y}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(y);
      onActiveYear?.(y);
    }
  };

  return (
    <div className="relative grid gap-8 md:grid-cols-[160px_1fr]">
      {/* Mobile: year dropdown */}
      <div className="md:hidden">
        <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Přejít na rok
        </label>
        <Select
          value={active}
          onValueChange={(y) => {
            const el = document.getElementById(`rok-${y}`);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            setActive(y);
            onActiveYear?.(y);
          }}
        >
          <SelectTrigger className="liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold">
            <SelectValue placeholder="Vyberte rok">{active}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={y}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tablet/desktop compact vertical nav (hidden on large screens where main sidebar takes over) */}
      <aside className="hidden md:block lg:hidden">
        <div className="sticky top-28">
          <div className="rounded-3xl border border-border/60 bg-background/50 p-4 backdrop-blur-xl">
            <div className="mb-3 px-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Roky
            </div>
            <ul className="flex flex-col gap-1">
              {years.map((y) => (
                <li key={y}>
                  <a
                    href={`#rok-${y}`}
                    onClick={(e) => handleClick(e, y)}
                    className={`block rounded-full px-4 py-2 font-display text-sm transition-all ${
                      active === y
                        ? "bg-primary/15 text-primary shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
                        : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                    }`}
                  >
                    {y}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      <ol className="space-y-12 md:col-start-2 md:space-y-14 lg:col-span-2 lg:col-start-1">
        {TIMELINE.map((t) => (
          <li
            key={t.year}
            id={`rok-${t.year}`}
            data-year={t.year}
            className="grid scroll-mt-36 gap-3 border-l-2 border-primary/30 pl-5 md:scroll-mt-32 md:grid-cols-[120px_1fr] md:gap-8 md:pl-8"
          >
            <div className="font-display text-3xl text-primary md:text-5xl">{t.year}</div>
            <ul className="space-y-4">
              {t.items.map((it) => (
                <li key={it.title}>
                  <div className="font-display text-lg">{it.title}</div>
                  {it.body && (
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}