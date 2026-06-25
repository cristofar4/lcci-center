"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CalendarDays,
  Users,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { VENUES, EVENTS, SERVICES } from "@/lib/data";
import { SITE } from "@/lib/site";
import { cn, EASE, formatNumber } from "@/lib/utils";

const STEPS = ["Venue", "Date", "Capacity", "Requirements", "Details", "Confirm"];
const LAYOUTS = ["Theatre", "Banquet", "Exhibition", "Classroom", "Reception"];
const DURATIONS = ["Half day", "Full day", "Two days", "Three days or more"];

type State = {
  venue: string;
  date: string;
  duration: string;
  guests: number;
  layout: string;
  eventType: string;
  services: string[];
  name: string;
  company: string;
  email: string;
  phone: string;
  notes: string;
};

const initial: State = {
  venue: "",
  date: "",
  duration: "Full day",
  guests: 500,
  layout: "Theatre",
  eventType: "",
  services: [],
  name: "",
  company: "",
  email: "",
  phone: "",
  notes: "",
};

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [data, setData] = useState<State>(initial);
  const [done, setDone] = useState(false);

  const set = <K extends keyof State>(k: K, v: State[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const venue = useMemo(
    () => VENUES.find((v) => v.slug === data.venue),
    [data.venue],
  );

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const valid = [
    !!data.venue,
    !!data.date,
    data.guests > 0,
    !!data.eventType,
    data.name.trim().length > 1 && emailValid,
    true,
  ];

  const next = () => {
    if (!valid[step]) return;
    setDir(1);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE.expo }}
        className="mx-auto max-w-2xl rounded-3xl border border-gold-400/30 bg-ink-radial p-10 text-center md:p-14"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-sheen text-ink-950">
          <PartyPopper className="h-7 w-7" />
        </div>
        <h2 className="mt-7 font-display text-3xl font-light text-ivory">
          Your request is in
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-mist">
          Thank you, {data.name.split(" ")[0] || "there"}. Our events team will
          reach out within one business day to craft your proposal for{" "}
          <span className="text-ivory">{venue?.name}</span>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${SITE.email}`}>
            <Button variant="outline">Email us directly</Button>
          </a>
          <Button
            onClick={() => {
              setData(initial);
              setStep(0);
              setDone(false);
            }}
          >
            Start another booking
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
      {/* Wizard */}
      <div>
        {/* Stepper */}
        <ol className="mb-10 flex flex-wrap items-center gap-x-2 gap-y-3">
          {STEPS.map((label, i) => (
            <li key={label} className="flex items-center gap-2">
              <button
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className={cn(
                  "flex h-8 items-center gap-2 rounded-full border px-3 text-xs transition-colors",
                  i === step
                    ? "border-gold-400/60 bg-gold-500/10 text-ivory"
                    : i < step
                      ? "border-white/15 text-mist hover:text-ivory"
                      : "border-white/8 text-slate",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full text-[0.65rem]",
                    i < step ? "bg-gold-sheen text-ink-950" : "bg-white/8",
                  )}
                >
                  {i < step ? <Check className="h-3 w-3" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <span className="h-px w-3 bg-white/15 sm:w-5" />
              )}
            </li>
          ))}
        </ol>

        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: EASE.expo }}
            >
              {step === 0 && (
                <Field label="Select a venue" hint="Choose the space that fits your event">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {VENUES.map((v) => (
                      <button
                        key={v.slug}
                        onClick={() => set("venue", v.slug)}
                        className={cn(
                          "group relative overflow-hidden rounded-2xl border text-left transition-all duration-300",
                          data.venue === v.slug
                            ? "border-gold-400/60 ring-1 ring-gold-400/40"
                            : "border-white/10 hover:border-white/25",
                        )}
                      >
                        <div className="relative h-28 w-full overflow-hidden">
                          <SmartImage id={v.image} alt={v.name} sizes="40vw" className="h-full w-full" />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 to-transparent" />
                          {data.venue === v.slug && (
                            <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-gold-sheen text-ink-950">
                              <Check className="h-4 w-4" />
                            </span>
                          )}
                        </div>
                        <div className="p-4">
                          <div className="font-display text-lg text-ivory">{v.name}</div>
                          <div className="mt-1 text-xs text-mist">
                            Up to {formatNumber(v.seated)} guests · {v.area}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </Field>
              )}

              {step === 1 && (
                <Field label="Choose your date" hint="When would you like to host your event">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className="text-sm text-mist">Preferred date</span>
                      <div className="relative">
                        <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gold-400" />
                        <input
                          type="date"
                          value={data.date}
                          onChange={(e) => set("date", e.target.value)}
                          className="w-full rounded-xl border border-white/12 bg-white/5 py-3.5 pl-12 pr-4 text-ivory outline-none transition-colors focus:border-gold-400/60 [color-scheme:dark]"
                        />
                      </div>
                    </label>
                    <div className="flex flex-col gap-2">
                      <span className="text-sm text-mist">Duration</span>
                      <div className="flex flex-wrap gap-2">
                        {DURATIONS.map((d) => (
                          <Chip key={d} active={data.duration === d} onClick={() => set("duration", d)}>
                            {d}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                </Field>
              )}

              {step === 2 && (
                <Field label="Expected capacity" hint="Tell us the scale of your gathering">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-end justify-between">
                      <span className="text-sm text-mist">Number of guests</span>
                      <span className="font-display text-4xl font-light text-gradient-gold">
                        {formatNumber(data.guests)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={6000}
                      step={20}
                      value={data.guests}
                      onChange={(e) => set("guests", Number(e.target.value))}
                      className="mt-5 w-full accent-gold-500"
                    />
                    <div className="mt-2 flex justify-between text-xs text-slate">
                      <span>20</span>
                      <span>6,000</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-sm text-mist">Preferred layout</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {LAYOUTS.map((l) => (
                        <Chip key={l} active={data.layout === l} onClick={() => set("layout", l)}>
                          {l}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </Field>
              )}

              {step === 3 && (
                <Field label="Event requirements" hint="Help us shape the right proposal">
                  <div>
                    <span className="text-sm text-mist">Type of event</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {EVENTS.map((e) => (
                        <Chip key={e.slug} active={data.eventType === e.title} onClick={() => set("eventType", e.title)}>
                          {e.title}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-sm text-mist">Services you need</span>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {SERVICES.map((s) => {
                        const on = data.services.includes(s.title);
                        return (
                          <button
                            key={s.title}
                            onClick={() =>
                              set(
                                "services",
                                on
                                  ? data.services.filter((x) => x !== s.title)
                                  : [...data.services, s.title],
                              )
                            }
                            className={cn(
                              "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                              on ? "border-gold-400/50 bg-gold-500/10 text-ivory" : "border-white/10 text-mist hover:border-white/25",
                            )}
                          >
                            <span className={cn("flex h-5 w-5 items-center justify-center rounded-md border", on ? "border-gold-400 bg-gold-sheen text-ink-950" : "border-white/20")}>
                              {on && <Check className="h-3.5 w-3.5" />}
                            </span>
                            {s.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Field>
              )}

              {step === 4 && (
                <Field label="Your details" hint="So our team can reach you">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input label="Full name" value={data.name} onChange={(v) => set("name", v)} placeholder="Ada Okonkwo" />
                    <Input label="Company" value={data.company} onChange={(v) => set("company", v)} placeholder="Your organisation" />
                    <Input label="Email" type="email" value={data.email} onChange={(v) => set("email", v)} placeholder="you@company.com" />
                    <Input label="Phone" value={data.phone} onChange={(v) => set("phone", v)} placeholder={SITE.phone} />
                    <label className="flex flex-col gap-2 sm:col-span-2">
                      <span className="text-sm text-mist">Anything else we should know</span>
                      <textarea
                        rows={3}
                        value={data.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        placeholder="Tell us about your vision, agenda or special requirements"
                        className="w-full resize-none rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-slate focus:border-gold-400/60"
                      />
                    </label>
                  </div>
                </Field>
              )}

              {step === 5 && (
                <Field label="Review and confirm" hint="Check the details before sending">
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    {[
                      ["Venue", venue?.name ?? "Not selected"],
                      ["Date", data.date || "Not selected"],
                      ["Duration", data.duration],
                      ["Guests", `${formatNumber(data.guests)} · ${data.layout}`],
                      ["Event", data.eventType || "Not selected"],
                      ["Services", data.services.length ? data.services.join(", ") : "Standard package"],
                      ["Contact", `${data.name}${data.company ? `, ${data.company}` : ""}`],
                      ["Email", data.email],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-4 border-b border-white/8 px-5 py-3.5 text-sm last:border-0">
                        <span className="w-28 shrink-0 text-slate">{k}</span>
                        <span className="text-ivory">{v}</span>
                      </div>
                    ))}
                  </div>
                </Field>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={back}
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-ivory disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {step < STEPS.length - 1 ? (
            <Button onClick={next} disabled={!valid[step]}>
              Continue
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={() => setDone(true)}>
              Confirm booking request
              <Sparkles className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Live summary */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal-800/40">
          <div className="relative h-40">
            {venue ? (
              <SmartImage id={venue.image} alt={venue.name} sizes="40vw" className="h-full w-full" />
            ) : (
              <div className="flex h-full items-center justify-center bg-ink-radial">
                <span className="font-display text-2xl tracking-[0.3em] text-gold-400/40">LCCI</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
            <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-gold-300">
              Booking summary
            </span>
          </div>
          <div className="space-y-4 p-6">
            <SummaryRow icon={<Sparkles className="h-4 w-4" />} label="Venue" value={venue?.name ?? "Not selected"} />
            <SummaryRow icon={<CalendarDays className="h-4 w-4" />} label="Date" value={data.date || "Not selected"} />
            <SummaryRow icon={<Users className="h-4 w-4" />} label="Guests" value={`${formatNumber(data.guests)} · ${data.layout}`} />
            <div className="border-t border-white/8 pt-4 text-xs leading-relaxed text-slate">
              No payment is taken now. We will confirm availability and send a
              tailored proposal within one business day.
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl font-light text-ivory">{label}</h2>
      <p className="mt-1 text-sm text-mist">{hint}</p>
      <div className="mt-7">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-colors",
        active ? "border-gold-400/60 bg-gold-500/10 text-ivory" : "border-white/12 text-mist hover:border-white/25 hover:text-ivory",
      )}
    >
      {children}
    </button>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm text-mist">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-ivory outline-none transition-colors placeholder:text-slate focus:border-gold-400/60"
      />
    </label>
  );
}

function SummaryRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold-400">{icon}</span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.16em] text-slate">{label}</div>
        <div className="truncate text-sm text-ivory">{value}</div>
      </div>
    </div>
  );
}
