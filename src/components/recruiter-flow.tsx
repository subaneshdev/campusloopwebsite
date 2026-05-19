import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star, CheckCircle, Zap, ShieldCheck, ArrowRight } from "lucide-react";

const mockCandidates = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Full-Stack Engineer",
    initials: "AR",
    score: 94,
    skills: ["React", "Node.js", "Solidity"],
    dataPoints: [
      { label: "Java Proficiency", value: "94%", verified: true },
      { label: "Mock Interview", value: "Top 5%", verified: true },
      { label: "Startup Internship", value: "On-Chain", verified: true },
    ],
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Smart Contract Dev",
    initials: "SC",
    score: 98,
    skills: ["Rust", "Solidity", "Cryptography"],
    dataPoints: [
      { label: "Rust Proficiency", value: "98%", verified: true },
      { label: "Contract Audit", value: "0 Vulns", verified: true },
      { label: "Hackathon Winner", value: "Verified", verified: true },
    ],
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "UI/UX Designer",
    initials: "JL",
    score: 91,
    skills: ["Figma", "Framer", "CSS"],
    dataPoints: [
      { label: "UI/UX Score", value: "91%", verified: true },
      { label: "Design Challenge", value: "Exceptional", verified: true },
      { label: "Live Projects", value: "3 On-Chain", verified: true },
    ],
  },
];

export function RecruiterFlow() {
  const [hired, setHired] = useState<number | null>(null);

  return (
    <section id="recruiters" className="relative py-32 overflow-hidden bg-black">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
            For Recruiters
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop Reviewing.{" "}
            <br className="hidden sm:block" />
            <span className="text-zinc-500">Start Hiring.</span>
          </h2>
          <p className="text-zinc-500 text-lg font-light">
            Pre-verified talent pools. Zero screening rounds. Hire in 48 hours.
          </p>
        </motion.div>

        {/* Dashboard Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Browser chrome */}
          <div className="rounded-t-2xl border border-b-0 border-zinc-800 bg-zinc-950 p-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
              <div className="w-3 h-3 rounded-full bg-zinc-800" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900 rounded-lg border border-zinc-800 text-xs text-zinc-500">
                <ShieldCheck className="w-3 h-3 text-white/40" />
                hire.loopverse.io/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="rounded-b-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
            {/* Search bar */}
            <div className="border-b border-zinc-800/40 p-5 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input
                  type="text"
                  placeholder="Search verified skills..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 transition-colors"
                  defaultValue="Senior React Developer"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                  Auto-Verified
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-white/40" />
                  Instant Hire
                </span>
              </div>
            </div>

            {/* Candidate Cards */}
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockCandidates.map((c, idx) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group rounded-xl border border-zinc-800 bg-black overflow-hidden hover:border-zinc-700 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="p-5">
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white text-black flex items-center justify-center text-sm font-bold shrink-0">
                        {c.initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-white font-semibold text-sm flex items-center gap-1.5 truncate">
                          {c.name}
                          <CheckCircle className="w-3.5 h-3.5 text-white/40 shrink-0" />
                        </h4>
                        <p className="text-zinc-500 text-xs mt-0.5">{c.role}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Data Points */}
                  <div className="px-5 pb-4 space-y-3">
                    {c.dataPoints.map((dp, i) => (
                      <div key={i} className="flex justify-between items-center text-xs">
                        <span className="text-zinc-500">{dp.label}</span>
                        <span className="text-zinc-300 font-mono">{dp.value}</span>
                      </div>
                    ))}

                    <div className="flex justify-between items-center pt-3 border-t border-zinc-800/30">
                      <span className="text-zinc-500 text-xs flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-white/30" fill="currentColor" />
                        Loop Score
                      </span>
                      <span className="text-lg font-bold text-white">{c.score}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <button
                      onClick={() => setHired(c.id)}
                      disabled={hired === c.id}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        hired === c.id
                          ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                          : "bg-white text-black hover:bg-zinc-200"
                      }`}
                    >
                      {hired === c.id ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Contract Signed
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          Hire Instantly
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
          >
            Explore full dashboard
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
