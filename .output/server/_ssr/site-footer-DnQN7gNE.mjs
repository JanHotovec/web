import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-DnQN7gNE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		kind: "link",
		label: "Domů",
		to: "/"
	},
	{
		kind: "group",
		label: "Business",
		matchPaths: [
			"/sluzby",
			"/projekty",
			"/cv"
		],
		children: [
			{
				label: "Služby",
				to: "/sluzby",
				description: "Co pro vás mohu udělat"
			},
			{
				label: "Projekty",
				to: "/projekty",
				description: "Realizace a case studies"
			},
			{
				label: "Reference",
				to: "/",
				hash: "reference",
				description: "Slova mých klientů"
			},
			{
				label: "CV",
				to: "/cv",
				description: "Profesní životopis"
			}
		]
	},
	{
		kind: "group",
		label: "Poznejte mě",
		matchPaths: [
			"/poznejte-me",
			"/pribeh",
			"/dopisy-skafandr",
			"/sponzori",
			"/cv"
		],
		children: [
			{
				label: "Příběh",
				to: "/pribeh",
				description: "Život ve skafandru"
			},
			{
				label: "111 hodin 2018",
				to: "/dopisy-skafandr",
				description: "Výzva a film"
			},
			{
				label: "Sponzoři a dárci",
				to: "/sponzori",
				description: "Poděkování"
			}
		]
	},
	{
		kind: "link",
		label: "Kontakt",
		to: "/kontakt"
	}
];
function isGroupActive(item, pathname) {
	return item.matchPaths.some((p) => p === "/" ? pathname === "/" : pathname.startsWith(p));
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [openGroup, setOpenGroup] = (0, import_react.useState)(null);
	const [mobileGroup, setMobileGroup] = (0, import_react.useState)(null);
	const closeTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setMobileGroup(null);
	}, [pathname]);
	const scheduleClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setOpenGroup(null), 160);
	};
	const cancelClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold transition-transform group-hover:rotate-12",
						children: "JH"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden min-w-0 flex-col leading-tight sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-display text-sm font-semibold",
							children: "Bc. Jan Hotovec"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "truncate text-[11px] tracking-[0.02em] text-muted-foreground",
							children: [
								"webdesignér ve skafandru ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "○"
								}),
								" Liberec"
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					onMouseLeave: scheduleClose,
					className: "liquid-nav absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full p-1.5 lg:flex",
					children: nav.map((item) => {
						if (item.kind === "link") {
							const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								onMouseEnter: () => {
									cancelClose();
									setOpenGroup(null);
								},
								className: `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active ? "text-primary" : "text-foreground/70 hover:text-primary"}`,
								children: item.label
							}, item.label);
						}
						const active = isGroupActive(item, pathname);
						const isOpen = openGroup === item.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							onMouseEnter: () => {
								cancelClose();
								setOpenGroup(item.label);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-haspopup": "menu",
								"aria-expanded": isOpen,
								onClick: () => setOpenGroup(isOpen ? null : item.label),
								className: `inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${active || isOpen ? "text-primary" : "text-foreground/70 hover:text-primary"}`,
								children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: `text-[0.65rem] transition-transform ${isOpen ? "rotate-180" : ""}`,
									children: "▾"
								})]
							}), isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								role: "menu",
								className: "absolute left-1/2 top-full z-20 mt-3 w-72 -translate-x-1/2 pt-1",
								onMouseEnter: cancelClose,
								onMouseLeave: scheduleClose,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "liquid-nav rounded-2xl p-2 shadow-[var(--shadow-soft)]",
									children: item.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: c.to,
										hash: c.hash,
										role: "menuitem",
										onClick: () => setOpenGroup(null),
										className: "block rounded-xl px-4 py-3 transition-colors hover:bg-primary/5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-semibold text-foreground",
											children: c.label
										}), c.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-0.5 text-xs text-muted-foreground",
											children: c.description
										})]
									}, c.label))
								})
							})]
						}, item.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/kontakt",
					className: "hidden shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 lg:inline-flex",
					children: ["Návrh zdarma", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					className: "liquid-nav grid h-11 w-11 shrink-0 place-items-center rounded-full lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg",
						children: open ? "×" : "≡"
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-6 pb-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "liquid-nav flex flex-col gap-1 rounded-3xl p-3",
				children: [nav.map((item) => {
					if (item.kind === "link") {
						const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: `rounded-2xl px-4 py-3 text-base font-medium transition-colors ${active ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-primary/5 hover:text-primary"}`,
							children: item.label
						}, item.label);
					}
					const expanded = mobileGroup === item.label;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-expanded": expanded,
							onClick: () => setMobileGroup(expanded ? null : item.label),
							className: `flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition-colors ${isGroupActive(item, pathname) || expanded ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-primary/5 hover:text-primary"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: `text-xs transition-transform ${expanded ? "rotate-180" : ""}`,
								children: "▾"
							})]
						}), expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 flex flex-col gap-1 pl-3",
							children: item.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								hash: c.hash,
								onClick: () => setOpen(false),
								className: "rounded-xl px-4 py-2.5 text-sm text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary",
								children: c.label
							}, c.label))
						})]
					}, item.label);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/kontakt",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground",
					children: "Návrh zdarma →"
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/40 bg-foreground text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr_1fr] md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl leading-[1.05] md:text-5xl",
					children: [
						"Pojďme si napsat.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-background/60",
							children: "Návrh dostanete zdarma."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/kontakt",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5",
					children: ["Začít projekt ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						children: "→"
					})]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-background/50",
							children: "Navigace"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-background/80",
							children: "Úvod"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sluzby",
							className: "hover:text-background/80",
							children: "Služby"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projekty",
							className: "hover:text-background/80",
							children: "Projekty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "reference",
							className: "hover:text-background/80",
							children: "Reference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cv",
							className: "hover:text-background/80",
							children: "CV"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pribeh",
							className: "hover:text-background/80",
							children: "Příběh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/dopisy-skafandr",
							className: "hover:text-background/80",
							children: "Dopisy z hlavy & Skafandr"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sponzori",
							className: "hover:text-background/80",
							children: "Sponzoři a dárci"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kontakt",
							className: "hover:text-background/80",
							children: "Kontakt"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/legal",
							className: "hover:text-background/80",
							children: "Legal"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.18em] text-background/50",
							children: "Najdete mě"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/in/janhotovec98/",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-background/80",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:janhotovec98@gmail.com",
							className: "hover:text-background/80",
							children: "janhotovec98@gmail.com"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-background/50",
							children: "Liberec · Česko"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-background/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-background/50 md:flex-row md:items-center md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Bc. Jan Hotovec. Všechna práva vyhrazena."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display tracking-wide",
					children: "JH98 · život ve skafandru"
				})]
			})
		})]
	});
}
//#endregion
export { SiteHeader as n, SiteFooter as t };
