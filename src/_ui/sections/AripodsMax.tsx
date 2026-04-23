"use client";

import { IllustrationImageURL } from "@/_lib/utils/variables";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function AirpodsMaxSection() {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 64rem)",
          isUltraWide: "(min-width: 120rem)",
        },
        (context) => {
          const { isUltraWide, isDesktop } = context.conditions ?? {};

          const tlAirpodsMax = gsap.timeline({
            scrollTrigger: {
              trigger: ".airpodsmax-container-animate",
              start: "top bottom",
              //   markers: true,
              scrub: true,
            },
          });

          tlAirpodsMax
            .to(
              ".title-animate",
              { y: isUltraWide ? -300 : isDesktop ? -200 : -200, duration: 1 },
              0,
            )
            .to(
              ".price-animate",
              { y: isUltraWide ? -300 : isDesktop ? -200 : -200, duration: 1 },
              0,
            )
            .to(
              ".airpodsmax-animate ",
              { y: isUltraWide ? -300 : isDesktop ? -200 : -200, duration: 1 },
              0,
            );
        },
      );
    },

    { scope: containerRef },
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 64rem)",
          isUltraWide: "(min-width: 120rem)",
        },
        (context) => {
          const { isUltraWide, isDesktop } = context.conditions ?? {};

          const tlAirPodsMaxScrollInSection = gsap.timeline({
            scrollTrigger: {
              trigger: ".airpodsmax-container-animate",
              start: "bottom bottom",
              //   markers: true,
              scrub: 1.5,
              pin: true,
            },
          });

          tlAirPodsMaxScrollInSection
            .to(
              ".title-animate",
              {
                scale: isUltraWide ? 0.8 : isDesktop ? 0.7 : 0.7,
                fontSize: isUltraWide ? "183px" : isDesktop ? "123px" : "123px",
                duration: 1,
              },
              0,
            )
            .to(
              ".airpodsmax-animate ",
              {
                scale: 1.2,
                y: isUltraWide ? -700 : isDesktop ? -570 : -570,
                duration: 1,
                filter: "blur(12px)",
                immediateRender: false,
              },
              0,
            );
        },
      );
    },

    { scope: containerRef },
  );

  return (
    <main role="main" ref={containerRef} className="relative">
      <section className="h-[calc(100vh-var(--spacing-size-of-navbar-to-main))]  z-5 flex items-center justify-center relative overflow-hidden airpodsmax-container-animate ">
        <div className="text-center z-2 ">
          <h1 className="use--font-sf-pro-display text-black-1 font-bold text-[180px] airpods-text-animate title-animate translate-y-[300px] ultrawide:text-[240px]">
            AirPods Max
          </h1>
          <p className=" use--font-sf-pro-display text-black-1 text-[20px] -mt-10 price-animate translate-y-[300px]">
            ₹59900.00*
          </p>

          <div className="flex items-center gap-4.75 mt-20 justify-center absolute left-1/2 -translate-x-1/2 bottom-7 ultrawide:bottom-[100px] ">
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
        <div className="absolute top-0 left-0 right-0 bottom-0 z-3   mx-auto">
          <Image
            src={`${IllustrationImageURL}airpods_max.svg`}
            alt="AirPods Max"
            width={200}
            height={200}
            className=" w-[800px] h-[550px] ultrawide:w[1200px] ultrawide:h-[700px] absolute left-1/2 -translate-x-1/2 top-[25%] airpodsmax-animate  "
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
