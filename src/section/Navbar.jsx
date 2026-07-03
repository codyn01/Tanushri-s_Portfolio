/** 
 * @copyright 2025 Looknath
 * @license Apache-2.0
*/

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const MainNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rightOffset, setRightOffset] = useState(64);
  const [distance, setDistance] = useState(60); // 🔹 reduced radius

  useEffect(() => {
    const updatePosition = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 640) {
        setRightOffset(40);
        setDistance(45); // mobile radius
      } else if (screenWidth < 1024) {
        setRightOffset(56);
        setDistance(55); // tablet radius
      } else {
        setRightOffset(64);
        setDistance(60); // desktop radius
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  // Auto-close after 5s
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => setIsExpanded(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  const navItems = [
  { href: "#home", label: "Home", icon: "home" },
  { href: "#work", label: "Work", icon: "work" },
  { href: "#projects", label: "Projects", icon: "folder" },
  { href: "#about", label: "Me", icon: "account_circle" },

  { href: "#certificates", label: "Certificates", icon: "workspace_premium" },

  { href: "#contact", label: "Contact", icon: "contact_mail" },
];
  const handleClick = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      {/* Top Nav */}
      <div className="max-auto c-space max-w-[2000px]">
        <div className="flex items-center justify-between py-4 sm:py-3">
                <div className="relative inline-flex items-center gap-1 -ml-22">               
                  <a
                  href="/"
                 className="text-lg font-bold rainbow-text rainbow-glow animate-heartbeat hover:animate-none px-4 py-2 relative
              before:absolute before:inset-0 before:-z-9
              before:bg-gradient-to-r before:from-cyan-500 before:to-purple-500
              before:rounded-lg before:blur-lg before:opacity-75
              before:animate-pulse
              border border-white/20 rounded-lg"
                >
                  {"<build.with.tanu/>"}
                </a>
              </div>
            </div>
          </div>
         
      {/* Floating Menu */}
      <div
        className="fixed top-1/2 transform -translate-y-1/2 z-50"
        style={{ right: "23px" }}
      >
        {/* Main Toggle Button with Aqua Glow */}
          {!isExpanded && (
            <motion.button
              onClick={handleClick}
              className="relative backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg overflow-hidden transition-all"
              aria-label="Open menu"
              initial={{ boxShadow: "0 0 8px rgba(0, 255, 255, 0.4)" }}
              animate={{ boxShadow: "0 0 12px rgba(0, 255, 255, 0.7)" }}
              whileHover={{ boxShadow: "0 0 20px rgba(0, 255, 255, 1)" }}
              whileTap={{ boxShadow: "0 0 30px rgba(0, 255, 255, 1)", scale: 0.85 }}
            >
              {/* 🔹 Constant dim aqua glow */}
              <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-10 blur-md animate-pulse"></span>

              {/* 🔹 Low spark effect */}
              <span className="absolute inset-0 rounded-full bg-white opacity-5 animate-[spark_3s_linear_infinite] pointer-events-none"></span>

              {/* 🔹 Glow boost on hover/tap */}
              <motion.span
                className="absolute inset-0 rounded-full bg-cyan-400"
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 0.6, scale: 1.8 }}
                whileTap={{ opacity: 0.9, scale: 2.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Updated icon with pulse effect */}
              <motion.span
                className="material-icons text-xl relative z-10"
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                menu_open
              </motion.span>
            </motion.button>
          )}

        {/* Floating Buttons */}
        <AnimatePresence>
          {isExpanded &&
            navItems.map((item, index) => {
              const angleStart = -90;
              const angleEnd = 90;
              const angleStep = (angleEnd - angleStart) / (navItems.length - 1);

              const angle = angleStart + angleStep * index;
              const x = Math.cos((angle * Math.PI) / 180) * distance * -1;
              const y = Math.sin((angle * Math.PI) / 180) * distance;

              return (
                <motion.div
                  key={item.href}
                  className="relative group"
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{ scale: 1, opacity: 1, x, y }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.4, ease: "easeInOut" }, // 🔹 smooth collapse
                  }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.a
                    href={item.href}
                    className="relative backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-300"
                    whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)" }}
                    whileTap={{ scale: 0.9, boxShadow: "0 0 25px rgba(0, 255, 255, 1)" }}
                    aria-label={item.label}
                  >
                    {/* 🔹 Constant dim aqua glow */}
                    <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-10 blur-md animate-pulse"></span>

                    {/* 🔹 Glow boost on hover/tap */}
                    <motion.span
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 0.6, scale: 1.8 }}
                      whileTap={{ opacity: 0.9, scale: 2.2 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    <span className="material-icons text-xl relative z-10">
                      {item.icon}
                    </span>
                  </motion.a>

                  {/* Tooltip */}
                  <span className="absolute top-12 left-1/2 transform -translate-x-1/2 text-sm text-black bg-white rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none shadow-lg whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainNavbar;
