import Reveal from "./Reveal";
import { BowlIcon, CheckIcon, WhatsAppIcon } from "./Icons";
import { WA_NUMBER_DISPLAY, waLink } from "../data";

const rows = [
  { label: "Menu", value: "Bakso Mercon & Bakso Campur" },
  { label: "Harga", value: "Rp3.000 – Rp5.000" },
  { label: "WhatsApp", value: WA_NUMBER_DISPLAY },
];

const steps = [
  "Pilih menu favoritmu",
  "Klik tombol Pesan Sekarang",
  "Chat & konfirmasi via WhatsApp",
];

export default function OrderInfo() {
  return (
    <section id="pesan" className="relative bg-cream py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-pink-soft/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-blue-soft/25 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-pink-soft/30 ring-1 ring-pink-soft/60">
            <div className="h-2.5 bg-gradient-to-r from-pink-hot via-pink-soft to-blue-soft" />
            <div className="p-8 text-center sm:p-12">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-hot to-blue-deep text-white shadow-lg shadow-pink-soft/60">
                <BowlIcon className="h-9 w-9" />
              </span>
              <h2 className="mt-5 text-2xl font-black tracking-tight text-ink sm:text-4xl">
                BAKSO RAHIMSYAH 95
              </h2>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-[0.3em] text-pink-hot sm:text-sm">
                Informasi Pemesanan
              </p>

              <div className="mt-8 space-y-3 text-left">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-cream px-5 py-4 ring-1 ring-pink-soft/40"
                  >
                    <span className="text-sm font-bold text-slate-500">{row.label}</span>
                    <span className="text-right text-sm font-extrabold text-ink sm:text-base">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                {steps.map((step, i) => (
                  <span
                    key={step}
                    className="inline-flex items-center gap-2 rounded-full bg-blue-soft/10 px-4 py-2 text-xs font-bold text-blue-ink ring-1 ring-blue-soft/40"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-deep text-[11px] font-black text-white">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-slate-500">
                Pesan melalui WhatsApp — klik tombol di bawah untuk langsung menghubungi penjual. 🍜
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-wa px-10 py-5 text-lg font-black text-white shadow-xl shadow-green-200 transition hover:scale-[1.03] hover:bg-wa-dark sm:w-auto"
              >
                <WhatsAppIcon className="h-7 w-7" />
                PESAN SEKARANG
              </a>
              <p className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-ink/70">
                <CheckIcon className="h-4 w-4 text-wa" />
                Balasan cepat via WhatsApp • {WA_NUMBER_DISPLAY}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
