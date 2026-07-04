import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-a1zU9sb8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Kontakt() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-16 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.22em] text-primary",
								children: "Kontakt"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl leading-[0.95] md:text-7xl",
								children: [
									"Začněme.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-primary",
										children: "Návrh dostanete zdarma."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-lg text-muted-foreground",
								children: "Stačí pár vět. Ozvu se zpravidla do 24 hodin a domluvíme krátký hovor."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-12 space-y-6 border-t border-border/60 pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "E-mail",
										value: "janhotovec98@gmail.com",
										href: "mailto:janhotovec98@gmail.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "LinkedIn",
										value: "janhotovec98",
										href: "https://www.linkedin.com/in/janhotovec98/"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "Lokalita",
										value: "Liberec, Česko"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
										label: "K dispozici",
										value: "Nové projekty 2026"
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								const data = new FormData(e.currentTarget);
								const subject = encodeURIComponent(`Nový projekt — ${data.get("name")}`);
								const body = encodeURIComponent(`Jméno: ${data.get("name")}\nE-mail: ${data.get("email")}\nFirma: ${data.get("company")}\n\nO projektu:\n${data.get("message")}`);
								window.location.href = `mailto:janhotovec98@gmail.com?subject=${subject}&body=${body}`;
								setSent(true);
							},
							className: "rounded-[2rem] border border-border bg-card p-8 md:p-10 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Jak vám můžu říkat?",
									name: "name",
									placeholder: "Jan Novák",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "E-mail",
									name: "email",
									type: "email",
									placeholder: "jan@firma.cz",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Firma / projekt (volitelné)",
									name: "company",
									placeholder: "Vaše firma"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
									children: "O čem to bude?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									rows: 6,
									required: true,
									placeholder: "Pár vět o vašem nápadu, byznysu nebo cíli…",
									className: "mt-2 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "group w-full rounded-full bg-foreground px-7 py-5 text-base font-semibold text-background transition-transform hover:-translate-y-0.5",
									children: ["Odeslat poptávku ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 inline-block transition-transform group-hover:translate-x-1",
										children: "→"
									})]
								}),
								sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-center text-sm text-primary",
									children: "Otevírám váš e-mailový klient… Pokud se nic neděje, napište mi na janhotovec98@gmail.com"
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-16 inline-flex text-sm text-muted-foreground hover:text-foreground",
					children: "← Zpět na úvod"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Row({ label, value, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-6 border-b border-border/40 pb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
			children: label
		}), href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			target: href.startsWith("http") ? "_blank" : void 0,
			rel: "noreferrer",
			className: "font-display text-lg hover:text-primary",
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-lg",
			children: value
		})]
	});
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		placeholder,
		required,
		className: "mt-2 w-full rounded-full border border-border bg-background px-5 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
	})] });
}
//#endregion
export { Kontakt as component };
