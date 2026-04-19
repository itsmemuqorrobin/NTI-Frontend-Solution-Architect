import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-grey-1 h-[calc(100vh-var(--spacing-size-of-navbar-to-main))] mt-size-of-navbar-to-main z-5 flex items-center justify-center">
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
  );
}
