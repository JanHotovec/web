import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as SiteHeader, t as SiteFooter } from "./site-footer-DnQN7gNE.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { o as ArrowRight, s as ArrowLeft, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as TESTIMONIALS, i as REASONS, n as PORTRAIT_STORY, r as PROJECTS, t as PORTRAIT_MAIN } from "./site-data-CdZG7Bka.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-z5bkVXEZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reasons, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Story, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCTA, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "uvod",
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary" }), "Tvorba webů · SEO · osobní přístup"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: "Liberec · online spolupráce"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 font-display text-sm uppercase tracking-[0.22em] text-primary",
							children: "Studio Jana Hotovce"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-balance font-display text-[clamp(2.6rem,7vw,6.5rem)] font-medium leading-[0.95]",
							children: [
								"Návrh webu",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-primary",
									children: "zdarma"
								}),
								".",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Rozhodnete",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative inline-block",
									children: ["až", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										"aria-hidden": true,
										className: "absolute -bottom-2 left-0 w-full text-accent",
										viewBox: "0 0 100 8",
										preserveAspectRatio: "none",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M0,5 Q25,0 50,4 T100,3",
											fill: "none",
											stroke: "currentColor",
											strokeWidth: "2"
										})
									})]
								}),
								" ",
								"potom."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl",
							children: "Pomohu vám vytvořit web, který bude přehledný, funkční a bude důstojně reprezentovat vás i vaše podnikání – bez zbytečných složitostí."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/kontakt",
								className: "group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5",
								children: ["Chci nový web", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5",
									children: "→"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pribeh",
								className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary",
								children: "Poznejte mě"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-14 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 md:max-w-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "14+",
									l: "Projektů"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "17+",
									l: "Referencí"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									n: "2018",
									l: "Tvořím"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: PORTRAIT_MAIN,
								alt: "Jan Hotovec, webdesignér z Liberce",
								className: "h-full w-full object-cover",
								loading: "eager"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/10" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -left-4 bottom-10 max-w-[260px] rounded-2xl bg-foreground p-5 text-background shadow-[var(--shadow-lift)] md:-left-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-background/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), "K dispozici · Liberec"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base leading-snug",
								children: "Život ve skafandru mě naučil hledat cestu i tam, kde na první pohled není."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -top-4 right-4 grid h-20 w-20 place-items-center rounded-full bg-primary text-center font-display text-xs font-bold uppercase tracking-wider text-primary-foreground md:-top-6 md:right-8",
							children: [
								"JH",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"98"
							]
						})
					]
				})]
			})]
		})
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "font-display text-3xl font-medium md:text-4xl",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground",
		children: l
	})] });
}
function Marquee() {
	const items = [
		"Osobní portfolio",
		"Lokální byznys",
		"Finanční služby",
		"Wellness & krása",
		"Eventy",
		"Stavebnictví",
		"Sport & cestování",
		"Zdravotnictví",
		"Komunita"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"aria-hidden": true,
		className: "border-y border-border/60 bg-secondary/40 py-5 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex animate-[scroll_40s_linear_infinite] gap-12 whitespace-nowrap",
			children: [
				...items,
				...items,
				...items
			].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-12 font-display text-lg text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "✦"
				})]
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes scroll { to { transform: translateX(-33.333%); } }` })]
	});
}
function Reasons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sluzby",
		className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.22em] text-primary",
						children: "§ 02 — Proč web"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-display text-4xl leading-[1.05] md:text-6xl",
						children: "Pět důvodů, proč mít vlastní web v\xA0roce 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-muted-foreground",
						children: "Web je prostor, který máte pod kontrolou. Pomáhá vám být dohledatelní, budovat důvěru a ukázat lidem, kdo jste, co nabízíte a proč si vybrat právě vás."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "md:col-span-8 grid gap-4 sm:grid-cols-2",
				children: REASONS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xs uppercase tracking-[0.22em] text-primary",
							children: r.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl font-medium",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: r.body
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" })
					]
				}, r.n))
			})]
		})
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projekty",
		className: "border-t border-border/60 bg-secondary/30 py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.22em] text-primary",
							children: "§ 03 — Vybrané projekty"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl",
							children: "Projekty s přesahem a smyslem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-base font-medium text-foreground/80",
							children: "Weby, které vznikaly z pochopení, důvěry a společné práce."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl text-sm text-muted-foreground",
							children: "Najdete zde výběr projektů, na kterých jsem měl možnost se podílet – od osobních značek přes lokální podnikání až po firemní weby. Každý projekt pro mě představuje jinou zkušenost, jiný příběh a jiný způsob, jak propojit funkčnost, estetiku a potřeby klienta."
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 grid grid-cols-2 gap-4 rounded-2xl border border-border/70 bg-background/60 p-5 text-xs uppercase tracking-[0.14em] text-muted-foreground md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-2 font-display text-lg text-foreground",
							children: [PROJECTS.length, "+"]
						}), " realizovaných projektů"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mr-2 text-primary",
							children: "↗"
						}), " aktivní odkazy na weby"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "osobní značky · firmy · služby" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Wix · Wix Studio · SEO" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					opts: {
						align: "start",
						loop: true
					},
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
						className: "-ml-4",
						children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							className: "pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-[30%]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
								p,
								index: i + 1
							})
						}, p.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-end gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center justify-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projekty",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90",
						children: ["Zobrazit všechny projekty ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#reference",
						className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary",
						children: "Přečíst reference"
					})]
				})
			]
		})
	});
}
function ProjectCard({ p, index }) {
	const external = Boolean(p.url);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: `${p.title} — ${p.category}`,
					className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" }),
				p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground",
					children: "★ Featured"
				}),
				index !== void 0 && !p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute left-4 top-4 rounded-full bg-background/80 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-foreground/80 backdrop-blur",
					children: ["№ ", String(index).padStart(2, "0")]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-4 p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
						children: [
							p.category,
							" · ",
							p.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl leading-tight",
						children: p.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
						children: p.client
					})
				]
			}), external ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: p.url,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center justify-between gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground",
				children: ["Otevřít web ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					children: "↗"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center justify-between gap-2 rounded-full border border-dashed border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: "Připravujeme"
			})]
		})]
	});
}
function Story() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pribeh",
		className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: PORTRAIT_STORY,
						alt: "Jan Hotovec — osobní příběh",
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground",
					children: "Honza, 27 · Liberec · DMO od narození"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pl-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.22em] text-primary",
						children: "§ 04 — Příběh"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl leading-[1.05] md:text-6xl",
						children: [
							"Chtěl jsem mít prostor, kde se potká",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "příběh"
							}),
							" a tvorba."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Jmenuji se Honza a svůj první web jsem si vytvořil proto, abych mohl důstojně představit sám sebe i svůj příběh. Chtěl jsem mít vlastní prostor – místo, kde se potká osobní zkušenost, tvorba a chuť být vidět po svém." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Od narození žiji s dětskou mozkovou obrnou, které s nadsázkou říkám ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-foreground",
									children: "skafandr"
								}),
								". Ovlivňuje můj pohyb i komunikaci, ale nikdy mi nevzala chuť tvořit, učit se nové věci a hledat cestu dál."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-foreground",
								children: [
									"V roce 2018 vznikl dokument ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Dopisy z hlavy" }),
									", který zachytil část mé cesty i účast na Metrostav Handy Cyklo Maratonu – 2 222 km, 111 hodin a tým lidí, kteří věřili, že společně zvládneme víc, než by se zdálo."
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.janhotovec.com/dopisy-z-hlavy-skafandr",
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary",
							children: "♪ Soundtrack Skafandr"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pribeh",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: "Celý příběh →"
						})]
					})
				]
			})]
		})
	});
}
var TESTIMONIAL_META = [
	{
		category: "Webdesign",
		source: "Google"
	},
	{
		category: "Webdesign",
		source: "Google"
	},
	{
		category: "Webdesign",
		source: "Facebook"
	},
	{
		category: "Správa webu",
		source: "Google"
	},
	{
		category: "Webdesign",
		source: "Google"
	},
	{
		category: "Mentoring / spolupráce",
		source: "LinkedIn"
	},
	{
		category: "Správa webu",
		source: "LinkedIn"
	},
	{
		category: "Webdesign",
		source: "LinkedIn"
	},
	{
		category: "Audit webu",
		source: "Google"
	},
	{
		category: "Správa webu",
		source: "Google"
	},
	{
		category: "Audit webu",
		source: "Google"
	},
	{
		category: "Mentoring / spolupráce",
		source: "LinkedIn"
	},
	{
		category: "Mentoring / spolupráce",
		source: "Google"
	},
	{
		category: "Mentoring / spolupráce",
		source: "LinkedIn"
	},
	{
		category: "Mentoring / spolupráce",
		source: "LinkedIn"
	},
	{
		category: "Webdesign",
		source: "LinkedIn"
	}
];
var FILTERS = [
	"Vše",
	"Webdesign",
	"Audit webu",
	"Správa webu",
	"Mentoring / spolupráce"
];
function excerpt(text, max = 180) {
	if (text.length <= max) return text;
	const cut = text.slice(0, max);
	const lastSpace = cut.lastIndexOf(" ");
	return cut.slice(0, lastSpace > 120 ? lastSpace : max).trimEnd() + "…";
}
function Testimonials() {
	const [filter, setFilter] = (0, import_react.useState)("Vše");
	const items = (0, import_react.useMemo)(() => TESTIMONIALS.map((t, i) => ({
		...t,
		...TESTIMONIAL_META[i]
	})).filter((t) => filter === "Vše" || t.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reference",
		className: "border-y border-border/60 bg-foreground py-20 text-background md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-6 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.22em] text-accent",
							children: "§ 05 — Reference"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 max-w-2xl font-display text-4xl leading-[1.05] md:text-6xl",
							children: [
								"Co říkají",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-accent",
									children: "klienti o spolupráci"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-background/70",
							children: "Zkušenosti lidí a firem, se kterými jsem měl možnost spolupracovat na webových projektech, auditech i dlouhodobé správě webů."
						})
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 grid gap-4 rounded-2xl border border-background/10 bg-background/[0.04] p-5 sm:grid-cols-2 md:mb-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-accent",
							children: "16+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-background/60",
							children: "Referencí"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-accent",
							children: "13+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-background/60",
							children: "Projektů"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-accent",
							children: "3"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs uppercase tracking-[0.18em] text-background/60",
							children: "Zdroje hodnocení"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.linkedin.com/in/janhotovec98/",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10",
									children: "LinkedIn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.google.com/search?q=Jan+Hotovec+webdesign+Liberec",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10",
									children: "Google"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/janhotovec98.fb/reviews",
									target: "_blank",
									rel: "noreferrer",
									className: "rounded-full border border-background/20 px-3 py-1.5 transition-colors hover:bg-background/10",
									children: "Facebook"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-8 flex flex-wrap gap-2",
					children: FILTERS.map((f) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(f),
							className: `rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${filter === f ? "border-accent bg-accent text-accent-foreground" : "border-background/20 text-background/70 hover:bg-background/10"}`,
							children: f
						}, f);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					opts: {
						align: "start",
						loop: false
					},
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
						className: "-ml-4",
						children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							className: "pl-4 md:basis-1/2 lg:basis-1/3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { t })
						}, `${filter}-${i}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-[0.18em] text-background/50",
							children: [
								items.length,
								" ",
								items.length === 1 ? "reference" : "referencí"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "static translate-y-0 border-background/20 bg-background/5 text-background hover:bg-background/10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "static translate-y-0 border-background/20 bg-background/5 text-background hover:bg-background/10" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 rounded-2xl border border-background/10 bg-background/[0.04] p-8 md:p-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "font-display text-2xl md:text-3xl",
							children: [
								"Chcete se přidat mezi ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-accent",
									children: "spokojené klienty"
								}),
								"?"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm text-background/70",
							children: "Rád se podívám i na váš projekt a navrhnu, jak by mohl fungovat lépe — obsahově, vizuálně i technicky."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kontakt",
							className: "inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5",
							children: ["Domluvit spolupráci ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "→"
							})]
						})]
					})
				})
			]
		})
	});
}
function TestimonialCard({ t }) {
	const short = excerpt(t.quote, 180);
	const isTruncated = short !== t.quote;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "group relative flex h-full flex-col rounded-2xl border border-background/10 bg-background/[0.04] p-6 transition-colors hover:bg-background/[0.07]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-background/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-background/20 px-2 py-1",
					children: t.source
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.category })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-5xl leading-none text-accent",
				children: "\""
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mt-2 flex-1 text-pretty text-sm leading-relaxed text-background/90",
				children: short
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-5 border-t border-background/10 pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-base",
					children: t.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 text-[11px] uppercase tracking-[0.18em] text-background/60",
					children: [
						t.role,
						" · ",
						t.year
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-3 text-xs",
				children: [isTruncated && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-full border border-background/20 px-3 py-1.5 text-background/80 transition-colors hover:bg-background/10",
						children: "Číst celou referenci"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-2xl",
							children: t.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							t.role,
							" · ",
							t.year,
							" · ",
							t.source
						] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 max-h-[60vh] overflow-y-auto pr-2 text-sm leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-4xl leading-none text-primary",
								children: "\""
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 whitespace-pre-line",
								children: t.quote
							})]
						}),
						t.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: t.url,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 inline-flex items-center gap-2 text-sm text-primary hover:underline",
							children: "Otevřít projekt ↗"
						})
					]
				})] }), t.url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: t.url,
					target: "_blank",
					rel: "noreferrer",
					className: "text-background/70 transition-colors hover:text-accent",
					children: "Odkaz na projekt ↗"
				})]
			})
		]
	});
}
function FinalCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontakt",
		className: "mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[2.5rem] border border-border bg-secondary/40 p-10 md:p-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-[0.22em] text-primary",
						children: "§ 06 — Začněme spolupráci"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-4xl leading-[0.95] md:text-7xl",
						children: [
							"Udělám vám",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "návrh zdarma"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg text-muted-foreground",
						children: "Napište mi pár vět o vašem nápadu. Do pár dní vám pošlu konkrétní návrh — a teprve pak se rozhodnete."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/kontakt",
						className: "group flex items-center justify-between gap-4 rounded-2xl bg-foreground p-6 text-background transition-transform hover:-translate-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.22em] text-background/60",
							children: "Nejrychlejší cesta"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-2xl",
							children: "Vyplnit zadání →"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-12 w-12 place-items-center rounded-full bg-primary text-xl text-primary-foreground transition-transform group-hover:rotate-12",
							children: "✦"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "mailto:janhotovec98@gmail.com",
						className: "flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.22em] text-muted-foreground",
							children: "Nebo e-mail"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-display text-xl",
							children: "janhotovec98@gmail.com"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xl",
							children: "↗"
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl" })]
		})
	});
}
//#endregion
export { Index as component };
