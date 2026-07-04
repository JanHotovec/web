import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { i as Check, n as ChevronUp, r as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-CgzAjOOw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var TIMELINE = [
	{
		year: "2014",
		items: [{
			title: "Přijetí na Střední školu při Jedličkově ústavu v Praze",
			body: "Obor: Sociální činnost."
		}]
	},
	{
		year: "2017",
		items: [{
			title: "Školní odborná praxe — Domov Maxov Smržovka",
			body: "Během studia jsem absolvoval školní odbornou praxi v Domově Maxov ve Smržovce, kde jsem působil jako administrativní asistent. Tato zkušenost mi pomohla lépe poznat prostředí sociálních služeb a práci s administrativou."
		}]
	},
	{
		year: "2018",
		items: [
			{
				title: "Maturita — Střední škola při Jedličkově ústavu v Praze",
				body: "Obor: Sociální činnost."
			},
			{
				title: "Přijetí na Metropolitní univerzitu Praha",
				body: "Obor: Veřejná správa."
			},
			{
				title: "Natáčení filmu Dopisy z hlavy se soundtrackem Skafandr",
				body: "Během závodu 111 hodin."
			},
			{
				title: "Metrostav Handy Cyklo Maraton",
				body: "2 222 km kolem České republiky v limitu 111 hodin."
			},
			{ title: "Ocenění Muž roku Cesty za snem 2018" }
		]
	},
	{
		year: "2021",
		items: [
			{
				title: "Dosažení titulu Bc.",
				body: "Obhájení bakalářského titulu na Metropolitní univerzitě Praha, obor Veřejná správa."
			},
			{
				title: "Webdesigner pro Eventime",
				body: "Září 2021 – květen 2022. Podíl na tvorbě webových stránek pro Eventime / Jana Plachého."
			},
			{
				title: "Přijetí na Ekonomickou fakultu TU v Liberci",
				body: "Obor: Management podnikových procesů. V únoru 2022 jsem zjistil, že tato cesta není tou, kterou chci dlouhodobě jít."
			}
		]
	},
	{
		year: "2022",
		items: [
			{
				title: "Recepční — Rezidence Park Masarykova, Liberec",
				body: "Prosinec 2022 – dosud. Chod komplexu, administrativa, přebírání pošty, tvorba dokumentů, koordinace závad a inovací."
			},
			{
				title: "Webmaster pro Axis Medical",
				body: "Srpen 2022 – prosinec 2023. Správa webových stránek."
			},
			{
				title: "Webdesigner pro Studio Lilie Liberec",
				body: "Červen 2022 – dosud. Tvorba a správa webových stránek; v roce 2025 kompletní redesign."
			},
			{
				title: "Obchodní referent — Sdružení Tulipán, Liberec",
				body: "Květen 2022 – dosud. Vyhledávání veřejných zakázek."
			}
		]
	},
	{
		year: "2023",
		items: [{
			title: "Spolupráce s Jakubem Kovářem — Profi Opravy",
			body: "Práce na webu profi-opravy.cz, hledání vhodného plánu, designu a SEO. Spolupráce probíhala také formou vzájemné podpory, konzultací a kariérního rozvoje."
		}, {
			title: "Osobní a profesní rozvoj",
			body: "Intenzivní správa webu Axis Medical, administrativa v Rezidenci Park Masarykova, práce pro Studio Lilie, účast na akci DemoDay pořádané Jakubem Kovářem."
		}]
	},
	{
		year: "2024",
		items: [
			{
				title: "Aufori o.p.s. — administrativní pracovník",
				body: "Nástup říjen 2024. Administrativa, blog, sekce lidé v Aufori, partneři, tabulky a inzeráty."
			},
			{
				title: "Singltrek pod Smrkem o.p.s.",
				body: "Červenec 2024 – říjen 2024. Tvorba landing page."
			},
			{
				title: "APPIA Consult s.r.o.",
				body: "Listopad 2024 – dosud. Tvorba a správa webových stránek."
			},
			{
				title: "SEO mentoring",
				body: "Díky doporučení Jakuba Kováře navázána spolupráce s Martinou Libřickou. Technické SEO, SEO audit, obsahové a datové SEO, práce s nástroji a optimalizace webů."
			},
			{
				title: "AI rozvoj",
				body: "Objevování možností AI nástrojů: ChatGPT, Operator, Atlas, tvorba vlastních modelů."
			}
		]
	},
	{
		year: "2025",
		items: [
			{
				title: "BSS Home",
				body: "Únor 2025 – duben 2025. Tvorba webu pro Michala Farského."
			},
			{
				title: "Ivan Brabec",
				body: "Duben 2025 – říjen 2025. Tvorba landing page pro bankéře Ivana Brabce."
			},
			{
				title: "Gasso.cz",
				body: "Březen 2025 – dosud. Správa e-shopu pro Gasso / Gabrielu Lehkou."
			},
			{
				title: "Studio Lilie",
				body: "Kompletní redesign webu."
			}
		]
	},
	{
		year: "2026",
		items: [
			{
				title: "Zpomal",
				body: "Říjen 2025 – únor 2026. Tvorba webu pro Veroniku Horáčkovou."
			},
			{
				title: "Linaskea Stav s.r.o.",
				body: "Od března 2026 tvorba a správa webových stránek."
			},
			{
				title: "Fameplay.ai",
				body: "Leden 2026 – dosud. Spolupráce v oblasti webdesignu a AI."
			},
			{
				title: "Tvořím srdcem",
				body: "Březen 2026 – dosud. Pomoc s tvorbou webu pro Terezu Sloupovou zaměřeného na kreativní tvorbu."
			}
		]
	}
];
var EDUCATION = [
	{
		period: "2014 — 2018",
		title: "Střední škola při Jedličkově ústavu v Praze",
		org: "Obor: Sociální činnost",
		body: "Ukončeno maturitou."
	},
	{
		period: "2018 — 2021",
		title: "Metropolitní univerzita Praha",
		org: "Obor: Veřejná správa",
		body: "Ukončeno titulem Bc."
	},
	{
		period: "2021 — 2022",
		title: "Ekonomická fakulta Technické univerzity v Liberci",
		org: "Obor: Management podnikových procesů",
		body: "Krátké navazující studium, které mi pomohlo lépe pochopit vlastní směřování."
	}
];
var EXPERIENCE = [
	{
		period: "Květen 2022 — dosud",
		role: "Obchodní referent",
		org: "Sdružení Tulipán",
		body: "Vyhledávání veřejných zakázek a práce s informacemi.",
		tags: [
			"administrativa",
			"veřejné zakázky",
			"komunikace"
		]
	},
	{
		period: "Prosinec 2022 — dosud",
		role: "Recepční",
		org: "Rezidence Park Masarykova",
		body: "Administrativní činnost, přebírání pošty, tvorba dokumentů, koordinace závad a inovací.",
		tags: [
			"administrativa",
			"koordinace",
			"komunikace"
		]
	},
	{
		period: "Říjen 2024 — dosud",
		role: "Administrativní pracovník",
		org: "Aufori o.p.s.",
		body: "Administrativa, blog, sekce lidé v Aufori, partneři, tabulky a inzeráty.",
		tags: [
			"administrativa",
			"obsah",
			"blog"
		]
	},
	{
		period: "2021 — dosud",
		role: "Webdesignér",
		org: "Jan Hotovec / JH98",
		body: "Tvorba webových stránek, správa webů, redesigny, SEO, obsah, konzultace a dlouhodobý rozvoj webových projektů.",
		tags: [
			"webdesign",
			"SEO",
			"správa webu"
		]
	}
];
var PROJECTS = [
	{
		name: "Eventime / GigaCzech",
		period: "2021 — 2022",
		role: "Webdesigner",
		body: "Podíl na tvorbě webových stránek pro Jana Plachého.",
		href: "http://www.eventime.cz/cs/",
		tags: ["Webdesign"]
	},
	{
		name: "Axis Medical",
		period: "2022 — 2023",
		role: "Webmaster",
		body: "Správa webových stránek zdravotnické společnosti.",
		href: "https://www.axis-medical.eu/",
		tags: ["Správa webu"]
	},
	{
		name: "Studio Lilie",
		period: "2022 — dosud",
		role: "Webdesigner",
		body: "Tvorba, správa a kompletní redesign v roce 2025.",
		href: "https://www.lilie-liliova.com/",
		hrefLabel: "Aktuální web ↗",
		hrefAlt: "https://janhotovec98.wixsite.com/lilie-liliova",
		hrefAltLabel: "Původní web ↗",
		tags: ["Webdesign", "Správa webu"]
	},
	{
		name: "Společně na výlet",
		period: "2022 / 2024",
		role: "Audit webu",
		body: "Audit webových stránek zaměřený na design, přehlednost, uživatelskou přívětivost a SEO. Výstupem byla konkrétní doporučení pro další zlepšení webu.",
		href: "https://spolecne-na-vylet.webnode.cz/",
		tags: ["Audit", "SEO"]
	},
	{
		name: "Profi Opravy",
		period: "2023",
		role: "Webdesigner & SEO",
		body: "Web, plán, design a SEO ve spolupráci s Jakubem Kovářem.",
		href: "https://www.profi-opravy.cz/",
		tags: ["Webdesign", "SEO"]
	},
	{
		name: "Singltrek pod Smrkem",
		period: "2024",
		role: "Webdesigner",
		body: "Tvorba landing page.",
		href: "https://janhotovec98.wixsite.com/singltrekpodsmrkem",
		tags: ["Landing page"]
	},
	{
		name: "APPIA Consult",
		period: "2024 — dosud",
		role: "Webdesigner",
		body: "Tvorba a správa webových stránek.",
		href: "https://janhotovec98.wixsite.com/appia",
		tags: ["Webdesign", "Správa webu"]
	},
	{
		name: "Chalupníkova.cz",
		period: "2024",
		role: "Webový konzultant",
		body: "Pomoc s technickým řešením webu, propojením s doménou, úpravou designu, SEO a mobilní optimalizací. Součástí bylo předávání znalostí klientovi pro další správu webu.",
		href: "https://www.chalupnikova.cz/",
		tags: ["Konzultace", "SEO"]
	},
	{
		name: "BSS Home",
		period: "2025",
		role: "Webdesigner",
		body: "Tvorba webu pro Michala Farského.",
		href: "https://janhotovec98.wixstudio.com/bssh",
		tags: ["Webdesign"]
	},
	{
		name: "Ivan Brabec",
		period: "2025",
		role: "Webdesigner",
		body: "Landing page pro bankéře Ivana Brabce.",
		href: "https://janhotovec98.wixstudio.com/ivanbrabec",
		tags: ["Landing page"]
	},
	{
		name: "Gasso.cz",
		period: "2025 — dosud",
		role: "Správa e-shopu",
		body: "Správa e-shopu pro Gabrielu Lehkou.",
		href: "https://www.gasso.cz/",
		tags: ["E-shop", "Správa webu"]
	},
	{
		name: "Zpomal",
		period: "2025 — 2026",
		role: "Webdesigner",
		body: "Tvorba webu pro Veroniku Horáčkovou.",
		href: "https://www.zpomal.com/",
		tags: ["Webdesign"]
	},
	{
		name: "Linaskea Stav",
		period: "2026 — dosud",
		role: "Webdesigner",
		body: "Tvorba a správa webových stránek.",
		href: "https://www.linaskeastav.com/",
		tags: ["Webdesign", "Správa webu"]
	},
	{
		name: "Fameplay.ai",
		period: "2026 — dosud",
		role: "Webdesign & AI",
		body: "Spolupráce v oblasti webdesignu a AI.",
		tags: ["Webdesign", "AI"]
	},
	{
		name: "Tvořím srdcem",
		period: "2026 — dosud",
		role: "Webdesigner",
		body: "Web pro Terezu Sloupovou zaměřený na kreativní tvorbu.",
		href: "https://www.tvorimsrdcem.com/",
		tags: ["Webdesign"]
	}
];
var PROJECT_FILTERS = [
	"Vše",
	"Webdesign",
	"Správa webu",
	"SEO",
	"Landing page",
	"Audit",
	"Konzultace",
	"E-shop / AI"
];
var CV_SECTIONS = [
	{
		id: "profil",
		label: "Profil"
	},
	{
		id: "casova-osa",
		label: "Časová osa"
	},
	{
		id: "vzdelani",
		label: "Vzdělání"
	},
	{
		id: "zkusenosti",
		label: "Pracovní zkušenosti"
	},
	{
		id: "webove-projekty",
		label: "Webové projekty"
	},
	{
		id: "dovednosti",
		label: "Dovednosti"
	},
	{
		id: "certifikaty",
		label: "Certifikáty a rozvoj"
	},
	{
		id: "jazyky",
		label: "Jazyky"
	},
	{
		id: "pracovni-podminky",
		label: "Pracovní podmínky"
	},
	{
		id: "zajmy",
		label: "Zájmy"
	},
	{
		id: "osobni-milniky",
		label: "Osobní milníky"
	},
	{
		id: "kontakt",
		label: "Kontakt"
	}
];
var SKILLS = [
	{
		group: "Webdesign a SEO",
		items: [
			"Wix",
			"Wix Studio",
			"Tvorba webových stránek",
			"Správa webů",
			"Responzivní design",
			"SEO",
			"Google Search Console"
		]
	},
	{
		group: "AI a digitální nástroje",
		items: [
			"ChatGPT",
			"AI prompting",
			"Tvorba vlastních modelů",
			"Google Disk",
			"Webové editory"
		]
	},
	{
		group: "Kancelářské a technické nástroje",
		items: [
			"Microsoft Office",
			"Word",
			"Excel",
			"PowerPoint",
			"Základní orientace v Money S3",
			"Windows",
			"macOS",
			"iOS"
		]
	},
	{
		group: "Soft skills",
		items: [
			"Komunikace",
			"Schopnost spolupráce",
			"Sebereflexe",
			"Aktivní přístup",
			"Samostatnost",
			"Týmová spolupráce",
			"Zvyšování kvalifikace",
			"Kreativní myšlení",
			"Otevřená mysl",
			"Posouvání vlastních hranic",
			"Time management",
			"Odpovědnost"
		]
	}
];
var CERTIFICATES = [
	{
		year: "2025",
		title: "AI Prompting",
		body: "Rozvoj v oblasti práce s AI nástroji, ChatGPT, tvorby vlastních modelů a efektivního promptování.",
		tags: [
			"ChatGPT",
			"AI nástroje",
			"Vlastní modely",
			"Prompting"
		]
	},
	{
		year: "2024",
		title: "SEO mentoring",
		body: "Mentoring v oblasti SEO se zaměřením na technické SEO, nástroje pro SEO audit, obsahové SEO, datové SEO a praktickou optimalizaci webů.",
		tags: [
			"Technické SEO",
			"SEO audit",
			"Obsahové SEO",
			"Datové SEO"
		]
	},
	{
		year: "průběžně",
		title: "Průběžný rozvoj",
		body: "Dlouhodobě se vzdělávám v oblasti webdesignu, SEO, AI nástrojů, přístupnosti a efektivní online komunikace.",
		tags: [
			"Webdesign",
			"SEO",
			"AI",
			"Přístupnost"
		]
	}
];
var LANGUAGES = [{
	name: "Anglický jazyk",
	level: "B2"
}, {
	name: "Španělský jazyk",
	level: "A2"
}];
var WORK_CONDITIONS = [
	"ZTP/P",
	"Možnost úpravy podmínek dle osobní domluvy",
	"Efektivní online spolupráce",
	"Apple ekosystém",
	"Možnost práce na vlastním zařízení",
	"Preference písemné nebo dobře strukturované komunikace"
];
var INTERESTS = [
	"Projekt Asistence navzájem",
	"Cyklistika na tricyklu",
	"Plavání",
	"Saunování",
	"Zájem o výpočetní techniku",
	"Vzdělávání se",
	"Kulturní akce",
	"Čas s rodinou a přáteli"
];
function CV() {
	const years = TIMELINE.map((t) => t.year);
	const [activeSection, setActiveSection] = (0, import_react.useState)("profil");
	const [activeYear, setActiveYear] = (0, import_react.useState)(years[0]);
	const [projectFilter, setProjectFilter] = (0, import_react.useState)("Vše");
	(0, import_react.useEffect)(() => {
		const ids = CV_SECTIONS.map((s) => s.id);
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible[0]) setActiveSection(visible[0].target.id);
		}, {
			rootMargin: "-140px 0px -60% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, []);
	const filteredProjects = (0, import_react.useMemo)(() => {
		if (projectFilter === "Vše") return PROJECTS;
		if (projectFilter === "E-shop / AI") return PROJECTS.filter((p) => p.tags.includes("E-shop") || p.tags.includes("AI"));
		return PROJECTS.filter((p) => p.tags.includes(projectFilter));
	}, [projectFilter]);
	const handleAnchor = (e, id) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1280px] px-6 py-20 md:px-10 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.22em] text-primary",
						children: "§ — Curriculum Vitae"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 font-display text-6xl leading-[0.98] md:text-8xl",
						children: "CV"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-display text-2xl text-primary md:text-3xl",
						children: "Co mě přivedlo tam, kde dnes jsem?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Moje profesní cesta není přímka, ale mapa plná výzev, objevů a nových směrů. Každý projekt, spolupráce i osobní překážka mě posunula dál – a formovala mě nejen jako webdesignera, ale i jako člověka." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Věřím, že práce není jen o tom, co děláme, ale jak to děláme. V mém případě je to o poctivém přístupu, schopnosti naslouchat a hledat řešení, která mají smysl." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Na této stránce najdete přehled mých zkušeností, projektů a dovedností." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projekty",
							className: "rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform",
							children: "Projekty →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: "rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary",
							children: "Kontaktujte mě"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
							children: "Přejít na sekci"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							value: activeSection,
							onValueChange: (id) => {
								setActiveSection(id);
								const el = document.getElementById(id);
								if (el) el.scrollIntoView({
									behavior: "smooth",
									block: "start"
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
									placeholder: "Vyberte část CV",
									children: CV_SECTIONS.find((s) => s.id === activeSection)?.label ?? "Vyberte část CV"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								className: "max-h-[60vh]",
								children: CV_SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: s.id,
									children: s.label
								}, s.id))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-10 lg:grid-cols-[minmax(220px,260px)_minmax(0,1fr)] lg:gap-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sticky top-[120px] self-start h-fit max-h-[calc(100vh-140px)] overflow-y-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "liquid-nav rounded-3xl p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mb-3 px-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
										children: "Obsah CV"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "flex flex-col gap-1",
										children: CV_SECTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `#${s.id}`,
											onClick: (e) => handleAnchor(e, s.id),
											className: `block rounded-full px-4 py-2 text-sm transition-all ${activeSection === s.id ? "bg-primary/15 text-primary shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`,
											children: s.label
										}), s.id === "casova-osa" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "ml-4 mt-1 flex flex-col gap-0.5 border-l border-border/40 pl-3",
											children: years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: `#rok-${y}`,
												onClick: (e) => handleAnchor(e, `rok-${y}`),
												className: `block rounded-full px-3 py-1 text-xs transition-colors ${activeSection === "casova-osa" && activeYear === y ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`,
												children: y
											}) }, y))
										})] }, s.id))
									})]
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "profil",
									title: "Profil",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-6 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_1fr]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-2xl",
												children: "Bc. Jan Hotovec"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-sm text-primary",
												children: "Webdesignér · Liberec · online spolupráce"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-6 space-y-1 text-sm text-muted-foreground",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														className: "hover:text-foreground",
														href: "mailto:janhotovec98@gmail.com",
														children: "janhotovec98@gmail.com"
													}) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														className: "hover:text-foreground",
														href: "tel:+420721038777",
														children: "721 038 777"
													}) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														className: "hover:text-foreground",
														href: "https://janhotovec.com",
														target: "_blank",
														rel: "noreferrer",
														children: "janhotovec.com"
													}) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														className: "hover:text-foreground",
														href: "https://www.linkedin.com/in/janhotovec98/",
														target: "_blank",
														rel: "noreferrer",
														children: "linkedin.com/in/janhotovec98"
													}) })
												]
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base leading-relaxed text-muted-foreground",
											children: "Jsem webdesignér z Liberce, který propojuje technické dovednosti, osobní přístup a zkušenost života „ve skafandru“. Věnuji se tvorbě a správě webových stránek, SEO, obsahu a dlouhodobému rozvoji webových projektů. Každou spolupráci vnímám jako prostor pro naslouchání, důvěru a hledání řešení, která mají smysl."
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "casova-osa",
									title: "Časová osa",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearsTimeline, { onActiveYear: setActiveYear })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "vzdelani",
									title: "Vzdělání",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-5 md:grid-cols-3",
										children: EDUCATION.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col rounded-2xl border border-border bg-card p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-[0.18em] text-primary",
													children: e.period
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 font-display text-xl",
													children: e.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-1 text-sm text-primary/80",
													children: e.org
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-muted-foreground",
													children: e.body
												})
											]
										}, e.title))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "zkusenosti",
									title: "Pracovní zkušenosti",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-5 md:grid-cols-2",
										children: EXPERIENCE.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col rounded-2xl border border-border bg-card p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-[0.18em] text-primary",
													children: e.period
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 font-display text-xl",
													children: e.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm text-primary/80",
													children: e.org
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-sm leading-relaxed text-muted-foreground",
													children: e.body
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-4 flex flex-wrap gap-2",
													children: e.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80",
														children: t
													}, t))
												})
											]
										}, e.role + e.period))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
									id: "webove-projekty",
									title: "Webové projekty",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mb-6 sm:hidden",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
												children: "Filtrovat projekty"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												value: projectFilter,
												onValueChange: (v) => setProjectFilter(v),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
														placeholder: "Všechny projekty",
														children: projectFilter
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: PROJECT_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: f,
													children: f
												}, f)) })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mb-6 hidden flex-wrap gap-2 sm:flex",
											children: PROJECT_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setProjectFilter(f),
												className: `rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors ${projectFilter === f ? "border-primary/40 bg-primary/15 text-primary" : "border-border bg-transparent text-muted-foreground hover:text-foreground"}`,
												children: f
											}, f))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
											children: filteredProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 sm:p-6 [overflow-wrap:anywhere]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs uppercase tracking-[0.18em] text-primary",
														children: p.period
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 font-display text-lg",
														children: p.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-sm text-primary/80",
														children: p.role
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
														children: p.body
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
														className: "mt-4 flex flex-wrap gap-2",
														children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
															className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/80",
															children: t
														}, t))
													}),
													p.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-4 flex flex-wrap gap-x-4 gap-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															href: p.href,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "text-sm font-semibold text-primary hover:underline",
															children: p.hrefLabel ?? "Otevřít web ↗"
														}), p.hrefAlt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															href: p.hrefAlt,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "text-sm font-semibold text-muted-foreground hover:text-primary hover:underline",
															children: p.hrefAltLabel ?? "Původní web ↗"
														})]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mt-4 inline-flex w-fit rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
														children: "Připravujeme"
													})
												]
											}, p.name))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "dovednosti",
									title: "Dovednosti",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-6 sm:grid-cols-2",
										children: SKILLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-border bg-card p-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-display text-lg",
												children: s.group
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
												className: "mt-3 flex flex-wrap gap-2",
												children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
													className: "rounded-full bg-secondary px-3 py-1 text-xs text-foreground/80 transition-colors hover:bg-primary/15 hover:text-primary",
													children: it
												}, it))
											})]
										}, s.group))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "certifikaty",
									title: "Certifikáty, mentoring a profesní rozvoj",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-5 md:grid-cols-3",
										children: CERTIFICATES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col rounded-2xl border border-border bg-card p-6",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs uppercase tracking-[0.18em] text-primary",
													children: c.year
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "mt-3 font-display text-xl",
													children: c.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
													children: c.body
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-4 flex flex-wrap gap-2",
													children: c.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] text-foreground/80",
														children: t
													}, t))
												})
											]
										}, c.title))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "jazyky",
									title: "Jazyky",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-3",
										children: LANGUAGES.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-sm",
												children: l.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary",
												children: l.level
											})]
										}, l.name))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "pracovni-podminky",
									title: "Pracovní podmínky a způsob spolupráce",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-card p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base leading-relaxed text-muted-foreground",
											children: "Ke spolupráci přistupuji individuálně a férově. Vzhledem k mému zdravotnímu stavu je pro mě důležitá jasná domluva, možnost přizpůsobení pracovních podmínek a efektivní komunikace. Nejlépe se mi pracuje v prostředí, kde je prostor pro důvěru, plánování a vzájemný respekt."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 grid gap-2 sm:grid-cols-2",
											children: WORK_CONDITIONS.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-start gap-2 text-sm text-foreground/80",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w })]
											}, w))
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "zajmy",
									title: "Zájmy a dobrovolná činnost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border bg-card p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base leading-relaxed text-muted-foreground",
											children: "Vedle práce a webdesignu se zajímám o technologie, osobní rozvoj, sport a aktivity, které mi pomáhají udržovat energii a chuť posouvat se dál."
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-6 flex flex-wrap gap-2",
											children: INTERESTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-full bg-secondary px-3 py-1.5 text-xs text-foreground/80",
												children: i
											}, i))
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
									id: "osobni-milniky",
									title: "Osobní milníky",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-5 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col rounded-2xl border border-border bg-card p-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs uppercase tracking-[0.18em] text-primary",
														children: "2018"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 font-display text-lg",
														children: "Dopisy z hlavy & Skafandr"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
														children: "V roce 2018 vznikl dokument Dopisy z hlavy a soundtrack Skafandr, které zachycují část mého osobního příběhu, účast na Metrostav Handy Cyklo Maratonu a pohled do života „ve skafandru“."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
														to: "/dopisy-skafandr",
														className: "mt-4 text-sm font-semibold text-primary hover:underline",
														children: "Otevřít stránku →"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col rounded-2xl border border-border bg-card p-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs uppercase tracking-[0.18em] text-primary",
														children: "2018"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 font-display text-lg",
														children: "Metrostav Handy Cyklo Maraton"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-sm leading-relaxed text-muted-foreground",
														children: "Účast v závodu dlouhém 2 222 km kolem České republiky v limitu 111 hodin."
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col rounded-2xl border border-border bg-card p-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs uppercase tracking-[0.18em] text-primary",
														children: "2018"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "mt-2 font-display text-lg",
														children: "Muž roku Cesty za snem 2018"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-3 text-sm leading-relaxed text-muted-foreground",
														children: "Ocenění, kterého si velmi vážím a které vnímám jako připomenutí síly spolupráce, podpory a lidského propojení."
													})
												]
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									id: "kontakt",
									className: "mt-20 scroll-mt-32 rounded-3xl border border-border bg-card p-10 md:p-14",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-3xl md:text-4xl",
											children: "Chcete navázat spolupráci?"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
											children: "Rád se podívám i na váš projekt a navrhnu, jak by mohl fungovat lépe – obsahově, vizuálně i technicky."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/kontakt",
												className: "rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform",
												children: "Kontaktujte mě →"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/projekty",
												className: "rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary",
												children: "Prohlédnout projekty"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 text-sm text-muted-foreground",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "hover:text-foreground",
												href: "mailto:janhotovec98@gmail.com",
												children: "janhotovec98@gmail.com"
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												className: "hover:text-foreground",
												href: "tel:+420721038777",
												children: "721 038 777"
											}) })]
										})
									]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Section({ id, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "mt-16 scroll-mt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-8 font-display text-3xl md:text-4xl",
			children: title
		}), children]
	});
}
function YearsTimeline({ onActiveYear }) {
	const years = TIMELINE.map((t) => t.year);
	const [active, setActive] = (0, import_react.useState)(years[0]);
	(0, import_react.useEffect)(() => {
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
			if (visible[0]) {
				const y = visible[0].target.dataset.year;
				setActive(y);
				onActiveYear?.(y);
			}
		}, {
			rootMargin: "-140px 0px -60% 0px",
			threshold: 0
		});
		years.forEach((y) => {
			const el = document.getElementById(`rok-${y}`);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, [years.join(",")]);
	const handleClick = (e, y) => {
		e.preventDefault();
		const el = document.getElementById(`rok-${y}`);
		if (el) {
			el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
			setActive(y);
			onActiveYear?.(y);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative grid gap-8 md:grid-cols-[160px_1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mb-2 block text-[11px] uppercase tracking-[0.22em] text-muted-foreground",
					children: "Přejít na rok"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: active,
					onValueChange: (y) => {
						const el = document.getElementById(`rok-${y}`);
						if (el) el.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
						setActive(y);
						onActiveYear?.(y);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "liquid-nav h-12 w-full rounded-full border-0 px-5 text-sm font-semibold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {
							placeholder: "Vyberte rok",
							children: active
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: y,
						children: y
					}, y)) })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden md:block lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky top-28",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border/60 bg-background/50 p-4 backdrop-blur-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-3 px-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
							children: "Roky"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-1",
							children: years.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `#rok-${y}`,
								onClick: (e) => handleClick(e, y),
								className: `block rounded-full px-4 py-2 font-display text-sm transition-all ${active === y ? "bg-primary/15 text-primary shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`,
								children: y
							}) }, y))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-12 md:col-start-2 md:space-y-14 lg:col-span-2 lg:col-start-1",
				children: TIMELINE.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					id: `rok-${t.year}`,
					"data-year": t.year,
					className: "grid scroll-mt-36 gap-3 border-l-2 border-primary/30 pl-5 md:scroll-mt-32 md:grid-cols-[120px_1fr] md:gap-8 md:pl-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl text-primary md:text-5xl",
						children: t.year
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: t.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg",
							children: it.title
						}), it.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted-foreground",
							children: it.body
						})] }, it.title))
					})]
				}, t.year))
			})
		]
	});
}
//#endregion
export { CV as component };
