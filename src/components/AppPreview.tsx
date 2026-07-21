import { FadeIn } from "./FadeIn";
import { PlaceholderImage } from "./PlaceholderImage";

export function AppPreview() {
  return (
    <section id="app" className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <FadeIn direction="left">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Träningsapp
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide sm:text-5xl">
            Ditt program i fickan
          </h2>
          <p className="mt-4 text-neutral-600">
            Via appen får du dina pass, progression och uppföljning samlat på ett ställe. Inga
            gissningar — du vet exakt vad du ska göra, när och hur.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="flex gap-2">
              <span aria-hidden>•</span> Veckoschema och övningsguider
            </li>
            <li className="flex gap-2">
              <span aria-hidden>•</span> Logga set, reps och hur det känns
            </li>
            <li className="flex gap-2">
              <span aria-hidden>•</span> Uppdateringar när vi justerar planen
            </li>
          </ul>
        </FadeIn>

        <FadeIn direction="right" delay={150} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[280px] rounded-[2rem] border-4 border-black bg-black p-2 shadow-2xl sm:max-w-[300px]">
            <div className="overflow-hidden rounded-[1.5rem] bg-white">
              <PlaceholderImage
                label="App-skärm — byt till mockup (public/images/app-phone.jpg)"
                aspect="aspect-[9/19]"
                className="border-0"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
