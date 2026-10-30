import Reveal from "./Reveal";
import { ClockIcon, FlameIcon, MeatIcon, WalletIcon } from "./Icons";
import { features, type Feature } from "../data";

const iconMap: Record<Feature["icon"], typeof MeatIcon> = {
  meat: MeatIcon,
  flame: FlameIcon,
  wallet: WalletIcon,
  clock: ClockIcon,
};

export default function WhyUs() {
  return (
    <section id="kenapa" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-pink-soft/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-blue-soft/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Foto */}
        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 -rotate-3 rounded-[3rem] bg-gradient-to-tr from-blue-soft/60 to-pink-soft" />
            <img
              src="/images/whyus.jpg"
              alt="Bakso gurih dengan telur dan sayuran segar"
              className="relative h-[420px] w-full -rotate-2 rounded-[2.5rem] object-cover shadow-2xl ring-8 ring-cream sm:h-[500px]"
            />
            <div className="absolute -right-3 top-8 rotate-6 rounded-2xl bg-blue-deep px-4 py-2 text-sm font-black text-white shadow-lg sm:-right-6">
              EST. 95 ⭐
            </div>
            <div className="absolute -bottom-6 -left-3 flex animate-float items-center gap-3 rounded-2xl bg-white p-4 pr-6 shadow-xl ring-1 ring-pink-soft/50 sm:-left-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-pink-hot to-pink-mid text-white shadow-md shadow-pink-soft/60">
                <FlameIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-ink">Bakso Mercon</p>
                <p className="text-xs font-semibold text-slate-500">Pedasnya nendang, bikin nagih!</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Teks & fitur */}
        <Reveal delay={120}>
          <span className="inline-block rounded-full bg-pink-soft/25 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-pink-deep">
            Kenapa Kami
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
            Kenapa Harus{" "}
            <span className="bg-gradient-to-r from-pink-hot to-blue-deep bg-clip-text text-transparent">
              Bakso Rahimsyah 95?
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-500">
            Bukan sekadar bakso biasa — ini bakso dengan rasa yang bikin ketagihan dan harga yang
            tetap bersahabat!
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              const pink = i % 2 === 0;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl bg-cream p-5 ring-1 ring-pink-soft/40 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md ${
                      pink
                        ? "bg-gradient-to-br from-pink-hot to-pink-mid shadow-pink-soft/50"
                        : "bg-gradient-to-br from-blue-deep to-blue-soft shadow-blue-soft/50"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-extrabold text-ink">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
