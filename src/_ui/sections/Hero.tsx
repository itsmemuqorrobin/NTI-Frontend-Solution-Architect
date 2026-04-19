"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { use, useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const airpodsLeft = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".container-animate",
          start: "bottom bottom",
          markers: true,
          scrub: true,
          pin: true,
          onLeave: () => {
            airpodsLeft.current?.classList.add("blur-[3px]");
          },
          onEnterBack: () => {
            airpodsLeft.current?.classList.remove("blur-[3px]");
          },
        },
      });

      tl.fromTo(
        ".airpods-text-animate",
        { scale: 1, fontSize: "123px" },
        { scale: 0.8, fontSize: "100px" },
        0,
      ).fromTo(
        ".airpods-left-animate",
        { scale: 0.5, x: -100, filter: "blur(0)" },
        { scale: 2, x: 320, filter: "blur(.5px)" },
        0,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="">
      <section className="bg-grey-1 h-[calc(100vh-var(--spacing-size-of-navbar-to-main))]  z-5 flex items-center justify-center container-animate relative ">
        <div className="text-center">
          <h1 className="use--font-sf-pro-display text-black-1 font-bold text-[123px] airpods-text-animate">
            AirPods
          </h1>
          <h2 className="use--font-sf-pro-display text-black-1 font-bold text-[22px] -mt-[30px]">
            3rd generation
          </h2>
          <p className=" use--font-sf-pro-display text-black-1 text-[22px] mt-1 ">
            From ₹19900.00*
          </p>
        </div>

        <div className="">
          <Image
            src={"/images/illustrations/hero_airpods_left.svg"}
            alt="AirPods Right"
            width={400}
            height={800}
            className="h-auto w-auto  absolute top-[23%] right-[10%]  airpods-left-animate  "
            priority
            ref={airpodsLeft}
          />
        </div>
      </section>

      {/* <h1 className="box py-20 bg-blue-1 text-white w-20 px-20">Testing</h1>

      <div className="h-screen mt-20">
        <p className="text-center text-2xl font-bold">
          Scroll down to see the animation
        </p>
      </div> */}
    </section>
  );
}
