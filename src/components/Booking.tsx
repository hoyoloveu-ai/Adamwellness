"use client";

import { FadeIn } from "./FadeIn";

/** Bokningssektion — knappar är platshållare tills bokningssystem kopplas in. */
export function Booking() {
  return (
    <section id="boka" className="scroll-mt-24 bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Boka
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Boka träningspass
          </h2>
          <p className="mt-3 text-neutral-600">
            Här kopplar du in ditt bokningssystem senare. Knappen är redo i layouten men gör
            ingenting ännu.
          </p>

          <div className="mt-8 border border-neutral-300 bg-white p-6 sm:p-8">
            <label className="block text-sm font-semibold" htmlFor="booking-name">
              Namn
            </label>
            <input
              id="booking-name"
              type="text"
              placeholder="Ditt namn"
              className="mt-2 w-full border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />

            <label className="mt-4 block text-sm font-semibold" htmlFor="booking-email">
              E-post
            </label>
            <input
              id="booking-email"
              type="email"
              placeholder="du@email.se"
              className="mt-2 w-full border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />

            <label className="mt-4 block text-sm font-semibold" htmlFor="booking-note">
              Meddelande
            </label>
            <textarea
              id="booking-note"
              rows={3}
              placeholder="När vill du träna? Mål?"
              className="mt-2 w-full border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-black"
            />

            <button
              type="button"
              className="mt-6 w-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
              onClick={() => {
                /* Placeholder — koppla bokningssystem senare */
              }}
            >
              Skicka bokningsförfrågan
            </button>
            <p className="mt-3 text-center text-xs text-neutral-500">
              Platshållare — ingen riktig bokning skickas ännu.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
