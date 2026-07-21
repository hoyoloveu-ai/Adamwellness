"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

const faqs = [
  {
    q: "Hur fungerar onlineprogrammet?",
    a: "Du får ett träningsprogram i appen, en kostplan och löpande uppföljning. Vi anpassar planen efter dina mål och hur kroppen svarar.",
  },
  {
    q: "Vad ingår i priset?",
    a: "Både 6-månaders- och 1-årsprogrammet inkluderar träningsprogram och kostplan. 1-årsplanen ger oftast bättre pris per månad och mer utrymme för långsiktiga resultat.",
  },
  {
    q: "Kan jag träna hemma eller måste jag ha gym?",
    a: "Programmet kan anpassas efter utrustning — gym, hemma eller en blandning. Berätta vad du har tillgång till så bygger vi utifrån det.",
  },
  {
    q: "Hur bokar jag PT 1-on-1 i Göteborg?",
    a: "Använd knappen Boka pass / Boka träningspass på sidan. Bokningssystemet kopplas in separat — tills vidare fungerar knapparna som platshållare.",
  },
  {
    q: "Vilka betalningssätt finns?",
    a: "Du kommer kunna betala med kort och Swish. Betalningen kopplas till Stripe/Swish i ett senare steg.",
  },
  {
    q: "Är jag nybörjare — passar det ändå?",
    a: "Absolut. Programmet anpassas efter din nivå. Många börjar utan tidigare erfarenhet och får tydliga steg från dag ett.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">FAQ</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Vanliga frågor
          </h2>
        </FadeIn>

        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={item.q} delay={i * 40}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-semibold text-neutral-900">{item.q}</span>
                    <span className="text-xl font-light text-neutral-500" aria-hidden>
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-neutral-600">{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
