import { BowlIcon, WhatsAppIcon } from "./Icons";
import { WA_NUMBER_DISPLAY, waLink } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-pink-deep via-[#9c2f7d] to-blue-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
              <BowlIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-black tracking-wide">BAKSO RAHIMSYAH 95</p>
              <p className="text-sm font-semibold text-pink-soft">
                Bakso Pemadam Kelaparan! • Enak • Gurih • Murah
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold">
            <a href="#home" className="transition hover:text-pink-soft">
              Beranda
            </a>
            <a href="#menu" className="transition hover:text-pink-soft">
              Menu
            </a>
            <a href="#kenapa" className="transition hover:text-pink-soft">
              Kenapa Kami
            </a>
            <a href="#pesan" className="transition hover:text-pink-soft">
              Pesan
            </a>
          </nav>

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-black/20 transition hover:scale-105 hover:bg-wa-dark"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {WA_NUMBER_DISPLAY}
          </a>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs font-semibold text-white/70">
          © {year} BAKSO RAHIMSYAH 95 — Bakso Pemadam Kelaparan, Harga Bersahabat, Rasa Bikin
          Ketagihan! 🍜
        </div>
      </div>
    </footer>
  );
}
