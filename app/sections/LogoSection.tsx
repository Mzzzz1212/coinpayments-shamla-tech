"use client";

import brandLogo1 from "@/public/assets/brand-logo-1.png";
import brandLogo2 from "@/public/assets/brand-logo-2.png";
import brandLogo3 from "@/public/assets/brand-logo-3.png";
import brandLogo4 from "@/public/assets/brand-logo-4.png";
import brandLogo5 from "@/public/assets/brand-logo-5.png";
import brandLogo6 from "@/public/assets/brand-logo-6.png";
import brandLogo7 from "@/public/assets/brand-logo-7.png";
import brandLogo8 from "@/public/assets/brand-logo-8.png";
import brandLogo9 from "@/public/assets/brand-logo-9.png";
import brandLogo10 from "@/public/assets/brand-logo-10.png";
import { motion } from "motion/react";
import { Fragment } from "react";
import Image from "next/image";

const logos = [
  { name: "BetConstruct Logo", image: brandLogo1 },
  { name: "Digitain Logo", image: brandLogo2 },
  { name: "JetCraft Logo", image: brandLogo3 },
  { name: "LionGaming Logo", image: brandLogo4 },
  { name: "MondoGaming Logo", image: brandLogo5 },
  { name: "Nsus Logo", image: brandLogo6 },
  { name: "NuxGame Logo", image: brandLogo7 },
  { name: "OverStock Logo", image: brandLogo8 },
  { name: "Praxis Logo", image: brandLogo9 },
  { name: "UpGaming Logo", image: brandLogo10 },
];

export default function LogoSection() {
  return (
    <section className="py-24 -mt-32 bg-[#080e1b] text-white z-30">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex gap-20 xl:gap-4 flex-col xl:flex-row items-center">
            <div className="flex flex-col justify-center xl:items-start items-center gap-6">
              <h3 className="font-bold text-6xl">14 +</h3>
              <p className="text-xl text-center font-semibold">
                YEARS OF EXPERTISE <br /> IN CRYPTOPROCESSING
              </p>
            </div>
            <div className="h-[100px] mx-10 w-[1px] bg-white hidden xl:block"></div>
            <div className="flex flex-col justify-center xl:items-start items-center gap-6">
              <h3 className="font-bold text-6xl">250K +</h3>
              <p className="text-xl text-center font-semibold">
                MERCHANTS ACROSS <br /> THE GLOBE
              </p>
            </div>
            <div className="h-[100px] mx-10 w-[1px] bg-white hidden xl:block"></div>
            <div className="flex flex-col justify-center xl:items-start items-center gap-6">
              <h3 className="font-bold text-6xl">1M +</h3>
              <p className="text-xl text-center font-semibold">
                CRYPTO WALLET <br /> USERS
              </p>
            </div>
            <div className="h-[100px] mx-10 w-[1px] bg-white hidden xl:block"></div>
            <div className="flex flex-col justify-center xl:items-start items-center gap-6">
              <h3 className="font-bold text-6xl">$50B +</h3>
              <p className="text-xl text-center font-semibold">
                TRANSACTION VOLUME <br /> PROCESSED
              </p>
            </div>
          </div>
          <p className="font-normal leading-tight text-xl p-6 md:text-4xl text-center mt-12">
            TRUSTED BY THOUSANDS OF COMPANIES
          </p>
          {/*Logos Section*/}
          <div className="flex overflow-hidden mt-8 w-3/4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              className="flex flex-none gap-24 pr-24"
            >
              {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                  {logos.map((logo) => (
                    <Image
                      key={logo.name}
                      src={logo.image}
                      alt={logo.name}
                      className="w-52 h-10"
                    />
                  ))}
                </Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
