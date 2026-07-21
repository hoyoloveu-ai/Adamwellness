export function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.08em]">
            ADAM WELLNESS
          </p>
          <p className="mt-3 text-sm text-neutral-400">Personlig träning &amp; onlinecoaching</p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-200">
            <li>Göteborg, Sverige</li>
            <li>
              <a href="tel:+46701234567" className="hover:text-white">
                +46 70 123 45 67
              </a>
            </li>
            <li>
              <a href="mailto:hej@adamwellness.se" className="hover:text-white">
                hej@adamwellness.se
              </a>
            </li>
            <li>Mån–Fre 06–21 · Lör–Sön 08–16</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Socialt
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 px-4 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Adam Wellness · adamwellness.se
      </div>
    </footer>
  );
}
