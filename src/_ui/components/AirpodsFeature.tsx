import { IAirpodFeatures } from "@/_lib/utils/interfaces";
import Image from "next/image";

export function AirpodsFeatureComponent({
  feature,
}: {
  feature: IAirpodFeatures;
}) {
  return (
    <>
      {feature.isDoubleImage ? (
        <div className="flex items-center gap-2.5 justify-center">
          <figure className="" aria-label="illustration 1">
            <Image
              alt={feature.description}
              src={feature.imageURL}
              width={feature.size?.image1Width || 38}
              height={feature.size?.image1Height || 38}
              className="mx-auto"
            />
          </figure>
          <figure className="" aria-label="illustration 2">
            <Image
              alt={feature.description}
              src={feature.imageURL2}
              width={feature.size?.image2Width || 38}
              height={feature.size?.image1Height || 38}
              className="mx-auto"
            />
          </figure>
        </div>
      ) : (
        <>
          {feature?.imageURL === null ? (
            <></>
          ) : (
            <figure className="mx-auto">
              <Image
                alt={feature.description}
                src={feature.imageURL}
                width={feature.size?.image1Width || 38}
                height={feature.size?.image1Height || 38}
                className="mx-auto"
              />
            </figure>
          )}
        </>
      )}

      <div className="text-center mt-3 ">
        <p className="use--font-halvetica-neue  text-sm text-black-1  font-normal">
          {" "}
          {feature.description}{" "}
          {feature.isHasSup ? (
            <sup>
              {" "}
              <a href="#">2</a>{" "}
            </sup>
          ) : (
            <></>
          )}
        </p>
      </div>
    </>
  );
}
