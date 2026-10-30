import Reveal from "./Reveal";
import { CheckIcon, WhatsAppIcon } from "./Icons";
import { menuItems, waLink } from "../data";

export default function MenuSection() {
  return (
    <section id="menu" className="relative bg-cream py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-soft/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-pink-soft/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-soft/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-ink">
            Menu &amp; Harga
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">
            Pilih Menu{" "}
            <span className="bg-gradient-to-r from-pink-hot to-blue-deep bg-clip-text text-transparent">
              Favoritmu
            </span>
          </h2>
          <p className="mt-4 text-slate-500">
            Dua menu andalan dengan kuah gurih dan bakso urat daging sapi. Semua langsung bisa
            dipesan lewat WhatsApp!
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
          {menuItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  item.accent === "pink"
                    ? "shadow-pink-soft/40 ring-pink-soft/70"
                    : "shadow-blue-soft/30 ring-blue-soft/60"
                }`}
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-extrabold text-white shadow-lg ${
                      item.accent === "pink"
                        ? "bg-gradient-to-r from-pink-hot to-pink-mid"
                        : "bg-gradient-to-r from-blue-deep to-blue-soft"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
                    <span className="align-top text-xs font-bold text-slate-400">Rp</span>
                    <span
                      className={`text-2xl font-black ${
                        item.accent === "pink" ? "text-pink-hot" : "text-blue-deep"
                      }`}
                    >
                      {item.priceLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-extrabold text-ink sm:text-3xl">{item.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {item.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-1.5 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink/70 ring-1 ring-pink-soft/50"
                      >
                        <CheckIcon
                          className={`h-3.5 w-3.5 ${
                            item.accent === "pink" ? "text-pink-hot" : "text-blue-deep"
                          }`}
                        />
                        {chip}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-dashed border-pink-soft/60 pt-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                        Harga
                      </span>
                      <div
                        className={`text-4xl font-black leading-none sm:text-5xl ${
                          item.accent === "pink" ? "text-pink-hot" : "text-blue-deep"
                        }`}
                      >
                        Rp{item.priceLabel}
                        <span className="ml-1 text-sm font-semibold text-slate-400">/porsi</span>
                      </div>
                    </div>
                    <a
                      href={waLink(item.waText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-wa px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-green-200 transition hover:scale-105 hover:bg-wa-dark"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      PESAN
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
