import { Button } from "@/components/ui/button";
import logoImg from "@/public/assets/footer-logo.png";
import sideLogo from "@/public/assets/side-logo.png";
import xLogo from "@/public/assets/twitter.svg";
import instaLogo from "@/public/assets/instagram.svg";
import fbLogo from "@/public/assets/facebook.svg";
import teleLogo from "@/public/assets/telegram.svg";
import linkedLogo from "@/public/assets/linkedin.svg";
import ytLogo from "@/public/assets/youtube.svg";
import pinLogo from "@/public/assets/pinterest.svg";
import tikLogo from "@/public/assets/tiktok.svg";
import issuuLogo from "@/public/assets/issuu.svg";
import isoLogo from "@/public/assets/iso-certified.svg";
import Image from "next/image";
import Link from "next/link";

const socials = [
  { name: "Twitter", icon: xLogo, link: "/" },
  { name: "Instagram", icon: instaLogo, link: "/" },
  { name: "Facebook", icon: fbLogo, link: "/" },
  { name: "Telegram", icon: teleLogo, link: "/" },
  { name: "LinkedIn", icon: linkedLogo, link: "/" },
  { name: "Youtube", icon: ytLogo, link: "/" },
  { name: "Pinterest", icon: pinLogo, link: "/" },
  { name: "Tiktok", icon: tikLogo, link: "/" },
  { name: "Issuu", icon: issuuLogo, link: "/" },
];

const links = [
  { name: "FOR BUSINESS", links: "/" },
  { name: "PERSONAL WALLET", links: "/" },
  { name: "MERCHANT TOOLS", links: "/" },
  { name: "SUPPORTED COINS", links: "/" },
  { name: "PREPAID CARDS", links: "/" },
];
const links2 = [
  { name: "INTEGRATION GUIDE", links: "/" },
  { name: "INTEGRATION OPTIONS", links: "/" },
  { name: "API DOCUMENTATION", links: "/" },
  { name: "FAQ", links: "/" },
];
const links3 = [
  { name: "CONTACT SALES", links: "/" },
  { name: "SUPPORT", links: "/" },
  { name: "PRIVACY POLICY", links: "/" },
  { name: "USER AGREEMENT", links: "/" },
  { name: "RESTRICTED JURISDICTIONS", links: "/" },
  { name: "COINPAYMENTS LEGACY", links: "/" },
];

export default function Footer() {
  return (
    <section className="py-20">
      <div className="container mx-auto p-4">
        <div className="flex flex-col xl:flex-row xl:justify-between justify-center xl:items-start items-center flex-wrap">
          <div className="grid grid-cols-3 gap-3 font-light xl:text-[0.9rem] text-sm">
            {/*Links*/}
            <div className="flex flex-col">
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.links}
                  className="mb-2 hover:text-white/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              {links2.map((link, i) => (
                <Link
                  key={i}
                  href={link.links}
                  className="mb-2 hover:text-white/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              {links3.map((link, i) => (
                <Link
                  key={i}
                  href={link.links}
                  className="mb-2 hover:text-white/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          {/*Subscribe*/}
          <div className="text-center mt-8 xl:mt-0 xl:text-start">
            <h3 className="font-semibold text-xl">Newsletter</h3>
            <p className="font-light">Stay up to date with the latest news:</p>
            <input
              className="border border-white rounded-md p-2 mt-4 w-full"
              placeholder="Your email"
            />
            <Button
              variant="secondary"
              className="rounded-full hover:bg-white/80 text-black ppx-6 py-3 mt-3"
            >
              Subscribe
            </Button>
          </div>
        </div>
        {/*Logos*/}
        <div className="mt-20 flex flex-col xl:flex-row gap-6 justify-center xl:justify-between items-center">
          <div className="flex items-center gap-6">
            <Image
              src={logoImg}
              alt="Logo Image"
              className="md:w-[200px] md:h-[130px] w-[100px] h-[70px] mr-2"
            />
            <div className="w-[1px] h-[100px] bg-white"></div>
            <Image
              src={sideLogo}
              alt="Side Logo"
              className="md:w-[200px] md:h-[150px] w-[100px] ml-2"
            />
          </div>
          {/*Socials*/}
          <div className="flex items-center space-x-2">
            {socials.map((link) => (
              <Link key={link.name} href={link.link}>
                <Image
                  src={link.icon}
                  alt={link.name}
                  className="h-7 w-7 bg-[#010101] rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
        {/*Copyright*/}
        <div className="mt-12 text-gray-400 text-xs">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-2">
            <Image src={isoLogo} alt="ISO Cert Logo" className="h-5 w-5" />
            <p className="text-sm font-medium text-center xl:text-start">
              UAB Star Ventures, the COINPAYMENTS operating entity in the EU is
              certified to ISO/IEC 27001:2022 Information Security Management
              System (ISMS)
            </p>
          </div>
          <p className="mt-2 text-sm -mb-2 font-medium text-center xl:text-start">
            © 2013-2025 CoinPayments Inc. All Rights Reserved. Custodial wallet
            services and other virtual asset services provided by UAB Star
            Ventures, PaidInSatoshi Inc., Bloc Office Hub, Fifth Floor, Santa
            Maria Business District, Panama City, the Republic of Panama.
            contact@paidinsatoshi.com
          </p>
        </div>
      </div>
    </section>
  );
}
