"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.to(".box", {
        scrollTrigger: {
          trigger: ".box",
          start: "top center",
          markers: true,
          scrub: true,
          pin: true,
        },
        x: 500,
        duration: 3,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <section className="bg-grey-1 h-screen mt-size-of-navbar-to-main z-5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="use--font-sf-pro-display text-black-1 font-bold text-[123px]">
            AirPods
          </h1>
          <h2 className="use--font-sf-pro-display text-black-1 font-bold text-[22px] -mt-[30px]">
            3rd generation
          </h2>
          <p className=" use--font-sf-pro-display text-black-1 text-[22px] mt-1 ">
            From ₹19900.00*
          </p>
        </div>

        <div>
          {/* <Image
          src={"/images/illustrations/hero_airpods_left.png"}
          alt="AirPods Right"
          width={500}
          height={500}
          className="absolute top-[314.96px] left-[1112.84px]"
        /> */}
        </div>
      </section>

      <h1 className="box py-20 bg-blue-1 text-white w-20 px-20">Testing</h1>

      <div className="h-screen mt-20">
        <p className="text-center text-2xl font-bold">
          Scroll down to see the animation
        </p>
      </div>
    </section>
  );
}
