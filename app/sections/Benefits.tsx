import Image from "next/image";
import benefitsImg2 from "@/public/assets/benefits-img1.png";
import benefitsImg3 from "@/public/assets/benefits-img2.png";
import benefitsImg1 from "@/public/assets/benefits-img3.png";
import mobileImg1 from "@/public/assets/mobile-image-1.png";
import mobileImg2 from "@/public/assets/mobile-image-2.png";
import mobileImg3 from "@/public/assets/mobile-image-3.png";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    image: benefitsImg1,
    mobileImg: mobileImg1,
    title: "Save Up to 90% on Withdrawal Fees",
    description:
      "Save time and money by batching withdrawals from multiple callback addresses, paying just one transaction fee.",
  },
  {
    image: benefitsImg2,
    mobileImg: mobileImg2,
    title: "Accurate Fixed-Rate Invoicing",
    description:
      "Guarantee your payments with fixed-rate invoicing. Receive the exact amount you bill, every time.",
  },
  {
    image: benefitsImg3,
    mobileImg: mobileImg3,
    title: "Instant Transaction Verification",
    description:
      "See incoming deposits within seconds, not minutes. No more waiting for blockchain confirmations.",
  },
];

const otherBenefits = [
  {
    title: "Fiat Conversion Made Easy",
    description:
      "Accept credit card payments and receive crypto directly in your wallet, or convert your crypto earnings into fiat currencies and deposit them into your bank.",
  },
  {
    title: "Automatic Fund Recovery",
    description:
      "Recovering funds sent to the wrong address on the same chain is as easy as flipping a switch. No waiting, no stress, no support needed.",
  },
  {
    title: "Insured Funds for Merchants",
    description:
      "Store your funds with confidence. Our custody services are insured to protect your assets.",
  },
  {
    title: "Seamless Integration",
    description:
      "Easy integration with existing e-commerce platforms, accounting software, and point-of-sale systems.",
  },
  {
    title: "Multi-Sig Custody for Enterprises",
    description:
      "Enhanced security with multi-signature custody solutions tailored for enterprise users.",
  },
  {
    title: "Telegram Payment Bot",
    description:
      "Monetize your Telegram groups by accepting crypto and credit card payments. Grow your community and unlock new revenue opportunities with ease.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h3 className="xl:text-7xl text-5xl font-light">
            KEY <span className="font-bold">BENEFITS</span>
          </h3>
          <h4 className="xl:text-7xl text-4xl font-light mt-4">
            THAT SET US APART
          </h4>
          {/*First Section*/}
          <div className="flex flex-col justify-center px-8 items-center xl:mt-28 gap-8 mt-12">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="grid grid-cols-1 xl:grid-cols-2 mt-6 gap-16"
              >
                <div className="flex xl:order-1 order-2 justify-center items-center">
                  <div className="bg-[#010101] flex flex-col max-w-xl justify-center items-center outline-1 outline-white text-white p-10 w-[600px] h-[350px]">
                    <h4 className="uppercase xl:text-5xl text-4xl font-semibold">
                      {benefit.title.split(" ").map((word, i) =>
                        word === "90%" ||
                        word === "Fixed-Rate" ||
                        word === "Instant" ? (
                          <span key={i} className="text-blue-500">
                            {word}{" "}
                          </span>
                        ) : (
                          `${word} `
                        ),
                      )}
                    </h4>
                    <p className="xl:mt-6 xl:text-lg mt-3 text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                <div className="xl:order-2 order-1 hidden md:block">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-[600px] h-[350px] rounded-md"
                  />
                </div>
                <div className="order-1 flex justify-center md:hidden">
                  <Image
                    src={benefit.mobileImg}
                    alt={benefit.title}
                    className="w-auto h-auto rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
          {/*Second Section*/}
          <div className="mt-28 grid grid-cols-1 xl:grid-cols-2 p-6 justify-center items-center gap-8">
            {otherBenefits.map((benefit, i) => (
              <div
                key={i}
                className="outline-1 outline-white/60 text-white p-5 xl:p-10 xl:w-[600px] w-full flex flex-col items-start justify-center h-[200px]"
              >
                <h5 className="uppercase xl:text-xl font-semibold">
                  {benefit.title}
                </h5>
                <p className="text-white/80 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center mt-20 items-center gap-6">
            <p className="xl:text-xl text-lg p-4  text-center">
              Instant, reliable payments for businesses of any size.{" "}
              <span className="font-semibold">
                Lower fees, faster settlements.
              </span>
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Button
                className="bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-full leading-tight font-semibold py-6 px-12 text-lg"
                variant="secondary"
              >
                Get Started Now
              </Button>
              <Button
                className="bg-white hover:bg-white/90 transition-colors text-black rounded-full leading-tight font-semibold py-6 px-12 text-lg"
                variant="secondary"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
