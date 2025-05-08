import { Button } from "@/components/ui/button";
import PP from "@/public/pp linkedin.jpg";
import IconCall from "@/public/call icon.svg";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
//import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-6">
      <div className="flex flex-col items-center justify-center py-10 space-y-8 bg-secondary max-w-sm md:max-w-xl lg:max-w-5xl rounded-xl mx-auto">
        <Badge className="text-sm text-black/70 bg-white px-6 py-2 rounded-md  mx-auto">
          Available to discuss your project
        </Badge>
        <Image
          src={PP}
          alt="Portfolio"
          className="w-30 h-auto rounded-full border-6 border-white shadow-xl mx-auto"
        />
        <div className="text-2xl lg:text-3xl font-medium flex flex-col items-center">
          <h2>
            👋 Hi, I’m{" "}
            <span className="text-primary font-bold">Romaric Ngolle</span>
          </h2>
          <h2 className="max-w-80 md:max-w-md lg:max-w-xl text-center">
            I’m a{" "}
            <span className="font-bold text-[#C4C4C4]">Creative Developer</span>
            . I design visual identities, intuitive interfaces, and bring them
            to life through code.
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-12">
          <Button className="px-6 py-5 text-md text-black font-medium bg-white hover:bg-white hover:opacity-50 transition-opacity">
            View my work <ArrowRight className="ml-1" />
          </Button>
          <Button className="px-6 py-5 text-md text-white font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
            Book a call
            <span>
              <Image src={IconCall} alt="IconCall" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
