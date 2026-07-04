import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as ArrowUp } from "../_libs/lucide-react.mjs";
import { n as PORTRAIT_STORY, t as PORTRAIT_MAIN } from "./site-data-CdZG7Bka.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DB14ltnn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-TKJkTklE.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function BackToTop() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const scrolled = window.scrollY;
			const total = document.documentElement.scrollHeight - window.innerHeight;
			const ratio = total > 0 ? scrolled / total : 0;
			setVisible(scrolled > 600 && ratio > .55);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: handleClick,
		"aria-label": "Zpět nahoru",
		className: `liquid-pill fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full text-primary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 md:bottom-8 md:right-8 md:h-12 md:w-12 ${visible ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {
			className: "h-5 w-5",
			strokeWidth: 2.25
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Jan Hotovec — Webdesignér ze Skafandru" },
			{
				name: "description",
				content: "Navrhuji a stavím weby, které prodávají. Návrh zdarma, a pak se rozhodnete."
			},
			{
				name: "author",
				content: "Jan Hotovec"
			},
			{
				property: "og:title",
				content: "Jan Hotovec — Webdesignér ze Skafandru"
			},
			{
				property: "og:description",
				content: "Navrhuji a stavím weby, které prodávají. Návrh zdarma, a pak se rozhodnete."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "Jan Hotovec — Webdesignér ze Skafandru"
			},
			{
				name: "twitter:description",
				content: "Navrhuji a stavím weby, které prodávají. Návrh zdarma, a pak se rozhodnete."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f12eaa09-8237-4e1f-8440-118a0155e0f4"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f12eaa09-8237-4e1f-8440-118a0155e0f4"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BackToTop, {})]
	});
}
var $$splitComponentImporter$9 = () => import("./sponzori-b_HK74cw.mjs");
var Route$9 = createFileRoute("/sponzori")({
	head: () => ({ meta: [
		{ title: "Sponzoři a dárci — Jan Hotovec" },
		{
			name: "description",
			content: "Upřímné poděkování sponzorům a dárcům, kteří podporují moji cestu, kondici i každodenní život."
		},
		{
			property: "og:title",
			content: "Sponzoři a dárci — Jan Hotovec"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./sluzby-B33XLAVY.mjs");
var Route$8 = createFileRoute("/sluzby")({
	head: () => ({ meta: [
		{ title: "Služby — Tvorba webových stránek Liberec | Jan Hotovec" },
		{
			name: "description",
			content: "Webdesign na míru pro firmy, správa a údržba webových stránek, SEO a osobní přístup. Tvorba webových stránek Liberec — návrh dostanete zdarma."
		},
		{
			property: "og:title",
			content: "Služby — Jan Hotovec, webdesignér z Liberce"
		},
		{
			property: "og:description",
			content: "Webdesign na míru, správa webů a SEO s osobním přístupem."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./projekty-9_-7jvM1.mjs");
var Route$7 = createFileRoute("/projekty")({
	head: () => ({ meta: [
		{ title: "Projekty — Jan Hotovec | Portfolio webdesignéra z Liberce" },
		{
			name: "description",
			content: "Vybrané projekty a realizace webových stránek. Osobní značky, firmy, lokální byznys i B2B služby — všechny weby tvořím na míru."
		},
		{
			property: "og:title",
			content: "Projekty — Jan Hotovec"
		},
		{
			property: "og:description",
			content: "Portfolio realizovaných webů — od osobních značek po lokální firmy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./pribeh-DHvKoQwb.mjs");
var Route$6 = createFileRoute("/pribeh")({
	head: () => ({ meta: [
		{ title: "Příběh — Jan Hotovec | Život ve skafandru" },
		{
			name: "description",
			content: "Honza, 27, Liberec. Život ve skafandru — DMO od narození, ale tělo mě nezastaví. Příběh kluka, který si plní sny a staví weby."
		},
		{
			property: "og:title",
			content: "Příběh — Jan Hotovec | Život ve skafandru"
		},
		{
			property: "og:image",
			content: PORTRAIT_STORY
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./poznejte-me-kW7kZ02b.mjs");
var Route$5 = createFileRoute("/poznejte-me")({
	head: () => ({ meta: [
		{ title: "Poznejte mě — Jan Hotovec" },
		{
			name: "description",
			content: "Rozcestník osobní části webu — příběh Jana Hotovce, výzva 111 hodin 2018 a poděkování sponzorům a dárcům."
		},
		{
			property: "og:title",
			content: "Poznejte mě — Jan Hotovec"
		},
		{
			property: "og:description",
			content: "Příběh, 111 hodin 2018 a poděkování těm, kteří mě podporují."
		},
		{
			property: "og:image",
			content: PORTRAIT_STORY
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./legal-CZC0ONuK.mjs");
var Route$4 = createFileRoute("/legal")({
	head: () => ({ meta: [
		{ title: "Právní informace — Jan Hotovec" },
		{
			name: "description",
			content: "Zásady ochrany osobních údajů, cookies a podmínky používání webu janhotovec.com."
		},
		{
			property: "og:title",
			content: "Právní informace — Jan Hotovec"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./kontakt-a1zU9sb8.mjs");
var Route$3 = createFileRoute("/kontakt")({
	head: () => ({ meta: [
		{ title: "Kontakt — Jan Hotovec | Návrh webu zdarma" },
		{
			name: "description",
			content: "Napište mi pár vět o vašem nápadu. Do několika dní vám pošlu konkrétní návrh — a teprve potom se rozhodnete."
		},
		{
			property: "og:title",
			content: "Kontakt — Jan Hotovec"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dopisy-skafandr-BX8QnQCb.mjs");
var Route$2 = createFileRoute("/dopisy-skafandr")({
	head: () => ({ meta: [
		{ title: "Dopisy z hlavy & Skafandr — Jan Hotovec" },
		{
			name: "description",
			content: "Osobní texty, úvahy a soundtrack Skafandr. Život s DMO viděný zevnitř — bez příkras, ale s humorem a nadějí."
		},
		{
			property: "og:title",
			content: "Dopisy z hlavy & Skafandr"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./cv-CgzAjOOw.mjs");
var Route$1 = createFileRoute("/cv")({
	head: () => ({ meta: [
		{ title: "CV | Bc. Jan Hotovec – webdesignér Liberec" },
		{
			name: "description",
			content: "Profesní cesta Bc. Jana Hotovce – webdesignéra z Liberce. Přehled vzdělání, pracovních zkušeností, webových projektů, SEO dovedností a osobního příběhu života ve skafandru."
		},
		{
			property: "og:title",
			content: "CV | Bc. Jan Hotovec – webdesignér Liberec"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-z5bkVXEZ.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Jan Hotovec — Webdesignér, který dělá weby s příběhem" },
		{
			name: "description",
			content: "Navrhuji a stavím weby, které vás důstojně představí a podpoří vaše podnikání. Návrh dostanete zdarma — a pak se rozhodnete. 14+ projektů, 17+ referencí, Liberec."
		},
		{
			property: "og:title",
			content: "Jan Hotovec — Webdesignér z Liberce"
		},
		{
			property: "og:description",
			content: "Navrhuji a stavím weby, které vás důstojně představí. Návrh dostanete zdarma."
		},
		{
			property: "og:image",
			content: PORTRAIT_MAIN
		},
		{
			name: "twitter:image",
			content: PORTRAIT_MAIN
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SponzoriRoute = Route$9.update({
	id: "/sponzori",
	path: "/sponzori",
	getParentRoute: () => Route$10
});
var SluzbyRoute = Route$8.update({
	id: "/sluzby",
	path: "/sluzby",
	getParentRoute: () => Route$10
});
var ProjektyRoute = Route$7.update({
	id: "/projekty",
	path: "/projekty",
	getParentRoute: () => Route$10
});
var PribehRoute = Route$6.update({
	id: "/pribeh",
	path: "/pribeh",
	getParentRoute: () => Route$10
});
var PoznejteMeRoute = Route$5.update({
	id: "/poznejte-me",
	path: "/poznejte-me",
	getParentRoute: () => Route$10
});
var LegalRoute = Route$4.update({
	id: "/legal",
	path: "/legal",
	getParentRoute: () => Route$10
});
var KontaktRoute = Route$3.update({
	id: "/kontakt",
	path: "/kontakt",
	getParentRoute: () => Route$10
});
var DopisySkafandrRoute = Route$2.update({
	id: "/dopisy-skafandr",
	path: "/dopisy-skafandr",
	getParentRoute: () => Route$10
});
var CvRoute = Route$1.update({
	id: "/cv",
	path: "/cv",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	CvRoute,
	DopisySkafandrRoute,
	KontaktRoute,
	LegalRoute,
	PoznejteMeRoute,
	PribehRoute,
	ProjektyRoute,
	SluzbyRoute,
	SponzoriRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
