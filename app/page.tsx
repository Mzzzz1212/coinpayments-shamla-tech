import Image from "next/image";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import carImage from "@/public/assets/car-photo-1.png";
import Navbar from "./sections/Navbar";
import Features from "./sections/Features";
import Benefits from "./sections/Benefits";
import Banner from "./sections/Banner";
import Solutions from "./sections/Solutions";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Image
          src={carImage}
          alt="Car Image"
          className="z-0 w-[100%] h-[100%] object-cover absolute"
        />
      </div>
      <Hero />
      <LogoSection />
      <Features />
      <Benefits />
      <Banner />
      <Solutions />
      <Contact />
      <Footer />
    </main>
  );
}
