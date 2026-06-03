import { createFileRoute } from "@tanstack/react-router";
import { Play, Calendar, Star, CheckCircle2, ShieldCheck, TrendingUp } from "lucide-react";

import ftmoHero from "@/assets/ftmo-10999.asset.json";
import wise from "@/assets/wise-3837.asset.json";
import fn1847 from "@/assets/fn-1847.asset.json";
import fn1465 from "@/assets/fn-1465.asset.json";
import fn669 from "@/assets/fn-669.asset.json";
import ftmo1314 from "@/assets/ftmo-1314.asset.json";
import fn3387 from "@/assets/fn-3387.asset.json";
import ftmo4026 from "@/assets/ftmo-4026.asset.json";
import ftmo5030 from "@/assets/ftmo-5030.asset.json";
import topstep from "@/assets/topstep-1452.asset.json";
import tff from "@/assets/tff-20000.asset.json";
import acNoah from "@/assets/ac-noah.asset.json";
import acQuinten from "@/assets/ac-quinten.asset.json";

const CALENDAR_URL = "https://calendly.com/theforexblueprint/strategiegesprek";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Forex Blueprint — Bouw een professioneel tradingproces" },
      { name: "description", content: "Stop met het breken van je eigen regels. Krijg de structuur, 1-op-1 accountability en mentale controle om consistente prop firm payouts te behalen." },
      { property: "og:title", content: "The Forex Blueprint — Consistente Prop Firm Payouts" },
      { property: "og:description", content: "Bouw een professioneel tradingproces met 1-op-1 accountability en bewezen systemen. Plan jouw gratis strategiegesprek." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Stars() {
  return (
    <div className="inline-flex items-center gap-0.5 rounded-sm bg-[#00b67a] px-1 py-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-white text-white" strokeWidth={0} />
      ))}
    </div>
  );
}

