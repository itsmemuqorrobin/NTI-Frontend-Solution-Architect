import { HeadInfoList } from "@/_lib/data/data";
import Image from "next/image";
import Link from "next/link";

export function HeadInfoListComponent() {
  return (
    <header
      role="navigation"
      className="flex items-baseline justify-center gap-8 mt-8"
    >
      {HeadInfoList.map((item) => {
        return (
          <Link
            key={item.id}
            href={item.href}
            className="text-xs use--font-halvetica-neue font-normal text-center "
          >
            <Image
              src={item.link}
              alt={item.title}
              width={item.width}
              height={item.height}
              className="mx-auto mb-2.5"
            />

            <span className="whitespace-pre-line text-black-1 text-center ">
              {item.title}
            </span>
          </Link>
        );
      })}
    </header>
  );
}
