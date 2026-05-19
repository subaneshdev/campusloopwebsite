import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function FooterCTA() {
  return (
    <footer id="cta" className="relative bg-black overflow-hidden">
      {/* CTA Section */}
      <section className="relative pt-32 pb-24">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
              The future of campus
              <br />
              is a{" "}
              <span className="text-zinc-500">
                closed loop.
              </span>
            </h2>

            {/* Email Input */}
            <div className="max-w-lg mx-auto mt-10">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-2 flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                  <input
                    type="email"
                    placeholder="director@university.edu"
                    className="w-full bg-transparent rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none transition-all"
                  />
                </div>
                <button className="group px-6 py-3.5 text-sm font-bold text-black bg-white rounded-xl shrink-0 transition-all hover:bg-zinc-200">
                  <span className="flex items-center justify-center gap-2">
                    Request Demo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              </div>
              <p className="mt-4 text-xs text-zinc-600 tracking-wide">
                For University Directors & Enterprise Recruiters
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bar */}
      <div className="border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              </div>
              <span className="text-white font-bold text-sm tracking-[0.15em] uppercase">
                Loopverse
              </span>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-xs text-zinc-600">
              {["Manifesto", "Documentation", "Privacy", "Terms"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-zinc-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-xs text-zinc-700">
              &copy; {new Date().getFullYear()} Loopverse Protocol
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
