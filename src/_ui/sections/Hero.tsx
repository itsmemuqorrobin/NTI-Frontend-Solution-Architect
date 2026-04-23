"use client";

import { IllustrationImageURL } from "@/_lib/utils/variables";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const airpodsLeft = useRef<HTMLImageElement | null>(null);
  const airpodsRight = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 64rem)",
          isUltraWide: "(min-width: 120rem)",
        },
        (context) => {
          const { isUltraWide, isDesktop } = context.conditions;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".container-animate",
              start: "bottom bottom",
              //   markers: true,
              scrub: true,
              pin: true,
            },
          });

          tl.fromTo(
            ".airpods-text-animate",
            { scale: 1, fontSize: "123px" },
            { scale: 0.8, fontSize: "100px" },
            0,
          )
            .fromTo(
              ".airpods-left-animate",
              { scale: 0.5, x: -100 },
              {
                scale: isUltraWide ? 2.5 : isDesktop ? 2 : 2,
                x: isUltraWide ? 600 : isDesktop ? 320 : 320,
                filter: "blur(1.5px)",
              },
              0,
            )
            .fromTo(
              ".airpods-right-animate",
              { scale: 0, x: 100 },
              {
                scale: isUltraWide ? 3.5 : isDesktop ? 3 : 3,
                x: isUltraWide ? -620 : isDesktop ? -320 : -320,
                filter: "blur(1.5px)",
              },
              0,
            );
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative">
      <section className="bg-grey-1 h-[calc(100vh-var(--spacing-size-of-navbar-to-main))]  z-5 flex items-center justify-center container-animate relative overflow-hidden ">
        <div className="text-center z-2">
          <h1 className="use--font-sf-pro-display text-black-1 font-bold text-[123px] airpods-text-animate">
            AirPods
          </h1>
          <h2 className="use--font-sf-pro-display text-black-1 font-bold text-[22px] -mt-[30px]">
            3rd generation
          </h2>
          <p className=" use--font-sf-pro-display text-black-1 text-[22px] mt-1 ">
            From ₹19900.00*
          </p>

          <div className="flex items-center gap-4.75 mt-20 justify-center ">
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
        <div className="absolute top-0 left-0 right-0 bottom-0 z-3">
          <Image
            src={`${IllustrationImageURL}hero_airpods_left.svg`}
            alt="AirPods Left"
            width={400}
            height={800}
            className="h-auto w-auto ultrawide:h-[820px] ultrawide:w-[419px]  absolute top-[23%] ultrawide:top-[27%] right-[10%] ultrawide:right-[26%]  airpods-left-animate  "
            priority
            ref={airpodsLeft}
          />

          <Image
            src={`${IllustrationImageURL}hero_airpods_right.svg`}
            alt="AirPods Right"
            width={200}
            height={600}
            className="h-auto w-auto ultrawide:h-[992px] ultrawide:w-[420px]  absolute top-[10%] ultrawide:top-[2%] left-[10%] ultrawide:left-[30%] airpods-right-animate  "
            priority
            ref={airpodsRight}
          />
        </div>
      </section>
    </section>
  );
}
