const items = [
  "Enak",
  "Gurih",
  "Murah",
  "Bakso Urat Daging Sapi",
  "Bakso Pemadam Kelaparan",
  "Mulai Rp3.000",
  "Pesan via WhatsApp",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((text, i) => (
        <span
          key={i}
          className="flex items-center text-sm font-extrabold uppercase tracking-[0.25em] text-white sm:text-base"
        >
          <span className="px-6">{text}</span>
          <span className="text-pink-soft">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section
      aria-hidden
      className="relative z-10 -rotate-1 scale-[1.02] bg-gradient-to-r from-pink-hot via-pink-mid to-blue-deep py-3.5 shadow-lg"
    >
      <div className="flex w-max animate-marquee overflow-hidden">
        <Row />
        <Row />
      </div>
    </section>
  );
}
