"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function AirpodsMaxSection() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const tlAirpodsMax = gsap.timeline({
        scrollTrigger: {
          trigger: ".airpodsmax-container-animate",
          start: "top bottom",
          markers: true,
          scrub: true,
        },
      });

      tlAirpodsMax
        .to(".title-animate", { y: -200, duration: 1 }, 0)
        .to(".price-animate", { y: -200, duration: 1 }, 0);
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative">
      <section className="h-[calc(100vh-var(--spacing-size-of-navbar-to-main))]  z-5 flex items-center justify-center relative overflow-hidden airpodsmax-container-animate ">
        <div className="text-center z-2 ">
          <h1 className="use--font-sf-pro-display text-black-1 font-bold text-[180px] airpods-text-animate title-animate translate-y-[300px]">
            AirPods Max
          </h1>
          <p className=" use--font-sf-pro-display text-black-1 text-[22px] -mt-8 price-animate translate-y-[300px]">
            ₹59900.00*
          </p>

          <div className="flex items-center gap-4.75 mt-20 justify-center absolute left-1/2 -translate-x-1/2 bottom-10 ">
            <Link
              className="text-white bg-blue-2 rounded-full px-[23.5] py-3 text-[18px] use--font-halvetica-neue font-normal"
              href={"/"}
            >
              Buy
            </Link>

            <Link
              className="text-blue-1 bg-none rounded-full  text-[22px] use--font-sf-pro-display font-normal flex items-center gap-[6.5px]"
              href={"/"}
            >
              Learn more
              <ChevronRight size={20} style={{ marginTop: 3 }} />
            </Link>
          </div>
        </div>

        {/* Images */}
        <div></div>
      </section>
    </section>
  );
}
