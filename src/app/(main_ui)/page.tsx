import { HeroSection } from "@/_ui/sections/Hero";
import { NavbarSection } from "@/_ui/sections/Navbar";

export default function Home() {
  return (
    <>
      <NavbarSection />

      <HeroSection />

      <div className="h-screen">
        <h1>testing</h1>
      </div>
    </>
  );
}
