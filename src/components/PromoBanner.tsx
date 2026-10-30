import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { WA_NUMBER_DISPLAY, waLink } from "../data";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <img
        src="/images/banner.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-deep/95 via-pink-hot/85 to-blue-deep/95" />

      <Reveal className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.25em] ring-1 ring-white/30 backdrop-blur">
          🔥 Promo Spesial
        </span>
        <h2 className="mt-6 text-4xl font-black leading-tight sm:text-6xl">
          BAKSO PEMADAM
          <br />
          KELAPARAN!
        </h2>
        <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.4em] text-pink-soft sm:text-lg">
          Enak • Gurih • Murah
        </p>

        <div className="mt-8 inline-block -rotate-2 rounded-3xl bg-white px-8 py-4 shadow-2xl">
          <span className="block text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Mulai
          </span>
          <span className="bg-gradient-to-r from-pink-hot to-blue-deep bg-clip-text text-5xl font-black text-transparent sm:text-6xl">
            Rp3.000!
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-wa px-9 py-4 text-lg font-extrabold text-white shadow-2xl shadow-black/25 transition hover:scale-105 hover:bg-wa-dark"
          >
            <WhatsAppIcon className="h-7 w-7" />
            YUK, PESAN SEKARANG!
          </a>
          <p className="text-sm font-bold text-white/90">
            WhatsApp:{" "}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-pink-soft decoration-2 underline-offset-4 transition hover:text-pink-soft"
            >
              {WA_NUMBER_DISPLAY}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
