import { motion } from "framer-motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">
            Our Manifesto
          </span>

          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.3] tracking-tight">
            <span className="text-zinc-600">"</span>
            We don&apos;t believe in fixing a broken system.
            <br />
            We believe in{" "}
            <span className="text-white font-normal">
              replacing it
            </span>{" "}
            entirely.
            <span className="text-zinc-600">"</span>
          </blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                number: "01",
                title: "Truth Over Trust",
                desc: "Every credential verified by cryptographic proof and AI validation."
              },
              {
                number: "02",
                title: "Skills Over Degrees",
                desc: "What you can do matters more than where you studied."
              },
              {
                number: "03",
                title: "Access Over Gatekeeping",
                desc: "If you have the skills, you deserve the opportunity. Period."
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="text-left"
              >
                <span className="text-xs font-mono text-zinc-600 block mb-3">
                  {item.number}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
