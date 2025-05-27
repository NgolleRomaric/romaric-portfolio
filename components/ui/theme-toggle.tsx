"use client";

import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="relative flex items-center justify-center bg-secondary hover:bg-secondary/80 dark:bg-secondary/10 dark:hover:bg-secondary/20 rounded-full p-2 cursor-pointer w-10 h-10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: theme === "dark" ? 0 : 1,
          scale: theme === "dark" ? 0.5 : 1,
          rotate: theme === "dark" ? 90 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun size={20} className="text-foreground" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: theme === "dark" ? 1 : 0,
          scale: theme === "dark" ? 1 : 0.5,
          rotate: theme === "dark" ? 0 : -90,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon size={20} className="text-foreground" />
      </motion.div>
    </motion.div>
  );
}
