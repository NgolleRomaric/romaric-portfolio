"use client";

import Image from "next/image";
import LogoRomaric from "@/public/logo 1.svg";
import IconCall from "@/public/call icon.svg";
import { Sun, AlignRight, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "/projet" },
    { label: "Offers", href: "#offers" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <section className="lg:mt-6 fixed w-full top-5 z-50 px-2">
      <div className="p-2.5 border border-black/20 rounded-[35px]  max-w-sm md:max-w-xl lg:max-w-5xl mx-auto backdrop-blur bg-white/30">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoRomaric}
              alt="Logo Romaric"
              className="h-[#50px] w-[#50px]"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:block">
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
                  href="#services"
                  className="text-black hover:text-black/50 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projet"
                  className="text-black hover:text-black/50 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#offers"
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

          {/* Realy Navigation desktop */}
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

          {/* Bouton menu mobile avec animation */}
          <motion.button
            className="mr-1 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <AlignRight
                size={32}
                strokeWidth={1.5}
                className="text-black/30"
              />
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={32} strokeWidth={1.5} className="text-black/30" />
            </motion.div>
          </motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 py-4 mt-6">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label} className="">
                    {link.label}
                  </a>
                ))}
                <Button className="px-6 py-5 mt-6 text-md text-white font-medium bg-gradient-to-r from-black from-[65%] to-[#666666] to-[100%] border-0 hover:opacity-80 transition-opacity">
                  Book a call{" "}
                  <span>
                    <Image src={IconCall} alt="IconCall" />
                  </span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
