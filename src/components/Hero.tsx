import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

export function Hero() {
  return (
    <section id="hem" className="relative min-h-[88vh] overflow-hidden bg-neutral-900 text-white">
      <div className="absolute inset-0 opacity-40">
        <PlaceholderImage
          label="Hero-foto — byt till din bild senare (public/images/hero.jpg)"
          aspect="h-full min-h-[88vh] aspect-auto"
          className="h-full border-0 bg-neutral-800 [&_span]:text-neutral-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Personlig träning · Göteborg
          </p>
          <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl">
            Boka träningspass
          </h1>
          <p className="mt-5 max-w-xl text-base text-neutral-200 sm:text-lg">
            Träning, kost och uppföljning — skräddarsytt för dig. Börja din resa med Adam Wellness.
          </p>
          <a
            href="#boka"
            className="mt-8 inline-flex w-fit bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Boka träningspass
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
