"use client";

import {
  Airpods2ndGenFeatures,
  Airpods3RdGenFeatures,
  AirpodsMaxFeatuers,
  AirpodsProFeatures,
  ComparationAirpodsList,
} from "@/_lib/data/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { AirpodsFeatureComponent } from "../components/AirpodsFeature";

export function CompareAirpodsSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  return (
    <section ref={containerRef} className="relative">
      <div className="bg-grey-1 h-auto min-h-screen pt-12 pb-20">
        <div className="mx-auto text-center mt-20">
          <h3 className="use--font-sf-pro-display text-black-1 font-bold text-[64px] leading-[64px]">
            Which AirPods are <br /> right for you?
          </h3>
        </div>

        <div
          className="mt-20 mx-auto  px-size-of-padding-x gap-x-8.5 gap-y-10 items-baseline compare-grid"
          aria-label="Airpods Comparison"
        >
          {ComparationAirpodsList.map((item) => {
            return (
              <div key={item.id} className="">
                <figure className="">
                  <Image
                    alt={item.title}
                    src={item.imageURL}
                    width={item.width}
                    height={item.heigth}
                    className="mx-auto"
                  />
                </figure>

                <div className="mx-auto mt-8.5 h-[97px] flex flex-col text-center justify-between ">
                  <div>
                    <h3 className="use--font-sf-pro-display font-bold text-[23px] text-black-1">
                      {item.title}{" "}
                    </h3>
                    <h4 className="use--font-halvetica-neue font-normal text-black-1 text-[14px] ">
                      {" "}
                      {item.subTitle}{" "}
                    </h4>
                  </div>
                  <div className="text-center " aria-label="Airpods Status">
                    <p className="use--font-halvetica-neue font-normal text-black-1 text-[17px] ">
                      {" "}
                      {item.price}{" "}
                    </p>
                  </div>
                </div>

                <div className="mx-auto mt-4 ">
                  <div className="text-center" aria-label="Airpods Status">
                    <div className="text-center gap-4.75 ">
                      <Link
                        className="text-white bg-blue-2 rounded-full px-[13px] py-[7px] text-sm use--font-halvetica-neue font-normal text-center "
                        href={item.buyHref}
                      >
                        Buy
                      </Link>

                      <Link
                        className="text-blue-1 bg-none rounded-full use--font-halvetica-neue text-[14px] font-normal flex items-center justify-center gap-[3px] mx-auto mt-[12px]"
                        href={item.learnMoreHref}
                      >
                        Learn more
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-grey-3 w-full mt-6"></div>
              </div>
            );
          })}

          {Airpods2ndGenFeatures.map((feature) => {
            return (
              <div key={feature.id} className="airpods-2nd-features ">
                <AirpodsFeatureComponent feature={feature} />
              </div>
            );
          })}

          {Airpods3RdGenFeatures.map((feature, index) => {
            return (
              <div
                key={feature.id}
                className="airpods-3rd-features"
                style={{ gridRow: index + 2 }}
              >
                <AirpodsFeatureComponent feature={feature} />
              </div>
            );
          })}

          {AirpodsProFeatures.map((feature, index) => {
            return (
              <div
                key={feature.id}
                className="airpods-pro"
                style={{ gridRow: index + 2 }}
              >
                <AirpodsFeatureComponent feature={feature} />
              </div>
            );
          })}

          {AirpodsMaxFeatuers.map((feature, index) => {
            return (
              <div
                key={feature.id}
                className="airpods-max"
                style={{ gridRow: index + 2 }}
              >
                <AirpodsFeatureComponent feature={feature} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
