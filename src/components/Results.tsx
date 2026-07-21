import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

const results = [
  { name: "Erik", weeks: "12 veckor", before: "Erik före", after: "Erik efter" },
  { name: "Sara", weeks: "16 veckor", before: "Sara före", after: "Sara efter" },
  { name: "Marcus", weeks: "8 veckor", before: "Marcus före", after: "Marcus efter" },
];

export function Results() {
  return (
    <section id="resultat" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Resultat
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Klientresultat
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Verkliga förändringar från medlemmar som tränat med fokus, struktur och uppföljning.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {results.map((r, i) => (
            <FadeIn key={r.name} delay={i * 100}>
              <article>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <PlaceholderImage label={r.before} aspect="aspect-[3/4]" />
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      Före
                    </p>
                  </div>
                  <div>
                    <PlaceholderImage label={r.after} aspect="aspect-[3/4]" />
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-neutral-500">
                      Efter
                    </p>
                  </div>
                </div>
                <p className="mt-3 font-semibold">
                  {r.name} · {r.weeks}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="inline-flex items-center gap-2 border border-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]">
              Certifierad PT
            </div>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
              PT 1-on-1
            </h3>
            <p className="mt-4 text-neutral-600">
              Personlig träning öga mot öga — vi bygger ett program kring dina mål, din nivå och
              din vardag. Du får teknik, push och tydliga steg framåt, varje pass.
            </p>
            <p className="mt-3 text-neutral-600">
              Perfekt om du vill ha maximal effekt, snabb feedback och någon som håller dig
              ansvarig.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={120}>
            <PlaceholderImage
              label="Certifikat — byt till din bild (public/images/certificate.jpg)"
              aspect="aspect-[4/3]"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
