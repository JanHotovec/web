import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Jan Hotovec | Návrh webu zdarma" },
      {
        name: "description",
        content:
          "Napište mi pár vět o vašem nápadu. Do několika dní vám pošlu konkrétní návrh — a teprve potom se rozhodnete.",
      },
      { property: "og:title", content: "Kontakt — Jan Hotovec" },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[1200px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.22em] text-primary">Kontakt</span>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              Začněme.<br />
              <span className="italic text-primary">Návrh dostanete zdarma.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Stačí pár vět. Ozvu se zpravidla do 24 hodin a domluvíme krátký hovor.
            </p>

            <dl className="mt-12 space-y-6 border-t border-border/60 pt-8">
              <Row label="E-mail" value="janhotovec98@gmail.com" href="mailto:janhotovec98@gmail.com" />
              <Row label="LinkedIn" value="janhotovec98" href="https://www.linkedin.com/in/janhotovec98/" />
              <Row label="Lokalita" value="Liberec, Česko" />
              <Row label="K dispozici" value="Nové projekty 2026" />
            </dl>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Nový projekt — ${data.get("name")}`);
                const body = encodeURIComponent(
                  `Jméno: ${data.get("name")}\nE-mail: ${data.get("email")}\nFirma: ${data.get("company")}\n\nO projektu:\n${data.get("message")}`,
                );
                window.location.href = `mailto:janhotovec98@gmail.com?subject=${subject}&body=${body}`;
                setSent(true);
              }}
              className="rounded-[2rem] border border-border bg-card p-8 md:p-10 space-y-6"
            >
              <Field label="Jak vám můžu říkat?" name="name" placeholder="Jan Novák" required />
              <Field label="E-mail" name="email" type="email" placeholder="jan@firma.cz" required />
              <Field label="Firma / projekt (volitelné)" name="company" placeholder="Vaše firma" />
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">O čem to bude?</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Pár vět o vašem nápadu, byznysu nebo cíli…"
                  className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="group w-full rounded-full bg-foreground px-7 py-5 text-base font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Odeslat poptávku <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              {sent && (
                <p className="text-center text-sm text-primary">
                  Otevírám váš e-mailový klient… Pokud se nic neděje, napište mi na janhotovec98@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>

        <Link to="/" className="mt-16 inline-flex text-sm text-muted-foreground hover:text-foreground">
          ← Zpět na úvod
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function Row({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border/40 pb-5">
      <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</dt>
      {href ? (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="font-display text-lg hover:text-primary">
          {value}
        </a>
      ) : (
        <dd className="font-display text-lg">{value}</dd>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-full border border-border bg-background px-5 py-4 text-base outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}