"use client";

import { useRef } from "react";

export function CompareAirpodsSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  return (
    <section ref={containerRef} className="relative">
      <div className="bg-grey-1 h-auto min-h-screen pt-12">
        <div className="mx-auto text-center mt-20">
          <h3 className="use--font-sf-pro-display text-black-1 font-bold text-[64px] leading-[64px]">
            Which AirPods are <br /> right for you?
          </h3>
        </div>

        <div></div>
      </div>
    </section>
  );
}
