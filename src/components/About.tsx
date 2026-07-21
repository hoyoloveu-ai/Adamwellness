import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

export function About() {
  return (
    <section id="om-mig" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <FadeIn direction="left">
          <PlaceholderImage
            label="Foto av Adam — byt senare (public/images/about.jpg)"
            aspect="aspect-[4/5]"
          />
        </FadeIn>
        <FadeIn direction="right" delay={100}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Om mig
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Hej, jag heter Adam
          </h2>
          <div className="mt-5 space-y-4 text-neutral-700">
            <p>
              Jag är personlig tränare baserad i Göteborg — driven av att hjälpa människor hitta
              styrka, energi och självförtroende genom träning som faktiskt håller i längden.
            </p>
            <p>
              Min egen resa började med nyfikenhet i gymmet och växte till ett yrke. Jag har sett
              hur rätt vägledning kan förändra mer än kroppen — det förändrar hur man möter
              vardagen.
            </p>
            <p>
              Därför coachar jag: inte med quick fixes, utan med tydliga planer, ärlig feedback och
              stöd när det känns tufft. Oavsett om du är nybörjare eller vill ta nästa steg — vi
              gör det tillsammans.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
