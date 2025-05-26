import { Button } from "@/components/ui/button";
import Image from "next/image";
import IconCall from "@/public/call icon.svg";

export function BookCallButton() {
  return (
    <Button
      className="px-6 py-5 text-md text-white font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity"
      asChild
    >
      <a
        href="https://cal.com/romaric-ngolle-edqtc3/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a call
        <span>
          <Image src={IconCall} alt="IconCall" />
        </span>
      </a>
    </Button>
  );
}
