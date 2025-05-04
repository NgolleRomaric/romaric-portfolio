//import { Badge } from "@/components/ui/badge";
import CHEvent from "@/public/logo/CH event.svg";
import ReinasTouch from "@/public/logo/reina's touch.svg";
import FictifProject from "@/public/logo/fictif project.svg";
import Kamtresses from "@/public/logo/kamtresses.svg";
import Kask from "@/public/logo/kask.svg";
import Makedecine from "@/public/logo/makedecine.svg";
import OrniCrack from "@/public/logo/orni crack.svg";
import PlantAgrico from "@/public/logo/plant agrico.svg";
import SamShopping from "@/public/logo/Sam shoping.svg";
import SmartVaccin from "@/public/logo/smart vaccin.svg";
import Zenya from "@/public/logo/zenya.svg";
import Image from "next/image";

const logos = [
  { name: "CH Event", image: CHEvent, with: 94, hight: 100 },
  { name: "Reinas Touch", image: ReinasTouch, with: 180, hight: 60 },
  { name: "Fictif Project", image: FictifProject, with: 80, hight: 80 },
  { name: "Kamtresses", image: Kamtresses, with: 179, hight: 63 },
  { name: "Kask", image: Kask, with: 181, hight: 60 },
  { name: "Makedecine", image: Makedecine, with: 96, hight: 100 },
  { name: "Orni Crack", image: OrniCrack, with: 84, hight: 100 },
  { name: "Plant Agrico", image: PlantAgrico, with: 210, hight: 64 },
  { name: "Sam Shopping", image: SamShopping, with: 168, hight: 60 },
  { name: "Smart Vaccin", image: SmartVaccin, with: 236, hight: 60 },
  { name: "Zenya", image: Zenya, with: 217, hight: 60 },
];

export default function LogoSection() {
  return (
    <section className="py-20">
      <div className="">
        <div className="text-center text-black/70 text-md bg-tranparent border border-black/50 rounded-md px-2.5 py-2 mx-auto w-fit">
          They trust me
        </div>
        <div className="overflow-hidden mt-20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-20 lg:gap-28 pr-24">
            {logos.map((logo) => (
              <Image src={logo.image} key={logo.name} alt={logo.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
