import { HeroSection } from "@/_ui/sections/Hero";
import { NavbarSection } from "@/_ui/sections/Navbar";

import dynamic from "next/dynamic";

const DynamicAirpodsMaxSection = dynamic(() =>
  import("@/_ui/sections/AripodsMax").then(
    (component) => component.AirpodsMaxSection,
  ),
);

const DynamicCompareAirpodsSection = dynamic(() =>
  import("@/_ui/sections/CompareAripods").then(
    (component) => component.CompareAirpodsSection,
  ),
);

export default function Home() {
  return (
    <>
      <NavbarSection />

      <HeroSection />

      <DynamicAirpodsMaxSection />

      <DynamicCompareAirpodsSection />
    </>
  );
}
