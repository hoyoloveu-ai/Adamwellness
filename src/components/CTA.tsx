import { FadeIn } from "./FadeIn";

export function CTA() {
  return (
    <section id="kom-igang" className="bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide sm:text-6xl lg:text-7xl">
            Redo att börja?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-300">
            Ta första steget idag — boka ett pass eller välj ett onlineprogram som passar dig.
          </p>
          <a
            href="#boka"
            className="mt-8 inline-flex bg-white px-8 py-4 text-base font-semibold text-black transition hover:bg-neutral-200"
          >
            Kom igång
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
