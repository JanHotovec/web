import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-CZC0ONuK.js
var import_jsx_runtime = require_jsx_runtime();
function Legal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.22em] text-primary",
						children: "§ — Legal"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 font-display text-5xl leading-[0.98] md:text-7xl",
						children: [
							"Právní ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "informace"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "Tato stránka je informativní a slouží jako přehled. V případě konkrétních dotazů mě prosím kontaktujte."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Provozovatel",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Bc. Jan Hotovec",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"IČO: na vyžádání",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Liberec, Česká republika",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"E-mail: ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:janhotovec98@gmail.com",
								className: "underline hover:text-primary",
								children: "janhotovec98@gmail.com"
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Zásady ochrany osobních údajů",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Vaše osobní údaje zpracovávám výhradně pro účely vyřízení vaší poptávky a komunikace s vámi. Údaje (jméno, e-mail, popis projektu) neposkytuji třetím stranám a uchovávám je pouze po dobu nezbytně nutnou." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Máte právo požádat o výpis, opravu nebo smazání svých údajů — stačí napsat e-mail." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Cookies",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Web v současné podobě používá pouze technicky nezbytné cookies (např. pro vykreslení stránky a preferenci tématu). Žádné marketingové ani trackovací cookies bez vašeho souhlasu." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
						title: "Autorská práva",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Texty, fotografie a grafika na tomto webu jsou autorským dílem Jana Hotovce nebo jsou užity se souhlasem klientů. Použití bez souhlasu není dovoleno." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Loga, snímky a názvy klientů jsou majetkem příslušných vlastníků a jsou zde uvedeny pouze pro účely referencí." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "Podmínky spolupráce",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Spolupráce začíná nezávazným hovorem a návrhem zdarma. Konkrétní podmínky, cena a harmonogram jsou součástí smlouvy nebo objednávky uzavřené před zahájením prací." })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-sm text-muted-foreground hover:text-foreground",
							children: "← Zpět na úvod"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl md:text-3xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-4 text-base leading-relaxed text-muted-foreground",
			children
		})]
	});
}
//#endregion
export { Legal as component };
