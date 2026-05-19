import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import { ArrowRight } from "lucide-react";

export default function StoryScroll() {
  return (
    <div id="story">
      <FlowArt aria-label="LoopVerse Story">
        {/* Chapter 1: The Problem */}
        <FlowSection
          aria-label="The Problem"
          style={{
            background: "#000",
            color: "#fff",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
            01 — The Broken System
          </p>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
              Resumes
              <br />
              <span className="text-zinc-700">Are</span>
              <br />
              <span className="text-white">
                Fiction
              </span>
            </h2>
          </div>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <p className="mt-auto max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-zinc-400">
            67% of resumes contain exaggerated or false claims. Recruiters spend 23 seconds
            per resume — deciding careers on vibes, not verified data.
            <span className="block mt-4 text-zinc-600 text-[0.85em]">
              The entire hiring pipeline is built on a foundation of trust that doesn&apos;t exist.
            </span>
          </p>
        </FlowSection>

        {/* Chapter 2: The Vision */}
        <FlowSection
          aria-label="The Vision"
          style={{
            background: "#fff",
            color: "#000",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
            02 — The Loopverse Protocol
          </p>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tight text-black">
              Verified
              <br />
              By
              <br />
              Design
            </h2>
          </div>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-black/60">
            A self-sustaining ecosystem where every skill is AI-evaluated, every credential
            is cryptographically sealed, and every hire is based on proof — not promises.
          </p>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              {
                title: "Loop ID",
                desc: "Blockchain-verified identity. One ID across your entire academic and professional career."
              },
              {
                title: "AI Validation",
                desc: "Continuous, real-time skill verification through AI proctored assessments — not self-reported claims."
              },
              {
                title: "Zero Friction",
                desc: "Recruiters hire directly from a pool of pre-verified talent. No screening rounds needed."
              },
            ].map((item) => (
              <div key={item.title} className="min-w-[200px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">
                  {item.title}
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/50">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* Chapter 3: The Engine */}
        <FlowSection
          aria-label="How It Works"
          style={{
            background: "#f5f5f5",
            color: "#000",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">
            03 — The Engine
          </p>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tight text-black">
              Learn.
              <br />
              <span className="text-black/30">Prove.</span>
              <br />
              Hire.
            </h2>
          </div>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-black/50">
            Three pillars. One closed loop. Every interaction feeds the next,
            creating a flywheel that gets stronger with every user.
          </p>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              {
                step: "01",
                title: "Loop Learn",
                desc: "AI-powered curriculum that adapts in real-time. Personalized paths, not one-size-fits-all lectures."
              },
              {
                step: "02",
                title: "Loop Memory",
                desc: "A persistent intelligence layer tracking how your skills evolve. Your growth, mapped forever."
              },
              {
                step: "03",
                title: "Loop Hire",
                desc: "Recruiters access pre-verified talent pools. Zero screening rounds. Hire in 48 hours."
              },
            ].map((item) => (
              <div key={item.step} className="min-w-[200px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">
                  {item.step} — {item.title}
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-[2vw] border-none h-px bg-black/10" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              {
                step: "04",
                title: "Campus Loop",
                desc: "AI-agent ERP that replaces form-based workflows with conversational, task-executing interfaces."
              },
              {
                step: "05",
                title: "Loop Shop & Pay",
                desc: "An integrated campus economy. Verified students, secure payments, and exclusive brand deals."
              },
              {
                step: "06",
                title: "Loop Coin",
                desc: "Learning earns you tokens. Tokens earn you access. A reward system that makes education valuable."
              },
            ].map((item) => (
              <div key={item.step} className="min-w-[200px] flex-1">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black">
                  {item.step} — {item.title}
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-black/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FlowSection>

        {/* Chapter 4: The Impact */}
        <FlowSection
          aria-label="The Impact"
          style={{
            background: "#111",
            color: "#fff",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            04 — The Impact
          </p>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
              Future
              <br />
              <span className="text-white/20">Of</span>
              <br />
              Campus
            </h2>
          </div>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <div className="flex flex-wrap gap-[3vw]">
            {[
              { stat: "14K+", desc: "Verified student profiles across 12 campuses" },
              { stat: "98%", desc: "Recruiter satisfaction with pre-verified hires" },
              { stat: "$0", desc: "Cost of technical screening for hiring partners" },
            ].map((item) => (
              <div key={item.stat} className="min-w-[180px] flex-1">
                <p className="mb-2 text-3xl md:text-4xl font-black tracking-tight text-white">
                  {item.stat}
                </p>
                <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-zinc-400">
            Education has been broken for decades. We&apos;re not fixing it —
            we&apos;re replacing it with something that actually works.
          </p>
        </FlowSection>

        {/* Chapter 5: The CTA */}
        <FlowSection
          aria-label="Join the Loop"
          style={{
            background: "#000",
            color: "#fff",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            05 — Join the Loop
          </p>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <div>
            <h2 className="text-[clamp(3rem,10vw,12rem)] font-black leading-[0.85] uppercase tracking-tight">
              Your
              <br />
              Move.
            </h2>
          </div>
          <hr className="my-[2vw] border-none h-px bg-white/10" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-zinc-400">
            Whether you&apos;re a university director, a recruiter, or a student who&apos;s
            tired of the old way — the loop starts with you.
          </p>
          <div className="mt-8">
            <a
              href="#cta"
              className="group inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
            >
              Deploy to Your Campus
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FlowSection>
      </FlowArt>
    </div>
  );
}
