"use client";

//import { Badge } from "@/components/ui/badge";
import CHEvent from "@/public/logo/CH event.svg";
import ReinasTouch from "@/public/logo/reina's touch.svg";
import FictifProject from "@/public/logo/fictif project.svg";
import Kamtresses from "@/public/logo/kamtresses.svg";
import Kask from "@/public/logo/kask.svg";
import Makedecine from "@/public/logo/makedecine.svg";
//import OrniCrack from "@/public/logo/orni crack.svg";
import PlantAgrico from "@/public/logo/plant agrico.svg";
import SamShopping from "@/public/logo/Sam shoping.svg";
import SmartVaccin from "@/public/logo/smart vaccin.svg";
import { motion } from "motion/react";
import Zenya from "@/public/logo/zenya.svg";
import Image from "next/image";
import React, { Fragment } from "react";

const logos = [
  { name: "CH Event", image: CHEvent, with: 94, hight: 100 },
  { name: "Reinas Touch", image: ReinasTouch, with: 180, hight: 60 },
  { name: "Fictif Project", image: FictifProject, with: 246, hight: 59 },
  { name: "Kamtresses", image: Kamtresses, with: 179, hight: 63 },
  { name: "Kask", image: Kask, with: 181, hight: 60 },
  { name: "Makedecine", image: Makedecine, with: 96, hight: 100 },
  //{ name: "Orni Crack", image: OrniCrack, with: 84, hight: 100 },
  { name: "Plant Agrico", image: PlantAgrico, with: 210, hight: 64 },
  { name: "Sam Shopping", image: SamShopping, with: 168, hight: 60 },
  { name: "Smart Vaccin", image: SmartVaccin, with: 236, hight: 60 },
  { name: "Zenya", image: Zenya, with: 217, hight: 60 },
];

//revoir les logo Fictif Project et Orni crack

export default function LogoSection() {
  return (
    <section className="py-20">
      <div className="">
        <div className="text-center text-black/70 dark:text-white text-md bg-tranparent border border-black/50 dark:border-white/70 rounded-md px-2.5 py-2 mx-auto w-fit">
          They trust me
        </div>
        <div className="flex overflow-hidden mt-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-20 lg:gap-28 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    key={logo.name}
                    alt={logo.name}
                    className="dark:brightness-0 dark:invert"
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
