import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaSun, FaMoon, FaBell } from "react-icons/fa";

const navItems = [
  { name: "Home", notify: false },
  { name: "Services", notify: false },
  { name: "project", notify: false },
  { name: "Expreience", notify: false },
  { name: "About", notify: false },
  
];

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Toggle dark class on root html
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-4 dark:bg-gray-800 shadow-md transition-colors duration-300"
    >
      {/* Desktop Navbar */}
      <div className="hidden sm:flex justify-center">
        <div className="relative flex gap-2 bg-white dark:bg-gray-900 rounded-full shadow-lg px-4 py-2 max-w-[800px] w-full">
          {navItems.map(({ name, notify }) => {
            const isActive = active === name;
            return (
              <div
                key={name}
                className="relative z-10 cursor-pointer"
                onClick={() => setActive(name)}
              >
                <button
                  className={`relative px-5 py-2 text-sm sm:text-base font-semibold transition-all duration-300 ease-in-out rounded-full overflow-hidden transform hover:scale-105 ${
                    isActive ? "text-white" : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="highlight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-sky-950 rounded-full z-0"
                        transition={{ duration: 0.25 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10 flex items-center gap-1">
                    {name}
                    {notify && (
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    )}
                  </span>
                </button>
              </div>
            );
          })}
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="ml-auto p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <FaMoon className="text-gray-800" />
            ) : (
              <FaSun className="text-yellow-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex sm:hidden justify-between items-center">
        <div className="text-xl font-bold dark:text-white">MyApp</div>
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
            className="text-xl"
          >
            {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-300" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className="sm:hidden fixed top-16 left-0 w-4/5 h-full bg-white dark:bg-gray-900 shadow-lg z-40 p-6 space-y-4"
          >
            {navItems.map(({ name, notify }) => (
              <button
                key={name}
                onClick={() => {
                  setActive(name);
                  setMenuOpen(false);
                }}
                className={`w-full text-left text-lg font-medium flex items-center justify-between transition-all ${
                  active === name
                    ? "text-rose-500"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {name}
                {notify && (
                  <FaBell className="text-red-500 animate-bounce ml-2" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
