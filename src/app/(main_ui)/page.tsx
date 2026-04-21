import { AirpodsMaxSection } from "@/_ui/sections/AripodsMax";
import { CompareAirpodsSection } from "@/_ui/sections/CompareAripods";
import { HeroSection } from "@/_ui/sections/Hero";
import { NavbarSection } from "@/_ui/sections/Navbar";

export default function Home() {
  return (
    <>
      <NavbarSection />

      <HeroSection />

      <AirpodsMaxSection />

      <CompareAirpodsSection />
    </>
  );
}
