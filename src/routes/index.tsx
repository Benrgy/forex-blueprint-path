import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, Calendar, Star, CheckCircle2, TrendingUp, Pause } from "lucide-react";

import { Countdown } from "@/components/Countdown";
import vsl from "@/assets/tfb-vsl.mp4.asset.json";
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

const CALENDAR_URL =
  "https://calendly.com/theforexblueprint/60min?utm_source=ig&utm_medium=social&utm_content=link_in_bio&utm_id=97760_v0_s00_e0_tv3";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Forex Blueprint — Plan Jouw Gratis Strategiegesprek" },
      { name: "description", content: "Bouw een professioneel tradingproces met 1-op-1 mentorship. Plan vandaag nog je gratis strategiegesprek." },
      { property: "og:title", content: "The Forex Blueprint — Consistente Prop Firm Payouts" },
      { property: "og:description", content: "1-op-1 accountability en bewezen systemen voor consistente payouts. Plan jouw gratis strategiegesprek." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Stars({ size = "sm" }: { size?: "sm" | "md" }) {
  return (
    <div className={`inline-flex items-center gap-0.5 rounded-sm bg-[#00b67a] ${size === "md" ? "px-1.5 py-1" : "px-1 py-0.5"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={size === "md" ? "h-3.5 w-3.5 fill-white text-white" : "h-3 w-3 fill-white text-white"} strokeWidth={0} />
      ))}
    </div>
  );
}

function CTAButton({ children = "Plan Jouw Strategiegesprek In", href = "#calendar" }: { children?: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="btn-primary hover:btn-primary-hover text-base sm:text-lg">
      <Calendar className="h-5 w-5" />
      {children}
    </a>
  );
}

function VSLPlayer() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = async () => {
    if (!ref.current) return;
    if (ref.current.paused) {
      await ref.current.play();
      setPlaying(true);
    } else {
      ref.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-[0_30px_80px_-30px_rgba(80,40,200,0.45)]">
      <video
        ref={ref}
        src={vsl.url}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        muted={muted}
        preload="metadata"
        onClick={toggle}
        onEnded={() => setPlaying(false)}
      />
      {!playing && (
        <button
          aria-label="Speel video af"
          onClick={toggle}
          className="absolute inset-0 grid place-items-center bg-black/30 transition hover:bg-black/40"
        >
          <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl transition group-hover:scale-105">
            <Play className="h-9 w-9 translate-x-0.5 fill-foreground text-foreground" />
          </span>
        </button>
      )}
      {playing && (
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
          <button onClick={toggle} className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-black/80">
            <Pause className="inline h-3.5 w-3.5 mr-1" /> Pauze
          </button>
          <button
            onClick={() => setMuted((m) => !m)}
            className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur hover:bg-black/80"
          >
            {muted ? "🔇 Geluid aan" : "🔊 Geluid uit"}
          </button>
        </div>
      )}
    </div>
  );
}

type Review = { name: string; meta: string; date: string; title: string; body: string };

const REVIEWS: Review[] = [
  {
    name: "Bart Scheltinga",
    meta: "NL · 2 reviews",
    date: "28 apr 2026",
    title: "Forex trading was een SCAM — tot ik Jordan ontmoette.",
    body: "Een nuchtere Hollandse kerel die écht wil dat je slaagt. Dit is geen 5min YouTube video die je ff nadoet. Trading is niet moeilijk, maar je moet je er wel doorheen bijten — op de juiste manier. Look no further. Mijn dank is groot.",
  },
  {
    name: "Matthijs",
    meta: "NL · 3 reviews",
    date: "5 dagen geleden",
    title: "Geen overcomplicated stuff — clean en duidelijk.",
    body: "Geen overcomplicated stuff of honderden indicators, maar gewoon een clean en duidelijke approach. De strategie is rustig, met focus op psychologie als gamechanger — perfect te combineren met een fulltime job. Na 6 maanden zijn de payouts er.",
  },
  {
    name: "Valerio R.",
    meta: "NL · 1 review",
    date: "12 mrt 2026",
    title: "De strategie én de mentale aspecten.",
    body: "De strategie en de mentale aspecten die The Forex Blueprint je leert zijn top — zeker een aanrader voor iedereen die serieus wil traden.",
  },
  {
    name: "Noah C.",
    meta: "NL · 1 review",
    date: "1 feb 2026",
    title: "Winstgevend naast een fulltime baan.",
    body: "Toen ik aansloot bij de community kwam de verandering. Duidelijke strategie en goed te combineren met werk — na 6 maanden part-time traden is het winstgevend geworden.",
  },
  {
    name: "Quinten D.",
    meta: "BE · 2 reviews",
    date: "20 jan 2026",
    title: "Eindelijk gefund.",
    body: "Na maanden falen op challenges heb ik dankzij The Forex Blueprint de juiste structuur gevonden. Eerste payout is binnen en de mindset staat eindelijk goed.",
  },
  {
    name: "Sander V.",
    meta: "NL · 1 review",
    date: "8 dec 2025",
    title: "1-op-1 accountability maakt het verschil.",
    body: "Het verschil zit in de wekelijkse check-ins. Je kunt niet meer wegduiken voor je eigen regels. Dat is precies wat ik nodig had.",
  },
];

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,15,30,0.04)]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
            {r.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">{r.name}</div>
            <div className="text-xs text-muted-foreground">{r.meta}</div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{r.date}</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Stars />
        <span className="text-xs font-medium text-muted-foreground">Trustpilot</span>
      </div>
      <h3 className="mt-3 text-base font-semibold">{r.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <CheckCircle2 className="h-3.5 w-3.5 text-[#00b67a]" /> Geverifieerd
      </div>
    </article>
  );
}

const PROOFS: { src: string; alt: string; label: string }[] = [
  { src: ftmoHero.url, alt: "FTMO $10.999", label: "FTMO — $10.999,38" },
  { src: wise.url, alt: "Wise €3.837", label: "Wise — €3.837,94" },
  { src: fn1847.url, alt: "FundedNext $1.847", label: "FundedNext — $1.847,51" },
  { src: fn1465.url, alt: "FundedNext $1.465", label: "FundedNext — $1.465,35" },
  { src: fn669.url, alt: "FundedNext $669", label: "FundedNext — $669,80" },
  { src: fn3387.url, alt: "FundedNext $3.387", label: "FundedNext — $3.387,24" },
  { src: ftmo4026.url, alt: "FTMO $4.026", label: "FTMO — $4.026,39" },
  { src: ftmo5030.url, alt: "FTMO $5.030", label: "FTMO — $5.030,61" },
  { src: ftmo1314.url, alt: "FTMO $1.314", label: "FTMO — $1.314,92" },
  { src: topstep.url, alt: "Topstep $1.452", label: "Topstep — $1.452" },
  { src: tff.url, alt: "TFF $20.000", label: "True Forex Funds — $20.000" },
  { src: acNoah.url, alt: "Alpha Capital", label: "Alpha Capital — Phase 2" },
  { src: acQuinten.url, alt: "Alpha Capital $671", label: "Alpha Capital — $671" },
];

function Landing() {
  // Load Calendly inline embed script (idempotent + re-init on mount)
  useEffect(() => {
    const init = () => {
      // @ts-expect-error - Calendly global injected by external script
      if (window.Calendly && typeof window.Calendly.initInlineWidget === "function") {
        document.querySelectorAll<HTMLElement>(".calendly-inline-widget").forEach((el) => {
          if (el.dataset.processed === "true") return;
          const url = el.getAttribute("data-url");
          if (!url) return;
          // @ts-expect-error - Calendly global
          window.Calendly.initInlineWidget({ url, parentElement: el });
          el.dataset.processed = "true";
        });
      }
    };
    const existing = document.querySelector<HTMLScriptElement>("script[data-calendly]");
    if (existing) {
      init();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.dataset.calendly = "1";
    s.onload = init;
    document.body.appendChild(s);
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 pt-12 sm:pt-16">
        {/* Countdown at top — advenz style */}
        <Countdown />

        {/* Purple pill badge */}
        <div className="mt-10 flex justify-center">
          <span className="inline-block rounded-md bg-primary px-4 py-1.5 text-[11px] sm:text-xs font-bold italic uppercase tracking-wide text-primary-foreground">
            Dit Systeem Werkt Alleen Voor Serieuze Traders
          </span>
        </div>

        {/* Massive headline with selective purple highlights */}
        <h1 className="mt-8 text-center text-[28px] sm:text-4xl md:text-[44px] lg:text-5xl font-extrabold leading-[1.12] tracking-tight max-w-5xl mx-auto">
          "Kopieer &amp; Plak Mijn <span className="text-primary">Bewezen Blueprint</span> Om Te <span className="text-primary">Slagen</span> Voor Je Prop Firm Challenge En <span className="text-primary">Consistente Payouts</span> Te Behalen"
        </h1>

        <p className="mt-7 text-center text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Bekijk de video hieronder, want het beste komt nog…
          <br />
          Als jij niet slaagt voor je challenge, dan trainen we je gratis verder tot je wél slaagt.
        </p>
      </div>

      {/* VSL */}
      <section className="mx-auto mt-10 max-w-3xl px-5">
        <VSLPlayer />

        <div className="mt-10 flex flex-col items-center gap-3">
          <CTAButton />
          <p className="text-xs text-muted-foreground">100% gratis — geen verplichtingen.</p>
        </div>
      </section>

      {/* Wall of Proof */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5 text-primary" /> Wall of Proof
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Echte resultaten van <span className="text-primary">echte traders</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Geverifieerde prop firm payouts van actieve TFB community-leden.
          </p>
        </div>

        <div className="mt-12 grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {PROOFS.map((p) => (
            <figure
              key={p.label}
              className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-[0_1px_2px_rgba(15,15,30,0.04)] transition hover:shadow-[0_10px_40px_-15px_rgba(80,40,200,0.25)]"
            >
              <img src={p.src} alt={p.alt} loading="lazy" className="block w-full h-auto" />
              <figcaption className="absolute bottom-2 left-2 right-2 rounded-md bg-foreground/85 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-background backdrop-blur">
                {p.label}
              </figcaption>
            </figure>
          ))}
          <div className="grid place-items-center rounded-xl border border-dashed border-border bg-muted/50 p-6 text-center">
            <div>
              <div className="text-3xl font-extrabold text-primary">+50</div>
              <div className="mt-1 text-xs font-medium">geverifieerde payouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-[#00b67a] text-[#00b67a]" /> Trustpilot Reviews
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            No-nonsense reviews van <span className="text-primary">echte leden</span>.
          </h2>
          <div className="mt-4 inline-flex items-center gap-3">
            <Stars size="md" />
            <span className="text-sm font-semibold">4,9 / 5</span>
            <span className="text-xs text-muted-foreground">op basis van {REVIEWS.length}+ reviews</span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <ReviewCard key={r.name} r={r} />
          ))}
        </div>
      </section>

      {/* Calendar embed */}
      <section id="calendar" className="mx-auto mt-24 max-w-5xl px-5 scroll-mt-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Calendar className="h-3.5 w-3.5" /> Plan jouw gratis 1-op-1 gesprek
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Kies een moment dat <span className="text-primary">jou uitkomt</span>.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            30–60 minuten. We analyseren je huidige situatie en bouwen samen een concreet plan naar consistente payouts.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_60px_-25px_rgba(80,40,200,0.35)]">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDAR_URL}&hide_gdpr_banner=1&primary_color=7c3aed`}
            style={{ minWidth: "320px", height: "780px" }}
          />
        </div>

        <div className="mt-6 text-center">
          <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
            Of open de kalender in een nieuw tabblad →
          </a>
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
          Disclaimer: Trading op de financiële markten brengt risico's met zich mee. Resultaten van community-leden
          zijn geen garantie voor toekomstige resultaten. The Forex Blueprint is geen financieel adviseur — wij
          bieden educatie en mentorship.
        </div>
      </footer>
    </main>
  );
}
