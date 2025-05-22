"use client";

import Image from "next/image";
import LogoRomaric from "@/public/logo 1.svg";
import IconCall from "@/public/call icon.svg";
import { Sun, AlignRight, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <section className="mt-6 lg:mt-6 sticky top-5 z-50 px-2">
      <div className="flex items-center justify-between p-2.5 border border-black/20 rounded-full max-w-sm md:max-w-xl lg:max-w-5xl mx-auto backdrop-blur bg-white/30">
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

        {/* Navigation mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white/95 backdrop-blur-sm border border-black/20 rounded-4xl lg:hidden"
            >
              <motion.nav className="flex flex-col items-center justify-center h-full">
                <motion.ul className="flex flex-col space-y-8 text-xl">
                  {[
                    { href: "/about", label: "About" },
                    { href: "#services", label: "Services" },
                    { href: "/projet", label: "Projects" },
                    { href: "#offers", label: "Offers" },
                    { href: "/blog", label: "Blog" },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="text-black hover:text-black/50 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

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
            <AlignRight size={32} strokeWidth={1.5} className="text-black/30" />
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
    </section>
  );
}
