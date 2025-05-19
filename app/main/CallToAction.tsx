import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import IconCall from "@/public/call icon.svg";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-20 px-2">
      <Card className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-black/20 p-12 bg-card max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
        <h2 className="text-center text-primary font-medium text-3xl mt-8 max-w-xs md:max-w-xl lg:max-w-2xl">
          Ready to bring your project to life?
        </h2>
        <h4 className="text-center text-xl max-w-xs md:max-w-xl lg:max-w-2xl">
          Let’s discuss your ideas and create something exceptional together.
        </h4>
        <Button className="px-6 py-5 text-md text-white mt-8 font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
          Book a call
          <span>
            <Image src={IconCall} alt="IconCall" />
          </span>
        </Button>
      </Card>
    </section>
  );
}
