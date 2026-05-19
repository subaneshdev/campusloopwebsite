import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "For Recruiters", href: "#recruiters" },
  { label: "Manifesto", href: "#manifesto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/60 backdrop-blur-2xl border-b border-white/[0.06]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8">
              <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-black" />
              </div>
            </div>
            <span className="text-white font-bold text-lg tracking-[0.15em] uppercase">
              Loopverse
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-white font-light tracking-wide"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-black bg-white rounded-full w-fit"
              >
                Request Demo
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
