import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
import { r as PROJECTS } from "./site-data-CdZG7Bka.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projekty-9_-7jvM1.js
var import_jsx_runtime = require_jsx_runtime();
function Projekty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-10 md:pt-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.22em] text-primary",
					children: "§ — Projekty"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid items-end gap-8 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "md:col-span-8 font-display text-5xl leading-[0.98] md:text-7xl",
						children: [
							PROJECTS.length,
							"+ projektů, na které jsem ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "hrdý"
							}),
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "md:col-span-4 text-lg text-muted-foreground",
						children: "Každý web má vlastní příběh. Tady jsou ty, na kterých jsem v posledních letech pracoval — od osobních značek po lokální byznysy."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-[1400px] px-6 pb-24 md:px-10 md:pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-12",
					children: PROJECTS.map((p, i) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: p.size === "lg" ? "md:col-span-8" : p.size === "sm" ? "md:col-span-4" : "md:col-span-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(p.url ? "a" : "div", {
								...p.url ? {
									href: p.url,
									target: "_blank",
									rel: "noreferrer"
								} : {},
								className: "group block overflow-hidden rounded-[1.5rem] border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[16/10] overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: p.image,
											alt: `${p.title} — ${p.category}`,
											className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute left-5 top-5 font-display text-xs uppercase tracking-[0.22em] text-background/90",
											children: ["№ ", String(i + 1).padStart(2, "0")]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-end justify-between gap-6 p-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs uppercase tracking-[0.18em] text-muted-foreground",
											children: [
												p.category,
												" · ",
												p.year
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl leading-tight md:text-3xl",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: p.client
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `shrink-0 grid h-11 w-11 place-items-center rounded-full border border-border transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary ${p.url ? "" : "opacity-30"}`,
										"aria-hidden": true,
										children: "↗"
									})]
								})]
							})
						}, p.slug);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/kontakt",
						className: "rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform",
						children: "Chci nový web →"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "reference",
						className: "rounded-full border border-border px-7 py-4 text-sm font-semibold hover:bg-secondary",
						children: "Přečíst reference"
					})]
				})]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { Projekty as component };
