"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#hem", label: "Hem" },
  { href: "#boka", label: "Boka" },
  { href: "#resultat", label: "Resultat" },
  { href: "#om-mig", label: "Om mig" },
  { href: "#priser", label: "Priser" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-neutral-200 bg-white/95 backdrop-blur" : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#hem"
          className="font-[family-name:var(--font-display)] text-xl tracking-[0.08em] text-black sm:text-2xl"
        >
          ADAM WELLNESS
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Huvudmeny">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-neutral-700 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#boka"
            className="bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Boka pass
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-black px-3 py-2 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Stäng" : "Meny"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden"
          aria-label="Mobilmeny"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base text-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#boka"
                className="mt-1 inline-block bg-black px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Boka pass
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
