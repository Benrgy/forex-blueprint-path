import { useEffect, useState } from "react";

function getDeadline() {
  if (typeof window === "undefined") return Date.now() + 24 * 3600 * 1000;
  const key = "tfb_deadline";
  const stored = localStorage.getItem(key);
  if (stored) {
    const t = parseInt(stored, 10);
    if (t > Date.now()) return t;
  }
  const t = Date.now() + 24 * 3600 * 1000;
  localStorage.setItem(key, String(t));
  return t;
}

export function Countdown() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    setDeadline(getDeadline());
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);

  const diff = Math.max(0, (deadline ?? Date.now() + 24 * 3600 * 1000) - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="grid place-items-center min-w-[68px] sm:min-w-[88px] rounded-xl bg-foreground text-background px-3 py-3 sm:py-4 text-3xl sm:text-5xl font-extrabold tabular-nums shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex items-end justify-center gap-3 sm:gap-5">
      <Cell value={h} label="Uren" />
      <div className="pb-7 text-3xl sm:text-5xl font-extrabold text-foreground/40">:</div>
      <Cell value={m} label="Minuten" />
      <div className="pb-7 text-3xl sm:text-5xl font-extrabold text-foreground/40">:</div>
      <Cell value={s} label="Seconden" />
    </div>
  );
}
