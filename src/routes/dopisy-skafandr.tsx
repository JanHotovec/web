import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/dopisy-skafandr")({
  head: () => ({
    meta: [
      { title: "Dopisy z hlavy & Skafandr — Jan Hotovec" },
      {
        name: "description",
        content:
          "Osobní texty, úvahy a soundtrack Skafandr. Život s DMO viděný zevnitř — bez příkras, ale s humorem a nadějí.",
      },
      { property: "og:title", content: "Dopisy z hlavy & Skafandr" },
    ],
  }),
  component: DopisySkafandr,
});

function DopisySkafandr() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-[1100px] px-6 pt-20 pb-12 md:px-10 md:pt-28">
          <span className="text-xs uppercase tracking-[0.22em] text-primary">§ — Osobní</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-7xl">
            Dopisy z hlavy &amp; <span className="italic text-primary">Skafandr</span>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Místo, kde si dovoluji myslet nahlas. O životě v těle, které neposlouchá. O webech, lidech, sportu a o tom, jak vypadá svět zevnitř skafandru.
          </p>
        </section>

        <section className="mx-auto max-w-[1100px] px-6 pb-20 md:px-10 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-border bg-card p-8 md:p-10">
              <span className="text-xs uppercase tracking-[0.22em] text-primary">Manifest</span>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Život ve skafandru</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Skafandr není diagnóza. Je to způsob, jakým žiju. Tělo mě brzdí — ruce se třesou, nohy nejdou, řeč se loudá. Hlava ale běží naplno.
                </p>
                <p>
                  Naučil jsem se v tom žít. A naučil jsem se, že omezení je hlavně v hlavě toho druhého. Kdo se na mě podívá a vidí postiženého kluka na vozíku, prohrál ještě dřív, než jsme začali.
                </p>
                <p>
                  Tahle stránka je dopis sám sobě. A taky vám — kdo to čte. Že to jde. Že je v pořádku být jiný. Že práce, kterou děláte poctivě, mluví hlasitěji než jakékoli postižení.
                </p>
              </div>
            </article>

            <article className="rounded-[1.5rem] border border-border bg-foreground p-8 text-background md:p-10">
              <span className="text-xs uppercase tracking-[0.22em] text-accent">Soundtrack</span>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">Skafandr — píseň</h2>
              <p className="mt-5 text-base leading-relaxed text-background/80">
                Skladba, která vznikla pro film o cestě napříč Českem. 2 222 km, 111 hodin a sedm lidí v týmu. Pusťte si ji — řekne víc než tisíc slov.
              </p>
              <a
                href="https://www.janhotovec.com/dopisy-z-hlavy-skafandr"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5 transition-transform"
              >
                ♪ Poslechnout Skafandr ↗
              </a>
            </article>

            <article className="rounded-[1.5rem] border border-border bg-secondary/40 p-8 md:col-span-2 md:p-10">
              <span className="text-xs uppercase tracking-[0.22em] text-primary">Dopis č. 01</span>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Proč jsem si postavil web sám.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Když jsem chtěl vstoupit do světa profesionálně, nikdo mě neznal. Nemohl jsem si dovolit drahého konzultanta, ani agenturu. Tak jsem si sednul k počítači a začal.
                </p>
                <p>
                  Trvalo to dlouho. Byly chvíle, kdy jsem chtěl všechno smazat. Ale dnes díky tomu vím, co a proč funguje — a můžu to stavět i pro vás. Bez šablon, bez balastu. Jen práce a respekt k vašemu času.
                </p>
              </div>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 transition-transform"
              >
                Napsat Honzovi →
              </Link>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}