import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

const reviews = [
  {
    name: "Anna",
    stars: 5,
    quote: "Bästa träningen jag haft. Starkare både fysiskt och mentalt.",
  },
  {
    name: "Erik",
    stars: 5,
    quote: "Adam pushar dig till nästa nivå. Varje pass gör skillnad.",
  },
  {
    name: "Sofia",
    stars: 5,
    quote: "Professionell, motiverande och alltid med fokus på resultat.",
  },
];

export function Reviews() {
  return (
    <section id="omdomen" className="bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Omdömen
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Vad klienterna säger
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeIn key={r.name} delay={i * 100}>
              <article className="flex h-full flex-col border border-neutral-200 bg-white p-6">
                <PlaceholderImage
                  label={`Foto ${r.name}`}
                  aspect="aspect-square"
                  className="mb-4 max-w-[96px]"
                />
                <p className="text-sm tracking-widest text-black" aria-label={`${r.stars} av 5 stjärnor`}>
                  {"★".repeat(r.stars)}
                </p>
                <p className="mt-3 flex-1 text-neutral-700">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">— {r.name}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
