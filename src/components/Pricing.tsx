"use client";

import { FadeIn } from "./FadeIn";

const plans = [
  {
    name: "6 månader",
    price: "4 990 kr",
    note: "eller 899 kr / mån",
    features: ["Träningsprogram i appen", "Personlig kostplan", "Uppföljning & justeringar"],
    best: false,
  },
  {
    name: "1 år",
    price: "8 990 kr",
    note: "bäst pris per månad",
    features: [
      "Träningsprogram i appen",
      "Personlig kostplan",
      "Uppföljning & justeringar",
      "Prioriterad support",
    ],
    best: true,
  },
];

export function Pricing() {
  return (
    <section id="priser" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Onlineprogram
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Priser
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Välj den period som passar dig. Priserna är exempel — uppdatera när du är redo.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100}>
              <article
                className={`relative flex h-full flex-col border p-8 ${
                  plan.best ? "border-2 border-black" : "border-neutral-300"
                }`}
              >
                {plan.best && (
                  <span className="absolute right-6 top-6 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Bästa värde
                  </span>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide">
                  {plan.name}
                </h3>
                <p className="mt-3 text-3xl font-semibold">{plan.price}</p>
                <p className="mt-1 text-sm text-neutral-500">{plan.note}</p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-neutral-700">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span aria-hidden>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-8 w-full bg-black py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                  onClick={() => {
                    /* Placeholder — koppla Stripe/Swish senare */
                  }}
                >
                  Kom igång
                </button>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <p className="mt-6 text-center text-sm text-neutral-500">
            Betalning sker med kort eller Swish. (Kopplas senare.)
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
