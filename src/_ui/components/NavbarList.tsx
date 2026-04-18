import { NavbarLinks } from "@/_lib/data/data";
import Image from "next/image";
import Link from "next/link";

export function NavbarList() {
  return (
    <div className="use--max-container-navbar  flex items-stretch gap-8 justify-center mt-4">
      <Link href={"/"} className="text-xs text-grey-2 use--font-sf-pro-text">
        <Image
          src={"/apple_logo.svg"}
          width={12}
          height={14}
          alt="Apple"
          className="mt-[-2px]"
        />
      </Link>

      {NavbarLinks.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.href}
            className="text-xs text-grey-2 use--font-sf-pro-text"
          >
            {link.name}
          </Link>
        );
      })}

      <Link href={"/"} className="text-xs text-grey-2 use--font-sf-pro-text">
        <Image
          src={"/images/icons/search.svg"}
          width={14}
          height={14}
          alt="Search Anything"
          className=""
        />
      </Link>

      <Link href={"/"} className="text-xs text-grey-2 use--font-sf-pro-text">
        <Image
          src={"/images/icons/bag.svg"}
          width={12}
          height={14}
          alt="Go to Cart"
          className=""
        />
      </Link>
    </div>
  );
}
