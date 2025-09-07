"use client";
import Image from "next/image";
import logoImg from "@/public/assets/logo.png";
import sideLogo from "@/public/assets/side-logo.png";
import legacyLogo from "@/public/assets/legacy-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    title: "FOR BUSINESS",
    items: [
      { label: "BUSINESS FEATURES", href: "/" },
      { label: "MERCHANT TOOLS", href: "/" },
    ],
  },
  {
    title: "FOR INDIVIDUALS",
    items: [
      { label: "PERSONAL WALLETS", href: "/" },
      { label: "PREPAID CARDS", href: "/" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "INTEGRATION GUIDE", href: "/" },
      { label: "INTEGRATION OPTIONS", href: "/" },
      { label: "API DOCUMENTATION", href: "/" },
      { label: "FAQ", href: "/" },
    ],
  },
];

const Dropdown: React.FC<{
  title: string;
  items: Array<{ label: string; href: string }>;
}> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  let timeoutId: number;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 40);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-sm hover:text-white/80 cursor-pointer transition-colors">
        {title} {isOpen ? "-" : "+"}
      </button>
      <div
        className={`absolute left-0 mt-2 w-[250px] h-auto p-6 rounded-md bg-[#1a2440] text-white shadow-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        {items.map((item, index: number) => (
          <Link
            key={index}
            href={item.href}
            className="block font-light text-sm px-4 py-2 rounded-md hover:bg-white/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed z-20 pt-2 w-full bg-[#010101] text-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between xl:px-0 lg:px-4 md:px-4 sm:px-4 px-4 py-6">
        {/* Left Logo Section */}
        <div className="flex items-center gap-4">
          <Image
            src={logoImg}
            alt="CoinPayments Logo"
            width={180}
            height={40}
            className="2xl:w-[300px] md:w-[250px] sm:w-[200px] xs:w-[150px]"
            priority
          />
          <div className="h-[50px] w-[1px] bg-white"></div>
          <Image
            src={sideLogo}
            alt="Side Partner Logo"
            width={80}
            height={40}
            className=""
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((nav, i) => (
            <Dropdown key={i} title={nav.title} items={nav.items} />
          ))}
          <Link
            href="/"
            className="mt-[1px] text-sm hover:text-white/80 transition-colors"
          >
            COINS
          </Link>
          <Link
            href="/"
            className="mt-[1px] text-sm hover:text-white/80 transition-colors"
          >
            SUPPORT
          </Link>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full border border-white cursor-pointer text-white hover:bg-white hover:text-black transition-colors bg-[#010101]"
            >
              LOG IN
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full bg-white cursor-pointer text-black"
            >
              SIGN UP
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="flex flex-col h-screen items-start gap-4 bg-black px-6 pb-6 text-white xl:hidden">
          <div className="mt-5 h-[1px] w-full bg-white"></div>
          <div className="relative p-2 w-full">
            <Link
              href="/"
              className="flex justify-between items-center font-light w-full"
            >
              <span>FOR BUSINESSES</span>
              <span>+</span>
            </Link>
          </div>
          <div className="relative w-full p-2">
            <Link
              href="/"
              className="flex justify-between items-center font-light w-full"
            >
              <span>FOR INDIVIDUALS</span>
              <span>+</span>
            </Link>
          </div>
          <div className="relative w-full p-2">
            <Link
              href="/"
              className="flex justify-between items-center font-light w-full"
            >
              <span>RESOURCES</span>
              <span>+</span>
            </Link>
          </div>
          <div className="relative w-full p-2">
            <Link href="/" className="font-light w-full">
              <span>COINS</span>
            </Link>
          </div>
          <div className="relative w-full p-2">
            <Link href="/" className="font-light w-full">
              <span>SUPPORT</span>
            </Link>
          </div>
          <div className="relative w-full rounded-2xl p-4 flex items-center flex-col-reverse md:flex-row md:justify-start justify-center gap-4 bg-[#1a2440]">
            <Button className="bg-blue-500 hover:bg-blue-600 transition-colors">
              Sign Up
            </Button>
            <p>Bank Yourself today.</p>
          </div>
          <div className="flex justify-center mt-10 items-center relative w-full gap-8 flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center gap-6">
              <Image src={logoImg} alt="Logo Image" width={200} height={80} />
              <Button
                className="rounded-full bg-white hover:bg-white/90 transition-colors text-black"
                size="lg"
              >
                Log In
              </Button>
            </div>
            <div className="h-[100px] mx-10 w-[1px] bg-white hidden md:block"></div>
            <div className="h-[1px] w-[200px] bg-white block md:hidden"></div>
            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                src={legacyLogo}
                alt="Legacy Logo Image"
                width={200}
                height={70}
              />
              <Button
                className="rounded-full bg-white hover:bg-white/90 transition-colors text-black"
                size="lg"
              >
                Log In
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
