import Image from "next/image";
import LogoRomaric from "@/public/logo 1.svg";
import IconCall from "@/public/call icon.svg";
import { Sun, AlignRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <section className="mt-11 lg:mt-6 sticky top-5 z-50">
      <div className="flex items-center justify-between p-2.5 border border-black/20 rounded-full max-w-xs md:max-w-xl lg:max-w-5xl mx-auto backdrop-blur bg-white/30">
        <Image
          src={LogoRomaric}
          alt="Logo Romaric"
          className="h-[#50px] w-[#50px]"
        />
        <nav className="flex justify-center hidden lg:block">
          <ul className="flex space-x-6 text-xm">
            <li>
              <Link
                href="/about"
                className="text-black hover:text-black/50 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-black hover:text-black/50 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-black hover:text-black/50 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/offers"
                className="text-black hover:text-black/50 transition-colors"
              >
                Offers
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-black hover:text-black/50 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center justify-between gap-5">
          <div className="hidden lg:inline-block">
            <Button className="px-6 py-5 text-md text-white font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
              Book a call{" "}
              <span>
                <Image src={IconCall} alt="IconCall" />
              </span>
            </Button>
          </div>
          <div className="flex items-center bg-secondary rounded-full p-2 cursor-pointer">
            <Sun size={32} strokeWidth={1.5} className="text-black/30" />
          </div>
        </div>
        <div className="mr-1 lg:hidden">
          <AlignRight size={32} strokeWidth={1.5} className="text-black/30" />
        </div>
      </div>
    </section>
  );
}
