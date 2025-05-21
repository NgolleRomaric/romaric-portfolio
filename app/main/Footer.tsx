import Image from "next/image";
import LogoRomaric from "@/public/logo 2.svg";
import Linkedin from "@/public/linkedin.svg";
import Behance from "@/public/behance.svg";
import Dribble from "@/public/dribble.svg";
import X from "@/public/x.svg";
import Link from "next/link";

const logos = [
  { name: "Linkedin", image: Linkedin },
  { name: "Behance", image: Behance },
  { name: "Dribble", image: Dribble },
  { name: "X", image: X },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-8 px-4 mt-12">
      <div className="container mx-auto max-w-sm md:max-w-xl lg:max-w-5xl items-center mt-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:justify-between">
          <Link href="/">
            <Image
              src={LogoRomaric}
              alt="Logo Romaric"
              width={50}
              height={50}
            />
          </Link>
          <nav className="">
            <ul className="flex flex-col items-center space-y-2 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-6 text-md">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-black/50 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white hover:text-black/50 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-white hover:text-black/50 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="text-white hover:text-black/50 transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-black/50 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3 items-center">
            {logos.map((logo) => (
              <Image
                src={logo.image}
                key={logo.name}
                alt={logo.name}
                className="w-8 h-8 hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-white fint-medium text-md text-center mt-12">
            © 2025 Romaic Ngolle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
