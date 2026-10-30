import Reveal from "./Reveal";
import { BowlIcon, CheckIcon, FlameIcon, StarIcon, WhatsAppIcon } from "./Icons";
import { waLink } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream pb-20 pt-28 sm:pb-28 sm:pt-36">
      {/* dekorasi blob warna */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-pink-soft/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-blue-soft/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-mid/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-10">
        {/* Kolom teks */}
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-pink-deep shadow-md ring-1 ring-pink-soft/70 sm:text-sm">
              🔥 Bakso Pemadam Kelaparan!
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-5xl xl:text-[3.7rem]">
              LAPAR MELANDA?{" "}
              <span className="block bg-gradient-to-r from-pink-hot via-pink-mid to-blue-deep bg-clip-text text-transparent">
                BAKSO RAHIMSYAH 95
              </span>{" "}
              <span className="relative inline-block text-blue-deep">
                SOLUSINYA!
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C40 3 80 3 118 7c30 3 55 2 80-3"
                    stroke="#F5A5CC"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Nikmati bakso urat dengan daging sapi pilihan yang gurih, lezat, dan bikin nagih —
              pilihan tepat untuk menemani waktu makanmu!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-wa px-7 py-4 text-base font-extrabold text-white shadow-xl shadow-green-200 transition hover:scale-105 hover:bg-wa-dark"
              >
                <WhatsAppIcon className="h-6 w-6 transition duration-300 group-hover:rotate-12" />
                PESAN SEKARANG
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border-2 border-blue-soft bg-white px-7 py-[0.85rem] text-base font-extrabold text-blue-ink shadow-md transition hover:scale-105 hover:bg-blue-soft/10"
              >
                LIHAT MENU
              </a>
              <div className="inline-flex -rotate-3 items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-hot to-blue-deep px-5 py-3 text-white shadow-lg shadow-pink-soft/50">
                <span className="text-xs font-semibold uppercase tracking-wide">Mulai</span>
                <span className="text-2xl font-black">Rp3.000</span>
                <span className="text-xs font-semibold">/porsi</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-semibold text-ink/70">
              <span className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-amber-400" /> 4.9/5 rating pelanggan
              </span>
              <span className="flex items-center gap-2">
                <BowlIcon className="h-5 w-5 text-pink-hot" /> 1.000+ porsi laris
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-blue-deep" /> 100% daging sapi pilihan
              </span>
            </div>
          </div>
        </Reveal>

        {/* Kolom foto */}
        <Reveal delay={150}>
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rotate-3 rounded-[3rem] bg-gradient-to-br from-pink-soft via-pink-mid/40 to-blue-soft" />
            <img
              src="/images/hero.jpg"
              alt="Semangkuk bakso urat daging sapi Bakso Rahimsyah 95"
              className="relative h-[380px] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-pink-soft/40 ring-8 ring-white sm:h-[460px] lg:h-[520px]"
            />

            {/* kartu mengambang 1 */}
            <div className="absolute -left-3 top-8 flex animate-float items-center gap-3 rounded-2xl bg-white/95 p-3 pr-5 shadow-xl ring-1 ring-pink-soft/50 backdrop-blur sm:-left-8">
              <img
                src="/images/hero-float.jpg"
                alt="Bakso urat dengan perasan jeruk nipis"
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-extrabold text-ink">Bakso Urat</p>
                <p className="text-xs font-semibold text-slate-500">Daging sapi pilihan</p>
                <p className="text-xs font-bold tracking-widest text-amber-500">★★★★★</p>
              </div>
            </div>

            {/* kartu mengambang 2 */}
            <div className="absolute -bottom-6 right-4 animate-float-slow rounded-2xl bg-gradient-to-br from-pink-hot to-blue-deep p-4 text-white shadow-xl sm:-right-6">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                <FlameIcon className="h-4 w-4" /> Bakso Mercon
              </p>
              <p className="mt-1 text-3xl font-black">Rp3.000</p>
              <p className="text-xs font-semibold text-white/80">per porsi • pedasnya nendang!</p>
            </div>

            {/* lencana mengambang */}
            <div className="absolute -top-5 right-6 animate-float rounded-full bg-blue-soft px-4 py-2 text-sm font-extrabold text-white shadow-lg">
              ENAK • GURIH ✦
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
