import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Pickles from "@/components/Pickles";
import Catering from "@/components/Catering";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Pickles />
        <Catering />
        <HowItWorks />
        <Trust />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CartDrawer />
    </>
  );
}
