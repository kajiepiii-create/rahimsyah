import { useEffect, useState } from "react";
import { BowlIcon, MenuIcon, WhatsAppIcon, XIcon } from "./Icons";
import { WA_NUMBER_DISPLAY, waLink } from "../data";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Kenapa Kami", href: "#kenapa" },
  { label: "Pesan", href: "#pesan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 shadow-lg shadow-pink-soft/30 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-hot to-blue-deep text-white shadow-lg shadow-pink-soft/60">
            <BowlIcon className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold tracking-wide text-ink sm:text-base">
              BAKSO RAHIMSYAH
            </span>
            <span className="block text-[11px] font-bold tracking-wide text-pink-hot">
              ★ 95 — PEMADAM KELAPARAN
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/70 transition hover:text-pink-hot"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-wa px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-green-200 transition hover:scale-105 hover:bg-wa-dark sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {WA_NUMBER_DISPLAY}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-ink shadow-md ring-1 ring-pink-soft/60 md:hidden"
            aria-label="Buka/tutup menu navigasi"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-pink-soft/50 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-cream hover:text-pink-hot"
              >
                {link.label}
              </a>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-wa px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-200"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
