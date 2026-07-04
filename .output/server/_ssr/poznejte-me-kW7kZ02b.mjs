import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/poznejte-me-kW7kZ02b.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		eyebrow: "Osobní",
		title: "Příběh",
		text: "Honza, 27, Liberec. Život ve skafandru — dětská mozková obrna od narození, ale tělo mě nezastaví. Krátký, upřímný pohled do mého života.",
		to: "/pribeh",
		cta: "Přečíst příběh"
	},
	{
		eyebrow: "Výzva 2018",
		title: "111 hodin 2018",
		text: "Metrostav Handy Cyklo Maraton, 2 222 km napříč Českem a film Dopisy z hlavy / Skafandr. Silný okamžik, který mě formuje dodnes.",
		to: "/dopisy-skafandr",
		cta: "Zobrazit sekci"
	},
	{
		eyebrow: "Poděkování",
		title: "Sponzoři a dárci",
		text: "Lidé a firmy, kteří dlouhodobě podporují moji cestu, kondici i každodenní život. Bez jejich důvěry by to nešlo.",
		to: "/sponzori",
		cta: "Poděkovat s námi"
	}
];
function PoznejteMe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-[1100px] px-6 pt-20 pb-8 md:px-10 md:pt-28",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.22em] text-primary",
							children: "Poznejte mě"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl",
							children: [
								"Za weby stojí ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-primary",
									children: "člověk"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl",
							children: "Jsem Honza. Webdesignér ve skafandru z Liberce. Kromě práce pro klienty mě formuje i osobní příběh, výzvy, které si dávám, a lidé, kteří stojí při mně. Tady je to nejdůležitější na jednom místě."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: c.to,
							className: "liquid-pill group flex h-full flex-col rounded-[1.75rem] p-8 transition-transform hover:-translate-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.22em] text-primary",
									children: c.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-2xl leading-tight md:text-3xl",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground",
									children: c.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary",
									children: [c.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										className: "transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								})
							]
						}, c.title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-[1100px] px-6 pb-24 md:px-10 md:pb-32",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-[2rem] border border-border bg-secondary/40 p-10 md:p-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-4xl",
									children: "Chcete se podívat i na profesní stranu?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: "Kompletní životopis, vzdělání a zkušenosti najdete v mém CV."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cv",
								className: "rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform",
								children: "Zobrazit CV →"
							})]
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { PoznejteMe as component };
