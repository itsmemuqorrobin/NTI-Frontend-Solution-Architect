import { Hero } from "@/_ui/sections/Hero";
import { Navbar } from "@/_ui/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="h-screen">
        <h1>testing</h1>
      </div>
    </>
  );
}