function ProofCard({
  src, alt, label,
}: { src: string; alt: string; label?: string }) {
  return (
    <figure className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(15,15,30,0.04)] transition hover:shadow-[0_10px_40px_-15px_rgba(80,40,200,0.25)]">
      <img src={src} alt={alt} loading="lazy" className="block w-full h-auto" />
      {label && (
        <figcaption className="absolute bottom-3 left-3 right-3 rounded-md bg-foreground/85 px-3 py-1.5 text-xs font-medium text-background backdrop-blur">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function ReviewCard({
  name, location, title, body, days,
}: { name: string; location: string; title: string; body: string; days: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,15,30,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{name}</div>
            <div className="text-xs text-muted-foreground">{location}</div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{days}</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Stars />
        <span className="text-xs font-medium text-muted-foreground">Trustpilot</span>
      </div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}

function CTAButton({ children = "Plan Jouw Strategiegesprek In" }: { children?: React.ReactNode }) {
  return (
    <a
      href={CALENDAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary hover:btn-primary-hover text-base sm:text-lg"
    >
      <Calendar className="h-5 w-5" />
      {children}
    </a>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* No nav by design — single-purpose landing */}
      <div className="mx-auto max-w-3xl px-5 pt-10 sm:pt-16 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          The Forex Blueprint — 1-op-1 Mentorship
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
          Stop met het breken van je <span className="text-primary">eigen regels</span>.
          <br className="hidden sm:block" />
          Bouw een professioneel tradingproces en behaal consistente payouts.
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-relaxed font-medium" style={{ color: "var(--accent-red)" }}>
          In een markt vol snelle beloftes, bouwen wij aan blijvende resultaten. Krijg de structuur,
          de 1-op-1 accountability en de mentale controle die je nu mist. Bekijk de video hieronder
          en zie hoe onze actieve communityleden de prop firm challenges eindelijk verslaan.
        </p>
      </div>

      {/* VSL */}
      <section className="mx-auto mt-10 max-w-3xl px-5">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-foreground shadow-[0_30px_80px_-30px_rgba(80,40,200,0.45)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1030] via-[#0f0820] to-[#000]" />
          <div className="absolute inset-0 grid place-items-center">
            <button
              aria-label="Speel video af"
              className="group grid h-20 w-20 place-items-center rounded-full bg-white/10 backdrop-blur transition hover:scale-105 hover:bg-white/20"
            >
              <Play className="h-9 w-9 translate-x-0.5 fill-white text-white" />
            </button>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
            <span className="rounded bg-black/40 px-2 py-1 backdrop-blur">TFB — Strategiegesprek Intro</span>
            <span className="rounded bg-black/40 px-2 py-1 backdrop-blur">HD</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <CTAButton />
          <p className="text-xs text-muted-foreground">100% gratis — geen verplichtingen. Beperkt aantal plekken per week.</p>
        </div>
      </section>

      {/* Wall of Proof */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            Wall of Proof
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Echte resultaten van <span className="text-primary">echte traders</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Geen cherry-picked screenshots. Verified prop firm payouts en eerlijke reviews van actieve community-leden.
          </p>
        </div>

        {/* Hero case row */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ProofCard src={ftmoHero.url} alt="FTMO overall reward $10.999,38" label="FTMO Overall Reward — $10.999,38" />
          </div>
          <div className="lg:col-span-2 flex flex-col rounded-xl border border-border bg-card p-6">
            <Stars />
            <h3 className="mt-3 text-lg font-semibold">"De strategie én de mentale aspecten."</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              "De strategie en de mentale aspecten die The Forex Blueprint je leert zijn top — zeker een aanrader."
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-[#00b67a]" />
              Geverifieerd via Trustpilot
            </div>
            <div className="mt-auto pt-6 text-xs font-medium text-muted-foreground">— Valerio R., FTMO funded trader</div>
          </div>
        </div>

        {/* Part-time + review */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-2 flex flex-col rounded-xl border border-border bg-card p-6 order-2 lg:order-1">
            <Stars />
            <h3 className="mt-3 text-lg font-semibold">Winstgevend naast een fulltime baan — in 6 maanden.</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              "Toen ik aansloot bij de community kwam de verandering. Duidelijke strategie en goed te combineren met werk —
              na 6 maanden part-time traden is het winstgevend geworden. Zeker een aanrader."
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-[#00b67a]" />
              Geverifieerde Wise transfer
            </div>
            <div className="mt-auto pt-6 text-xs font-medium text-muted-foreground">— Noah C., part-time trader</div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
            <ProofCard src={wise.url} alt="Wise transfer €3.837,94" label="Wise Transfer — €3.837,94 ontvangen" />
          </div>
        </div>

        {/* Prop firm gallery */}
        <div className="mt-16">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Consistente Prop Firm Payouts
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ProofCard src={fn1847.url} alt="FundedNext $1.847,51" label="FundedNext — $1.847,51" />
            <ProofCard src={fn1465.url} alt="FundedNext $1.465,35" label="FundedNext — $1.465,35" />
            <ProofCard src={fn669.url} alt="FundedNext $669,80" label="FundedNext — $669,80" />
            <ProofCard src={fn3387.url} alt="FundedNext $3.387,24" label="FundedNext — $3.387,24" />
            <ProofCard src={ftmo4026.url} alt="FTMO $4.026,39" label="FTMO — $4.026,39" />
            <ProofCard src={ftmo5030.url} alt="FTMO $5.030,61" label="FTMO — $5.030,61" />
            <ProofCard src={ftmo1314.url} alt="FTMO $1.314,92" label="FTMO — $1.314,92" />
            <ProofCard src={topstep.url} alt="Topstep $1.452" label="Topstep — $1.452" />
            <ProofCard src={tff.url} alt="TFF Master $20.000" label="True Forex Funds — $20.000 Master" />
            <ProofCard src={acNoah.url} alt="Alpha Capital Certificate" label="Alpha Capital — Phase 2 Passed" />
            <ProofCard src={acQuinten.url} alt="Alpha Capital $671" label="Alpha Capital — $671 Payout" />
            <div className="grid place-items-center rounded-xl border border-dashed border-border bg-muted/50 p-8 text-center">
              <div>
                <div className="text-3xl font-extrabold text-primary">+50</div>
                <div className="mt-1 text-sm font-medium">geverifieerde payouts</div>
                <div className="mt-1 text-xs text-muted-foreground">van actieve TFB community-leden</div>
              </div>
            </div>
          </div>
        </div>

        {/* No-nonsense reviews */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            No-Nonsense Reviews
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <ReviewCard
              name="Bart Scheltinga"
              location="NL · 2 reviews"
              days="28 apr 2026"
              title="Forex trading was een SCAM — tot ik Jordan ontmoette."
              body={`"Een nuchtere Hollandse kerel die écht wil dat je slaagt. Dit is geen 5min YouTube video die je ff nadoet. Trading is niet moeilijk, maar je moet je er wel doorheen bijten — op de juiste manier. Look no further. Mijn dank is groot."`}
            />
            <ReviewCard
              name="Matthijs"
              location="NL · 3 reviews"
              days="5 dagen geleden"
              title="Geen overcomplicated stuff — clean en duidelijk."
              body={`"Geen overcomplicated stuff of honderden indicators, maar gewoon een clean en duidelijke approach. De strategie is rustig, met focus op psychologie als gamechanger — perfect te combineren met een fulltime job. Na 6 maanden zijn de payouts er."`}
            />
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 rounded-3xl border border-border bg-gradient-to-br from-muted to-background p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Klaar om je tradingproces serieus te nemen?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Eén gesprek van 30 minuten. We bekijken samen waar je nu staat, waar je vastloopt, en welke stappen jou
            naar consistente prop firm payouts brengen.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CTAButton>Ja, plan mijn gratis gesprek</CTAButton>
            <p className="text-xs text-muted-foreground">Beperkt aantal plekken per week.</p>
          </div>
        </div>
      </section>

      <footer className="mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>Copyright © 2026 The Forex Blueprint</span>
          <div className="flex items-center gap-5">
            <a href="/terms" className="hover:text-foreground transition">Algemene Voorwaarden</a>
            <a href="/privacy" className="hover:text-foreground transition">Privacy Policy</a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-8 text-[10px] leading-relaxed text-muted-foreground/80">
          Disclaimer: Trading op de financiële markten brengt risico's met zich mee. Resultaten van community-leden zijn
          geen garantie voor toekomstige resultaten. The Forex Blueprint is geen financieel adviseur — wij bieden
          educatie en mentorship.
        </div>
      </footer>
    </main>
  );
}
