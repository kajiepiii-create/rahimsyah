export const WA_NUMBER_DISPLAY = "0895429219824";
export const WA_NUMBER_INTL = "62895429219824";
export const WA_TEXT_DEFAULT =
  "Halo Bakso Rahimsyah 95! 🍜 Saya mau pesan bakso dong. Menu apa saja yang ready hari ini?";

export const waLink = (text: string = WA_TEXT_DEFAULT): string =>
  `https://wa.me/${WA_NUMBER_INTL}?text=${encodeURIComponent(text)}`;

export interface MenuItem {
  name: string;
  priceLabel: string;
  image: string;
  tag: string;
  desc: string;
  chips: string[];
  accent: "pink" | "blue";
  waText: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "Bakso Mercon",
    priceLabel: "3.000",
    image: "/images/mercon.jpg",
    tag: "🔥 Paling Pedas",
    desc: "Bakso dengan sensasi pedas yang menggugah selera! Isi cabe jumbo di dalam bakso urat bikin rasanya makin nendang dan bikin nagih.",
    chips: ["Kuah mercon", "Isi cabe jumbo", "Bakso urat sapi"],
    accent: "pink",
    waText: "Halo Bakso Rahimsyah 95! 🔥 Saya mau pesan Bakso Mercon Rp3.000 dong!",
  },
  {
    name: "Bakso Campur",
    priceLabel: "5.000",
    image: "/images/campur.jpg",
    tag: "⭐ Favorit Pelanggan",
    desc: "Kombinasi bakso dan pelengkap lengkap dengan kuah gurih. Kenyang, puas, dan pastinya bikin bahagia seharian!",
    chips: ["Kuah gurih", "Pelengkap lengkap", "Bakso urat sapi"],
    accent: "blue",
    waText: "Halo Bakso Rahimsyah 95! 🍜 Saya mau pesan Bakso Campur Rp5.000 ya!",
  },
];

export interface Feature {
  icon: "meat" | "flame" | "wallet" | "clock";
  title: string;
  desc: string;
}

export const features: Feature[] = [
  {
    icon: "meat",
    title: "Bakso Urat Daging Sapi",
    desc: "Sensasi bakso urat dengan cita rasa daging sapi pilihan yang gurih, lezat, dan kenyal.",
  },
  {
    icon: "flame",
    title: "Pilihan Bakso Mercon",
    desc: "Cocok untuk pecinta makanan dengan sensasi pedas yang menggugah selera.",
  },
  {
    icon: "wallet",
    title: "Harga Bersahabat",
    desc: "Nikmati bakso mulai dari Rp3.000 saja. Murah di kantong, nikmat di lidah!",
  },
  {
    icon: "clock",
    title: "Cocok Kapan Saja",
    desc: "Teman makan siang, sore, maupun saat lapar melanda di tengah malam.",
  },
];
