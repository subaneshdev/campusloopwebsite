"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-4 py-8 md:py-16 bg-black">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-br from-pink-900 to-rose-800 min-h-[400px] md:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs md:max-w-sm lg:max-w-xs">
          <h2 className="text-left text-balance text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
            Campus Hire: Supercharge Your Placements with AI-Driven Campus Hire
          </h2>
          <p className="mt-3 md:mt-4 text-left text-sm md:text-base/6 text-white/80">
            From automated job matching to seamless recruiter pipelines, Campus Hire connects students to their dream careers—powered by market intelligence and real employer feedback.
          </p>
        </div>
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-blue-900 to-indigo-800">
        <h2 className="max-w-80 text-left text-balance text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
          LoopLearn: Your Smart, Friendly AI Tutor—Always On
        </h2>
        <p className="mt-3 md:mt-4 max-w-[26rem] text-left text-sm md:text-base/6 text-white/80">
          Personalized learning, 24/7 doubt clarification, gamified rewards, and outcome-based paths. With LoopLearn, every student has a mentor and a friend in their pocket.
        </p>
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-emerald-900 to-teal-800 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm md:max-w-md lg:max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-[-0.015em] text-white">
            LoopPay: One Tap. One ID. All Campus Payments via LoopPay
          </h2>
          <p className="mt-3 md:mt-4 max-w-[26rem] text-left text-sm md:text-base/6 text-white/80">
            Cashless UPI, QR, NFC, and card transactions—earn Loop Coins, track expenses, and never miss a due with integrated, always-on payment convenience.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}