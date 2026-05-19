import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            The System is{" "}
            <span className="text-zinc-500">Broken</span>.
            <br />
            We Built a{" "}
            <span className="text-white">New One</span>.
          </h2>
          <p className="text-zinc-500 text-lg font-light">
            Move from trust-based hiring to truth-based hiring.
          </p>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* OLD WAY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-zinc-700" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-zinc-700 border border-zinc-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                The Old Way
              </span>
            </div>

            <div className="space-y-6">
              {[
                "Unverified LinkedIn profiles padding weak resumes",
                "Hundreds of hours wasted on repetitive screening",
                "Exorbitant fees for non-industry-ready curriculums",
                "A static teaching model unchanged for decades",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1.5 w-5 h-px bg-zinc-600 shrink-0" />
                  <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NEW WAY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl border border-zinc-700 bg-zinc-950 p-8 md:p-10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />

            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-white border border-white/50" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
                The Loopverse Way
              </span>
            </div>

            <div className="space-y-6">
              {[
                "Cryptographically verified credentials — no faking",
                "AI-led continuous screening and validation, 24/7",
                "Personalized learning that adapts in real-time",
                "A unified, self-sustaining campus economy",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1.5 w-5 h-px bg-white/40 shrink-0" />
                  <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
