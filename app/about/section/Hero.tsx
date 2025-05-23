import Image from "next/image";
import Roro from "@/public/roro.jpg";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import IconCall from "@/public/call icon.svg";

export default function Hero() {
  return (
    <section className="mt-34 px-2">
      <div className="grid grid-col-1 lg:grid-cols-2 items-center justify-between gap-10 lg:gap-16 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
        <div className="col-span-1">
          <Image
            src={Roro}
            alt="Roro img about"
            className="w-120 h-auto rounded-2xl"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-center gap-4 mx-2">
          <h2 className="font-medium text-primary text-3xl">Who am I ?</h2>
          <p className="mt-4">
            Hello, I’m <span className="font-medium">Romaric Ngolle</span>, also
            known as Romaic or Roro for close friends. I’m 24 years old, living
            in Cameroon, and I’m a{" "}
            <span className="font-medium">Creative Developer</span>. For over 3
            years, I’ve been turning ideas into strong visual identities and
            clear, modern web interfaces.
          </p>
          <p className="text-black/70 text-sm mt-4">
            I believe great design is more than just beautiful: it’s functional,
            smooth, and made with people in mind. And since I like to see things
            move forward, I also take design into code, bringing projects to
            life from start to finish.
          </p>
          <div className="flex flex-col lg:flex-row  items-center justify-center gap-4 lg:gap-12 mt-8">
            <Button className="px-6 py-5 text-md text-white font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
              Book a call
              <span>
                <Image src={IconCall} alt="IconCall" />
              </span>
            </Button>
            <Button className="px-6 py-5 text-md text-black font-medium border bg-white hover:bg-white hover:opacity-50 transition-opacity">
              Download CV <FileDown className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
