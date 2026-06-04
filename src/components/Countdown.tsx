import { useEffect, useState } from "react";

function getDeadline() {
  if (typeof window === "undefined") return Date.now() + 6 * 24 * 3600 * 1000;
  const key = "tfb_deadline";
  const stored = localStorage.getItem(key);
  if (stored) {
    const t = parseInt(stored, 10);
    if (t > Date.now()) return t;
  }
  // 6 day rolling deadline like advenz.nl style
  const t = Date.now() + 6 * 24 * 3600 * 1000;
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

  const diff = Math.max(0, (deadline ?? Date.now() + 6 * 24 * 3600 * 1000) - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const Cell = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold tabular-nums leading-none text-foreground">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-2 text-xs sm:text-sm text-muted-foreground">{label}</span>
    </div>
  );

  const Sep = () => (
    <div className="h-12 sm:h-14 md:h-16 w-px bg-border self-start mt-1" />
  );

  return (
    <div className="flex items-stretch justify-center">
      <Cell value={d} label="Days" />
      <Sep />
      <Cell value={h} label="Hours" />
      <Sep />
      <Cell value={m} label="Minutes" />
      <Sep />
      <Cell value={s} label="Seconds" />
    </div>
  );
}
