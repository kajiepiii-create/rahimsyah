import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MenuSection from "./components/MenuSection";
import WhyUs from "./components/WhyUs";
import PromoBanner from "./components/PromoBanner";
import OrderInfo from "./components/OrderInfo";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <MenuSection />
        <WhyUs />
        <PromoBanner />
        <OrderInfo />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
