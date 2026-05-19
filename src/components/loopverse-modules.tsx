import { motion } from "framer-motion";
import {
  Fingerprint,
  MessageSquare,
  BrainCircuit,
  Briefcase,
  Database,
  ShoppingCart,
  CreditCard,
  Coins,
} from "lucide-react";

const modules = [
  {
    id: "loop-id",
    title: "Loop ID",
    subtitle: "Blockchain Identity",
    description: "Cryptographically verified student identity — the single source of truth for all records.",
    icon: Fingerprint,
  },
  {
    id: "campus-loop",
    title: "Campus Loop",
    subtitle: "AI-Agent ERP",
    description: "Conversational campus management. Talk to AI agents, not forms.",
    icon: MessageSquare,
  },
  {
    id: "loop-learn",
    title: "Loop Learn",
    subtitle: "Adaptive Training",
    description: "AI engine that continuously validates real skills beyond grades and exams.",
    icon: BrainCircuit,
  },
  {
    id: "loop-hire",
    title: "Loop Hire",
    subtitle: "Talent Marketplace",
    description: "Recruiters hire from pre-verified pools. Zero screening rounds needed.",
    icon: Briefcase,
  },
  {
    id: "loop-memory",
    title: "Loop Memory",
    subtitle: "Knowledge Graph",
    description: "Persistent intelligence tracking how your abilities evolve over time.",
    icon: Database,
  },
  {
    id: "loop-shop",
    title: "Loop Shop",
    subtitle: "Verified Marketplace",
    description: "Brands engage with verified students. Exclusive deals, real identities.",
    icon: ShoppingCart,
  },
  {
    id: "loop-pay",
    title: "Loop Pay",
    subtitle: "Campus Payments",
    description: "Secure, ID-linked payments. UPI, P2P transfers, campus commerce.",
    icon: CreditCard,
  },
  {
    id: "loop-coin",
    title: "Loop Coin",
    subtitle: "Reward Tokens",
    description: "Learning earns tokens. Tokens unlock value. Education becomes rewarding.",
    icon: Coins,
  },
];

export default function LoopverseModules() {
  return (
    <section id="ecosystem" className="relative py-32 overflow-hidden bg-black">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-4">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Eight Engines.{" "}
            <span className="text-zinc-500">One Loop.</span>
          </h2>
          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            Interconnected modules forming the infrastructure of the future campus.
            Each feeds the next — creating a flywheel that gets stronger with scale.
          </p>
        </motion.div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-zinc-800/60 bg-zinc-950 p-6 transition-all duration-500 hover:border-zinc-600 hover:bg-zinc-900 cursor-pointer overflow-hidden"
            >
              {/* Top line accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-white/0 group-hover:bg-white/20 transition-all duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-5 group-hover:border-zinc-600 transition-colors">
                  <mod.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-white mb-1">
                  {mod.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider block mb-3">
                  {mod.subtitle}
                </span>
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
