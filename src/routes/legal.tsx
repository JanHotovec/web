import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Právní informace — Jan Hotovec" },
      {
        name: "description",
        content:
          "Zásady ochrany osobních údajů, cookies a podmínky používání webu janhotovec.com.",
      },
      { property: "og:title", content: "Právní informace — Jan Hotovec" },
    ],
  }),
  component: Legal,
});

function Legal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[900px] px-6 py-20 md:px-10 md:py-28">
        <span className="text-xs uppercase tracking-[0.22em] text-primary">§ — Legal</span>
        <h1 className="mt-6 font-display text-5xl leading-[0.98] md:text-7xl">
          Právní <span className="italic text-primary">informace</span>.
        </h1>
        <p className="mt-6 text-sm text-muted-foreground">Tato stránka je informativní a slouží jako přehled. V případě konkrétních dotazů mě prosím kontaktujte.</p>

        <Section title="Provozovatel">
          <p>
            Bc. Jan Hotovec<br />
            IČO: na vyžádání<br />
            Liberec, Česká republika<br />
            E-mail: <a href="mailto:janhotovec98@gmail.com" className="underline hover:text-primary">janhotovec98@gmail.com</a>
          </p>
        </Section>

        <Section title="Zásady ochrany osobních údajů">
          <p>
            Vaše osobní údaje zpracovávám výhradně pro účely vyřízení vaší poptávky a komunikace s vámi. Údaje (jméno, e-mail, popis projektu) neposkytuji třetím stranám a uchovávám je pouze po dobu nezbytně nutnou.
          </p>
          <p>
            Máte právo požádat o výpis, opravu nebo smazání svých údajů — stačí napsat e-mail.
          </p>
        </Section>

        <Section title="Cookies">
          <p>
            Web v současné podobě používá pouze technicky nezbytné cookies (např. pro vykreslení stránky a preferenci tématu). Žádné marketingové ani trackovací cookies bez vašeho souhlasu.
          </p>
        </Section>

        <Section title="Autorská práva">
          <p>
            Texty, fotografie a grafika na tomto webu jsou autorským dílem Jana Hotovce nebo jsou užity se souhlasem klientů. Použití bez souhlasu není dovoleno.
          </p>
          <p>
            Loga, snímky a názvy klientů jsou majetkem příslušných vlastníků a jsou zde uvedeny pouze pro účely referencí.
          </p>
        </Section>

        <Section title="Podmínky spolupráce">
          <p>
            Spolupráce začíná nezávazným hovorem a návrhem zdarma. Konkrétní podmínky, cena a harmonogram jsou součástí smlouvy nebo objednávky uzavřené před zahájením prací.
          </p>
        </Section>

        <div className="mt-16">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">← Zpět na úvod</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}