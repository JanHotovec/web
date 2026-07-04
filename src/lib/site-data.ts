export const PORTRAIT_MAIN =
  "https://static.wixstatic.com/media/2cc3d5_aab64f51dba646bab82b67716b9696b5~mv2.jpeg/v1/fill/w_1200,h_1400,fp_0.50_0.40,q_85,enc_avif,quality_auto/Bc_%20Jan%20Hotovec.jpeg";

export const PORTRAIT_STORY =
  "https://static.wixstatic.com/media/2cc3d5_3e6cc63bee5a440b92ee6589c72b9c15~mv2.jpeg/v1/fill/w_900,h_1100,fp_0.50_0.40,q_85,enc_avif,quality_auto/Bc_%20Jan%20Hotovec%20.jpeg";

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  url?: string;
  urlAlt?: string;
  image: string;
  featured?: boolean;
  size?: "lg" | "md" | "sm";
};

const W = (id: string, name: string) =>
  `https://static.wixstatic.com/media/2cc3d5_${id}~mv2.png/v1/fill/w_1600,h_1000,q_90,enc_avif,quality_auto/${encodeURIComponent(name)}.png`;

export const PROJECTS: Project[] = [
  {
    slug: "zpomal",
    client: "Veronika Horáčková",
    title: "Zpomal",
    category: "Osobní značka · Lifestyle",
    year: "2026",
    url: "https://www.zpomal.com",
    image: W("b7efaa65727f40c0b476dafe88f6d924", "Zpomal, V_Horáčková"),
    featured: true,
    size: "lg",
  },
  {
    slug: "ivan-brabec",
    client: "Ivan Brabec",
    title: "Ivanbrabec.cz",
    category: "Osobní portfolio",
    year: "2025",
    url: "https://janhotovec98.wixstudio.com/ivanbrabec",
    image: W("28df58cdd31f41279430681134951d70", "Ivan Brabec"),
    size: "md",
  },
  {
    slug: "studio-lilie",
    client: "Studio Lilie",
    title: "Lilie Liberec",
    category: "Krása & wellness",
    year: "2022 / 2025",
    url: "https://www.lilie-liliova.com/",
    urlAlt: "https://janhotovec98.wixsite.com/lilie-liliova",
    image: W("d4840086997146ccbb43635f18f3db5b", "Studio Llilie Liberec 2025"),
    size: "md",
  },
  {
    slug: "bss-home",
    client: "BSS Home",
    title: "BSS Home",
    category: "Reality · Stavebnictví",
    year: "2025",
    url: "https://janhotovec98.wixstudio.com/bssh",
    image: W("ab4a7a43207e4071a96e833d332401e4", "BSS Home"),
    size: "lg",
  },
  {
    slug: "appia",
    client: "APPIA Consult s.r.o.",
    title: "Daňové poradenství",
    category: "Finance · B2B",
    year: "2024",
    url: "https://janhotovec98.wixsite.com/appia",
    image: W("d0834b8a765845ad8ed98c6249a2c63a", "Appia Consult s_r_o_"),
    size: "md",
  },
  {
    slug: "axis-medical",
    client: "Axis Medical",
    title: "Axis Medical",
    category: "Zdravotnictví",
    year: "2024",
    image: W("2436b6fd7b2e4d8e944cfbb39456898c", "Axis Medical"),
    url: "https://www.axis-medical.eu/",
    size: "sm",
  },
  {
    slug: "singltrek",
    client: "Singltrek pod Smrkem",
    title: "Singltrek",
    category: "Sport · Cestování",
    year: "2024",
    url: "https://janhotovec98.wixsite.com/singltrekpodsmrkem",
    image: W("b5c9bbf29a5a4c918ed9293bea4b6c29", "Singltrekpodsmrkem"),
    size: "md",
  },
  {
    slug: "gasso",
    client: "Gasso",
    title: "Gasso",
    category: "Služby",
    year: "2024",
    image: W("e5a0ecbf845846bfb9ff5a3da399df5c", "Gasso"),
    url: "https://www.gasso.cz/",
    size: "sm",
  },
  {
    slug: "chalupnikova",
    client: "Kateřina Chalupníková",
    title: "Chalupníková",
    category: "Osobní značka",
    year: "2024",
    url: "https://www.chalupnikova.cz",
    image: W("e47eac99d93546a0abb0e89c4b330b92", "Kateřina Chalupníková"),
    size: "md",
  },
  {
    slug: "linaskea",
    client: "Linaskea Stav s.r.o.",
    title: "Linaskea Stav",
    category: "Stavebnictví",
    year: "2024",
    image: W("f21c6859db444a57b4a760e576838a6a", "Linaskea Stav s_r_o_"),
    url: "https://www.linaskeastav.com/",
    size: "md",
  },
  {
    slug: "profi-opravy",
    client: "Profi Opravy HP",
    title: "Profi Opravy",
    category: "Služby · Lokální",
    year: "2024",
    image: W("72b4529e178c483784046151b1720545", "Profi Opravy - HP"),
    url: "https://www.profi-opravy.cz/",
    size: "sm",
  },
  {
    slug: "spolecne-na-vylet",
    client: "Adéla Soukupová",
    title: "Společně na výlet",
    category: "Cestování · Komunita",
    year: "2024",
    url: "https://spolecne-na-vylet.webnode.cz",
    image: W("fbe5bd4478334f269cd9534103683e8b", "Společně na výlet"),
    size: "md",
  },
  {
    slug: "eventime",
    client: "Eventime",
    title: "Eventime",
    category: "Eventy",
    year: "2024",
    image: W("156420ce87544d96be3834834166db4c", "eventime"),
    url: "http://www.eventime.cz/cs/",
    size: "md",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  year: string;
  quote: string;
  url?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Veronika Horáčková",
    role: "www.zpomal.com",
    year: "2026",
    url: "https://www.zpomal.com",
    quote:
      "Mám nový nádherný web a z výsledku jsem nadšená. Pan Hotovec je profík ve svém oboru a díky jeho nekonečné trpělivosti jsme vše dotáhli do dokonalosti. Jsem velmi náročná a mám ráda precizní a perfektní práci. Pan Hotovec měl skvělá nápady do se týká designu webu a dokázal se velmi dobře nacítit na celkový záměr a charakter webu. Zapracování mých změn bylo vždy rychlé a přesné. Mohu jen doporučit, neznám nikoho lepšího a hlavně tolik lidského.",
  },
  {
    name: "Ivan Brabec",
    role: "ivanbrabec.cz",
    year: "2025",
    url: "http://ivanbrabec.cz",
    quote:
      "S Honzou (p. Hotovcem) se velmi dobře spolupracovalo. Má profesionální přístup a vytvořené stránky stojí za to. Vhodně hledal řešení k mým potřebám. V komunikaci nebyl problém, co šlo jsme vyřešili po e-mailu anebo osobně.",
  },
  {
    name: "Michal Farský",
    role: "BSS Home",
    year: "2025",
    url: "https://janhotovec98.wixstudio.com/bssh",
    quote:
      "Spolupráce s Honzou byla naprosto v pořádku, jeho akční přístup, nápady a zpracování mě bavilo. Výsledkem jsou krásné čisté stránky, které neprosto splňují mojí představu. Určitě doporučuji!",
  },
  {
    name: "Alice Bednářová",
    role: "Studio Lilie, Liberec",
    year: "2022 & 2025",
    url: "https://www.lilie-liliova.com",
    quote:
      "S panem Hotovcem jsem byla seznámena u nás ve Studiu. Zpočátku jsem měla obavy z toho, jak mladý člověk přijme spolupráci s počítačově částečně zdatnou uživatelkou. Obrnil se patrně trpělivostí se mnou a tak vznikly velice vkusné a funkční stránky. Vím, že spolupráce z mé strany byla obtížná, ale myslím, že jsme byli nakonec spokojeni oba. Vždy na mé podněty reagoval okamžitě, přišel s řadou nápadů a já můžu spolupráci s ním jenom doporučit. Velice si Vážím práce, kterou pro nás udělal a vím, že nějaká forma bude ještě pokračovat. (2025) Po domluvě s panem Hotovcem jsme obnovovali naše stránky. Opět ukázal svojí profesionalitu přesto, že spolupráce se mnou není záviděníhodná. Přišel se spoustou nápadů a se mnou měl velkou trpělivost, co se jednotlivých připomínek týká. Dopadlo to ale všechno skvěle a já ho mohu doporučit každému, kdo hledá tyto služby.",
  },
  {
    name: "Milan Hrnčíř",
    role: "APPIA Consult s.r.o.",
    year: "2024",
    url: "http://appia.cz",
    quote:
      "Rád bych vyjádřil svou spokojenost se spoluprací s Honzou Hotovcem při zhotovení našich firemních webových stránek APPIA Consult s.r.o. Od samého začátku byla jeho práce profesionální, efektivní a velmi přátelská. Honza dokázal skvěle pochopit mé potřeby a vize. Během celého procesu komunikoval jasně a pravidelně, což bylo klíčové pro hladký průběh projektu. Jeho schopnost navrhnout funkční, moderní a vizuálně atraktivní design mě nadchla. Kromě estetické stránky si dal záležet i na technické dokonalosti a rychlém načítání stránek, což je dnes nezbytné. Co mě obzvláště potěšilo, byla jeho ochota reagovat na všechny mé dotazy a přizpůsobit detaily dle mých požadavků. Honza nejenže dodržel dohodnutý termín, ale předal stránky i s uživatelsky přívětivým návodem na jejich správu. Výsledek předčil má očekávání. Webové stránky jsou intuitivní, přehledné a odpovídají současným standardům. Spolupráce s Honzou Hotovcem byla jednoznačně správná volba a jeho služby mohu bez váhání doporučit každému, kdo hledá spolehlivého odborníka na tvorbu webů. Děkuji, Honzo, za skvěle odvedenou práci!",
  },
  {
    name: "Martina Zrzavá Libřická",
    role: "MartiSEO — Konzultant, Praha",
    year: "2024",
    url: "https://www.linkedin.com/in/martina-zrzava-libricka/",
    quote:
      "Měla jsem tu čest mentorovat Jana v oblasti SEO a byla to velmi pozitivní zkušenost. Jan je neuvěřitelně talentovaný a odhodlaný. Rychle se učí novým věcem a vnímá souvislosti. Zároveň má chuť se neustále zlepšovat. A díky své přirozené zvědavosti se umí ptát, což oceňuji. Navzdory svému postižení Jan prokázal skvělou schopnost adaptace a efektivní spolupráce. Jeho otevřený přístup a pozitivní nasazení udělaly naši spolupráci nejen profesionální, ale i velmi příjemnou. Jeho pozornost k detailům a kreativní přístup k řešení problémů byly přínosem pro celý proces. Jeho přístup byl pro mě samotnou velmi inspirativní. Jsem přesvědčena, že bude dál skvěle rozvíjet své dovednosti nejen v oblasti SEO a dosahovat vynikajících výsledků. Jsem ráda, že jsem mohla být součástí jeho profesního růstu a vřele doporučuji Jana jako cenného člena jakéhokoliv týmu.",
  },
  {
    name: "Radim Chalupník",
    role: "COO Digiskills.cz & Culture Captain",
    year: "2024",
    url: "https://www.linkedin.com/in/chalupnik/",
    quote:
      "Vděčnost a obdiv. Vděčnost za neúnavnou trpělivost ve spolupráci se mnou. Honza mi pomáhal s webovkama pro manželku Kateřinu. Wix, dostat to na koupenou doménu, design, SEO, mobilní verze... Vše strukturovaně, přehledně, včas a s vysvětlením proč. Hodně jsem se od Honzy sám naučil. No a obdiv za neskutečnou životní energii a schopnost osvojovat si nové technologie, zapojovat AI a aplikovat nové dovednosti ihned v praxi. Obdiv zato, jak houževnatě dává na frak svému fyzickému postižení, kterému sám říká „život ve skafandru“. Honza je nejen odborník, ale hlavně člověk s velkým srdcem a nadšením pro to, co dělá.",
  },
  {
    name: "Jaromír Spěšný",
    role: "Ředitel, Singltrek pod Smrkem o.p.s.",
    year: "2024",
    url: "https://janhotovec98.wixsite.com/singltrekpodsmrkem",
    quote:
      "Honzu jsem náhodně potkal v kavárně… Zaujal mě jeho invalidní vozík, který byl moderní – doslova pokrokový. Stejně jako samotný Honza. Mladý moderní muž, který využívá dennodenně nejnovější technologie. To mě zaujalo a rozhodl jsem se s Honzou spolupracovat na landing page. Zprvu jsem se bál jak bude probíhat komunikace, ale moje obavy postupně pominuly. Honzův profesionální přístup mě až překvapil a zároveň mě fascinovala jeho flexibilita. Proto mohu Honzu doporučit všem, kteří hledají webdesignera, který se nebojí výzev, protože Honza Hotovec je prostě borec!",
  },
  {
    name: "Adéla Soukupová",
    role: "Společně na výlet, Praha",
    year: "2024",
    url: "https://spolecne-na-vylet.webnode.cz",
    quote:
      "Webové stránky projektu Společně na výlet jsem si vytvořila sama úplně bez zkušeností, z toho důvodu jsem velmi uvítala nabídku pana Bc. Jana Hotovce o provedení auditu webu. Chtěla jsem znát názor někoho, kdo se pohybuje v oblasti webdesignu. Pan Jan Hotovec mi provedl audit webových stránek, a to dne 5. 1. 2024. Velmi oceňuji rychlost, se kterou byl audit proveden. Audit jde velmi do hloubky a zaměřuje se na všechny možné aspekty webových stránek, od designu, přes rozložení, až po SEO, atp. Audit jsem obdržela přehledně popsaný do emailu i s doporučeními, jak dané části webu vylepšit. Vše bylo napsáno velmi lidskou a srozumitelnou formou. Pokud se přeci jen stalo, že jsem nějakému termínu nerozuměla, byl mi objasněn na společném videohovoru, kde jsme spolu vše ještě jednou probrali. Díky auditu jsem lépe pochopila, jak webové stránky působí na klienta a dostala řadu užitečných doporučení, jak webové stránky vylepšit. Na Honzovi oceňuji rychlost, se kterou pracuje, a také velmi profesionální přístup. Nechat si udělat audit od Honzy doporučuji každému, kdo hledá profesionála s lidským přístupem a nebojí se kritiky.",
  },
  {
    name: "AXIS International Rehabilitation Center",
    role: "Centrum rehabilitace, Piešťany",
    year: "2023",
    url: "https://www.axis-medical.eu/",
    quote:
      "Ján Hotovec sa počas našej spolupráce ukázal ako spoľahlivý odborník vo svojej oblasti. Komunikácia s ním prebiehala vždy na vysoko profesionálnej úrovni. Spoločnosť Axis Medical Center je mu vďačná za služby pri zveľaďovaní našej webovej stránky. Vo svojej práci vždy dodržuje termíny, je flexibilný, má veľký zmysel pre povinnosť a veľmi proaktívny prístup. Jána ako odborníka odporúčame aj iným firmám, ktoré by potrebovali pomoc v zlepšovaní dizajnu, či obsahu svojich webových stránok a želáme mu veľa úspechov v jeho ďalšej kariére.",
  },
  {
    name: "Jakub Kovář",
    role: "Owner Profi Opravy, Liberec — Česká Lípa",
    year: "2023",
    url: "https://www.profi-opravy.cz/",
    quote:
      "S Honzou jsme navázali úžasný tandem spolupráce. Provedl nám kompletní analýzu a audit webu, prošli jsme cestu našeho zákazníka, navrhli první verze webu a soustředili se také na to, aby náš web zákazníci mohli pohodlně užívat. Honza má vlastní efektivní styl přemýšlení a často vidí věci, které ostatní lidi ani nenapadnou. Nejde po nejjednodušších řešeních a dbá na kvalitu. Skvěle komunikuje, podává upřímnou a důležitou zpětnou vazbu a vždy vyzařuje pozitivní energií. Honza je také flexibilní, proaktivní a má time management, od kterého by se mohl nejeden podnikatel učit. Mnohokrát děkujeme, Honzo, za hloubkovou analýzu, SEO, zviditelnění stránky, optimalizaci webu také pro mobily a v neposlední řadě také za Vás. Jsem rád, že naše spolupráce nadále trvá a máme vždy prostor pro brainstorming.",
  },
  {
    name: "Tereza Sloupová",
    role: "Kariérní poradce, Liberec",
    year: "2023",
    url: "https://www.linkedin.com/in/tereza-sloupov%C3%A1-39a661261/",
    quote:
      "S panem Bc. Hotovcem jsem spolupracovala jako kariérní poradce pro veřejnost. Kdy jsme prokonzultovali jeho pracovní možnosti a pracovní dokumentaci. Po individuálním poradenství a online komunikaci mohu pana Bc. Hotovce doporučit jako kvalifikovaného zaměstnance ve službách, které nabízí. Je velmi komunikativní, empatický, pracovitý, iniciativní, ochotný a má smysl pro humor. Ohromilo mě, jak dokáže být nad věcí, zachovávat si profesionální přístup za jakékoliv situace, odhodlání dosáhnout svých stanovených cílů a nic pro něj není překážkou, jen dostat příležitost dokázat jaká vzácnost se v něm skrývá. Jsem si naprosto jistá, že je kvalifikovaným a vhodným zaměstnancem pro obor, který studoval a precizní v práci, kterou vykonává.",
  },
  {
    name: "Sdružení Tulipán",
    role: "Liberec",
    year: "2023",
    url: "https://www.sdruzenitulipan.cz/",
    quote:
      "Jan Hotovec pracuje ve Sdružení TULIPAN Liberec od Května 2022, jako Obchodní referent. Jeho pracovní náplň zahrnuje vyhledávání veřejných zakázek a práci se sociálními sítěmi, včetně vyhledávání potřebných dat na základě pokynu od vedení organizace. Částečně se podílí i na tvorbě titulků pro videa - převod textu do digitální podoby. S panem Hotovcem se spolupracuje velmi dobře. Svěřené úkoly plní svědomitě a dodržuje domluvené procesy a postupy. Je velmi přátelský a kolegiální. A pro další spolupráci ho můžeme doporučit.",
  },
  {
    name: "Ivana Kudrnová",
    role: "Osobní kouč, mentor, Praha",
    year: "2022",
    url: "https://kineziologie-terapie.cz/",
    quote:
      "Honza je nadaný, empatický a upřímný mladý muž. Kreativní a svědomitý v přípravě i plnění zadání. Práce s ním je vždy okořeněna humorem. Je týmový hráč, který umí, jak přijmout, tak i předat zpětnou vazbu. V rámci jeho vady řeči stačí trochu trpělivosti naslouchat nebo komunikovat písemně. Tvorba a správa webů ho naplňuje a dává mu prostor pro seberealizaci se skvělými výsledky. Doporučuji … získáte člověka se zdravými hodnotami, úsměvem, s neuvěřitelnou chutí a pokorou se životu a výzvám postavit čelem. Jako jeho mentor jsem na jeho posuny „pyšná“.",
  },
  {
    name: "Jana Wollmannová",
    role: "HR Profesionál, Liberec",
    year: "2021",
    url: "https://www.linkedin.com/in/jana-wollmannov%C3%A1-784769a3/",
    quote:
      "Honzu jsem poznala na konferenci Educa My JOB v Liberci, kde byl oceněn jako muž roku 2018. Měla jsem možnost s ním vyjet i na cyklovýlet na Ještěd a byla jsem příjemně překvapena, jaký je to velký sportovec. Aktuálně spolu řešíme pracovní uplatnění po dokončení Metropolitní univerzity, kde úspěšně obhájil titul Bc. Ráda bych ocenila jeho silné stránky jako je houževnatost, cílevědomost a snaha o integritu do systému společnosti i přes své zdravotní omezení. Mohu vyzdvihnout jeho smysl pro povinnost, time-management, schopnost plnit úkoly a reagovat pružně na podněty ke změně a také jeho odhodlání. Honza je velký bojovník a zaslouží si šanci uspět v práci a dostat příležitost.",
  },
  {
    name: "Jan Plachý",
    role: "Owner eventime, Praha",
    year: "2021",
    url: "http://www.eventime.cz/cs/",
    quote:
      "Jan se podílel na tvorbě nového webu společnosti eventime a sportovní značky www.gigaczech.com. V rámci projektu tvořil návrhy obsahu a grafického layoutu webu, tyto průběžně updatoval a předkládal ke konzultaci. Ve své práci se projevoval vysokým stupněm pečlivosti a organizace práce, dokázal si vyhodnotit priority a byl svědomitý v dodržení stanovených termínů. Jeho proaktivní přístup přispěl k celkové dynamice projektu a dosažení stanovených cílů.",
  },
];

export const REASONS = [
  {
    n: "01",
    title: "Lidé vás snáze najdou",
    body: "Dobře postavený web pomáhá tomu, aby vás zákazníci našli ve vyhledávání a rychle pochopili, co nabízíte.",
  },
  {
    n: "02",
    title: "Působíte důvěryhodněji",
    body: "Přehledný web s kvalitním obsahem ukazuje vaše služby, hodnoty i způsob práce v lepším světle.",
  },
  {
    n: "03",
    title: "Podpoříte své podnikání",
    body: "Web může být místem, kde návštěvník získá informace, udělá první krok a rozhodne se vás kontaktovat.",
  },
  {
    n: "04",
    title: "Máte kontrolu nad obsahem",
    body: "Na rozdíl od sociálních sítí je web prostor, který patří vám. Můžete ho průběžně rozvíjet podle toho, jak se mění vaše podnikání.",
  },
  {
    n: "05",
    title: "Cíleně oslovíte nové zákazníky",
    body: "Díky SEO, obsahu a reklamě může web přivádět lidi, kteří hledají právě vaše služby.",
  },
];