"use client";

import { useState, useSyncExternalStore } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

const STAY_OPTIONS = [
  "Help me choose a stay",
  "Amaltas Villa",
  "Destinn Dhela Retreat",
  "A tour across Uttarakhand",
  "A group, event or wedding",
] as const;

// Links like /plan-a-trip#amaltas arrive with the right option already chosen.
const HASH_TO_STAY: Record<string, (typeof STAY_OPTIONS)[number]> = {
  "#amaltas": "Amaltas Villa",
  "#destinn": "Destinn Dhela Retreat",
  "#tour": "A tour across Uttarakhand",
  "#group": "A group, event or wedding",
  "#safari": "Help me choose a stay",
};

const HELP_OPTIONS = [
  { id: "c-safari", value: "Jungle safari", label: "Jungle safari" },
  { id: "c-birds", value: "Birdwatching", label: "Birdwatching" },
  { id: "c-photo", value: "Wildlife photography", label: "Photography" },
  { id: "c-sight", value: "Local sightseeing", label: "Sightseeing" },
  { id: "c-cab", value: "Transport", label: "Transport" },
];

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function todayISO() {
  const t = new Date();
  t.setMinutes(t.getMinutes() - t.getTimezoneOffset());
  return t.toISOString().slice(0, 10);
}

function formatDate(value: string) {
  if (!value) return "Flexible";
  const d = new Date(`${value}T00:00:00`);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

function toCount(value: string, fallback: number) {
  const n = Number.parseInt(value, 10);
  return Number.isNaN(n) ? fallback : n;
}

const fieldLabel = "text-label font-semibold tracking-[0.12em] text-sand-soft uppercase";
const fieldInput =
  "w-full min-w-0 rounded-card border border-sand-line bg-forest-deep px-[13px] pt-3 pb-2.5 text-base leading-[1.4] text-sand placeholder:text-sand-soft/70 focus:border-transparent focus:outline-2 focus:outline-marigold";

export function TripPlanner() {
  const hash = useSyncExternalStore(
    subscribeHash,
    () => window.location.hash,
    () => "",
  );
  const minDate = useSyncExternalStore(
    () => () => {},
    todayISO,
    () => undefined,
  );

  const [name, setName] = useState("");
  const [stayChoice, setStayChoice] = useState<string | null>(null);
  const [date, setDate] = useState("");
  const [nights, setNights] = useState("2");
  const [adults, setAdults] = useState("2");
  const [kids, setKids] = useState("0");
  const [help, setHelp] = useState<string[]>(["Jungle safari"]);
  const [notes, setNotes] = useState("");

  const stay = stayChoice ?? HASH_TO_STAY[hash] ?? STAY_OPTIONS[0];
  const adultCount = toCount(adults, 2);
  const kidCount = toCount(kids, 0);

  const lines = [
    `Hello Jungle Diaries${name.trim() ? `, this is ${name.trim()}` : ""}.`,
    "I'd like to plan a trip.",
    "",
    `Interested in: ${stay}`,
    `Arrival: ${formatDate(date)}`,
    `Nights: ${toCount(nights, 2)}`,
    `Guests: ${adultCount} ${adultCount === 1 ? "adult" : "adults"}${
      kidCount ? `, ${kidCount} ${kidCount === 1 ? "child" : "children"}` : ""
    }`,
    `Help with: ${help.length ? help.join(", ") : "Just the stay"}`,
  ];
  if (notes.trim()) lines.push(`Notes: ${notes.trim()}`);
  const message = lines.join("\n");

  const toggleHelp = (value: string, checked: boolean) =>
    setHelp((prev) => (checked ? [...prev, value] : prev.filter((v) => v !== value)));

  return (
    <form className="grid grid-cols-1 gap-x-[18px] gap-y-4 sm:grid-cols-2" noValidate onSubmit={(e) => e.preventDefault()}>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-name" className={fieldLabel}>Your name</label>
        <input id="f-name" type="text" autoComplete="name" placeholder="e.g. Ananya Rao" value={name} onChange={(e) => setName(e.target.value)} className={fieldInput} />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-stay" className={fieldLabel}>Interested in</label>
        <select id="f-stay" value={stay} onChange={(e) => setStayChoice(e.target.value)} className={fieldInput}>
          {STAY_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-date" className={fieldLabel}>Arrival date</label>
        <input id="f-date" type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className={fieldInput} />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-nights" className={fieldLabel}>Nights</label>
        <input id="f-nights" type="number" min={1} max={30} inputMode="numeric" value={nights} onChange={(e) => setNights(e.target.value)} className={fieldInput} />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-adults" className={fieldLabel}>Adults</label>
        <input id="f-adults" type="number" min={1} max={60} inputMode="numeric" value={adults} onChange={(e) => setAdults(e.target.value)} className={fieldInput} />
      </div>
      <div className="flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-kids" className={fieldLabel}>Children</label>
        <input id="f-kids" type="number" min={0} max={40} inputMode="numeric" value={kids} onChange={(e) => setKids(e.target.value)} className={fieldInput} />
      </div>

      <fieldset className="col-span-full m-0 flex min-w-0 flex-col gap-1.5 border-0 p-0">
        <legend className={`${fieldLabel} mb-1.5`}>I&apos;d like help with</legend>
        <div className="flex flex-wrap gap-2">
          {HELP_OPTIONS.map((o) => (
            <label
              key={o.id}
              htmlFor={o.id}
              className="inline-flex cursor-pointer items-center gap-[7px] rounded-full border border-sand-line px-3 pt-[7px] pb-1.5 text-[0.92rem] font-medium text-sand has-checked:border-marigold has-checked:bg-marigold/15"
            >
              <input
                id={o.id}
                type="checkbox"
                value={o.value}
                checked={help.includes(o.value)}
                onChange={(e) => toggleHelp(o.value, e.target.checked)}
                className="m-0 accent-marigold"
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="col-span-full flex min-w-0 flex-col gap-1.5">
        <label htmlFor="f-notes" className={fieldLabel}>Anything else</label>
        <textarea id="f-notes" rows={3} placeholder="Celebrations, food preferences, travelling from Delhi…" value={notes} onChange={(e) => setNotes(e.target.value)} className={`${fieldInput} min-h-[84px] resize-y`} />
      </div>

      <div className="col-span-full rounded-card border border-dashed border-sand-line bg-forest-deep px-[18px] py-4" aria-live="polite">
        <div className="mb-2 text-label font-semibold tracking-[0.12em] text-sand-soft uppercase">Your message</div>
        <pre className="m-0 font-sans text-[0.95rem] leading-normal wrap-anywhere whitespace-pre-wrap text-sand">{message}</pre>
      </div>

      <div className="col-span-full flex flex-wrap items-center gap-x-5 gap-y-3">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-full bg-gold px-[22px] pt-[15px] pb-[13px] leading-none font-semibold tracking-[0.02em] text-gold-ink no-underline transition-transform hover:-translate-y-px"
        >
          <WhatsAppIcon />
          Continue on WhatsApp
        </a>
        <small className="text-[0.88rem] text-sand-soft">
          Opens WhatsApp with this message ready. Nothing is sent until you press send there.
        </small>
      </div>
    </form>
  );
}
