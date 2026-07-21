import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

export function DietPlan() {
  return (
    <section id="kostplan" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <FadeIn direction="left" className="order-2 lg:order-1">
          <PlaceholderImage
            label="Kostplan-foto — byt senare (public/images/kostplan.jpg)"
            aspect="aspect-[5/4]"
          />
        </FadeIn>
        <FadeIn direction="right" delay={100} className="order-1 lg:order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Kostplan
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Mat som stöttar resultaten
          </h2>
          <p className="mt-4 text-neutral-600">
            Tillsammans med träningen får du en enkel, hållbar kostplan anpassad efter dina mål —
            utan krångel. Fokus på mat du faktiskt kan hålla dig till i vardagen, med tydliga
            riktlinjer för energi, protein och balans.
          </p>
          <p className="mt-3 text-neutral-600">
            Ingår i både 6-månaders- och 1-årsprogrammet.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
