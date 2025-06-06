"use client";

import Image from "next/image";
import LogoRomaric from "@/public/logo 1.svg";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BookCallButton } from "@/components/ui/book-call-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/#services" }, // Ajout du / avant le #
    { label: "Projects", href: "/projet" },
    { label: "Offers", href: "/#offers" }, // Ajout du / avant le #
    { label: "Blog", href: "/blog" },
  ];

  return (
    <section className="lg:mt-6 fixed w-full top-5 z-50 px-2">
      <div className="p-2.5 border border-black/20 dark:border-border rounded-[35px] max-w-sm md:max-w-xl lg:max-w-5xl mx-auto backdrop-blur bg-white/70 dark:bg-secondary/90">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="w-[50px] h-[50px]">
            <Image
              src={LogoRomaric}
              alt="Logo Romaric"
              className="w-full h-full"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-xm">
              <li>
                <Link
                  href="/about"
                  className="text-black dark:text-white dark:hover:opacity-50 hover:text-black/50 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#services" // Modification ici
                  className="text-black dark:text-white dark:hover:opacity-50 hover:text-black/50 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projet"
                  className="text-black dark:text-white dark:hover:opacity-50 hover:text-black/50 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#offers" // Modification ici
                  className="text-black dark:text-white dark:hover:opacity-50 hover:text-black/50 transition-colors"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-black dark:text-white dark:hover:opacity-50 hover:text-black/50 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Actions mobile et desktop */}
          <div className="flex items-center lg:hidden">
            <ThemeToggle />
          </div>

          {/* Bouton menu mobile */}
          <motion.button
            className="relative flex items-center justify-center lg:hidden w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute dark:text-white"
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0.5 : 1,
              }}
              transition={{ duration: 0.15 }}
            >
              <AlignRight
                size={24}
                strokeWidth={1.5}
                className="text-black/50 dark:text-white/50"
              />
            </motion.div>
            <motion.div
              className="absolute"
              animate={{
                opacity: isOpen ? 1 : 0,
                scale: isOpen ? 1 : 0.5,
              }}
              transition={{ duration: 0.15 }}
            >
              <X
                size={24}
                strokeWidth={1.5}
                className="text-black/50 dark:text-white/50"
              />
            </motion.div>
          </motion.button>

          {/* Actions desktop uniquement */}
          <div className="hidden lg:flex items-center gap-5">
            <BookCallButton />
            <ThemeToggle />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-4 mt-6">
                {navLinks.map((link) => (
                  <a href={link.href} key={link.label} className="">
                    {link.label}
                  </a>
                ))}
                <BookCallButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
