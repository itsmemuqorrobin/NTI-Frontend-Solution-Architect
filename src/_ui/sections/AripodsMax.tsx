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
      const tlAirpodsMax = gsap.timeline({
        scrollTrigger: {
          trigger: ".airpodsmax-container-animate",
          start: "top bottom",
          //   markers: true,
          scrub: true,
        },
      });

      tlAirpodsMax
        .to(".title-animate", { y: -200, duration: 1 }, 0)
        .to(".price-animate", { y: -200, duration: 1 }, 0)
        .to(".airpodsmax-animate ", { y: -200, duration: 1 }, 0);

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
        .to(".title-animate", { scale: 0.7, fontSize: "123px", duration: 1 }, 0)
        .to(
          ".airpodsmax-animate ",
          {
            scale: 1.2,
            y: -500,
            duration: 1,
            filter: "blur(12px)",
            immediateRender: false,
          },
          0,
        );
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
        <div className="absolute w-[500px] h-[300px]  top-0 left-0 right-0 bottom-0 z-3   mx-auto">
          <Image
            src={`${IllustrationImageURL}airpods_max.svg`}
            alt="AirPods Max"
            width={200}
            height={200}
            className=" w-auto h-auto absolute top-1/2 translate-y-[60px] airpodsmax-animate  "
            loading="lazy"
          />
        </div>
      </section>
    </section>
  );
}
