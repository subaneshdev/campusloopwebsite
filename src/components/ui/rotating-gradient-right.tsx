"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function RotatingGradientRight() {
  return (
    <section className="min-h-screen w-full bg-black text-white px-8 py-16 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* LEFT: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Unified Student Identity{" "}
            <span className="text-primary">(Loop ID)</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Experience the power of one identity across campus.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            With Loop ID, every student gets a secure, unified digital identity that connects academics, payments, placements, events, and campus life—all in one seamless profile.
          </p>
          <Button variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-black">
            Learn More <ArrowRight className="ml-2" />
          </Button>
        </div>

        {/* RIGHT: Lottie Animation */}
        <div className="flex items-center justify-center">
          <Player
            autoplay
            loop
            src="https://cdn.lottielab.com/l/APhZADx7khZHSA.json"
            style={{ height: '500px', width: '500px' }}
          />
        </div>
      </div>
    </section>
  );
}