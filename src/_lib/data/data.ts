import {
  IAirpodFeatures,
  IAirpodsComparation,
  IHeadInfo,
  INavbarLinks,
} from "../utils/interfaces";
import { ComparisonIconURL, ComparisonImageURL } from "../utils/variables";

export const NavbarLinks: INavbarLinks[] = [
  {
    id: 1,
    name: "Store",
    href: "/",
  },
  {
    id: 2,
    name: "Mac",
    href: "/",
  },
  {
    id: 3,
    name: "iPad",
    href: "/",
  },
  {
    id: 4,
    name: "iPhone",
    href: "/",
  },
  {
    id: 5,
    name: "Watch",
    href: "/",
  },
  {
    id: 6,
    name: "AirPods",
    href: "/",
  },
  {
    id: 7,
    name: "TV & Home",
    href: "/",
  },
  {
    id: 8,
    name: "Entertainment",
    href: "/",
  },
  {
    id: 9,
    name: "Accessories",
    href: "/",
  },
  {
    id: 10,
    name: "Support",
    href: "/",
  },
];

export const HeadInfoList: IHeadInfo[] = [
  {
    id: 1,
    title: "AirPods\n2nd Generation",
    link: "/images/icons/Airpods_2nd_gen.svg",
    href: "/",
    width: 30.939363479614258,
    height: 32.294158935546875,
  },
  {
    id: 2,
    title: "AirPods\n3rd Generation",
    link: "/images/icons/Airpods_3rd_gen.svg",
    href: "/",
    width: 32.52925491333008,
    height: 25.032211303710938,
  },
  {
    id: 3,
    title: "AirPods Pro\n2nd Generation",
    link: "/images/icons/Airpods_pro_2nd_gen.svg",
    href: "/",
    width: 37.35546112060547,
    height: 24.334800720214844,
  },
  {
    id: 4,
    title: "AirPods Max",
    link: "/images/icons/Airpods_max.svg",
    href: "/",
    width: 33.99990463256836,
    height: 37.894893646240234,
  },
  {
    id: 5,
    title: "Compare",
    link: "/images/icons/Airpods_compare.svg",
    href: "/",
    width: 45,
    height: 37,
  },
  {
    id: 6,
    title: "Apple Music",
    link: "/images/icons/Apple_music.svg",
    href: "/",
    width: 32,
    height: 32,
  },
];

export const Airpods2ndGenFeatures: IAirpodFeatures[] = [
  {
    id: "1",
    description: "—",
    imageURL: null,
  },
  {
    id: "2",
    description: "—",
    imageURL: null,
  },
  {
    id: "3",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
  },
  {
    id: "4",
    description: "—",
    imageURL: null,
  },
  {
    id: "5",
    description: "—",
    imageURL: null,
  },
];

export const Airpods3RdGenFeatures: IAirpodFeatures[] = [
  {
    id: "1",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
    isHasSup: true,
  },
  {
    id: "2",
    description: "—",
    imageURL: null,
  },
  {
    id: "3",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
  },
  {
    id: "4",
    description: "—",
    imageURL: null,
  },
  {
    id: "5",
    description: "—",
    imageURL: null,
  },
];

export const AirpodsProFeatures: IAirpodFeatures[] = [
  {
    id: "1",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
    isHasSup: true,
  },
  {
    id: "2",
    description: "Active Noise Cancellation and Adaptive Transparency",
    imageURL: `${ComparisonIconURL}active_noise_icon.png`,
    isDoubleImage: true,
    imageURL2: `${ComparisonIconURL}active_cancellation.png`,
    size: {
      image1Width: 26,
      image1Height: 34,
      image2Height: 34,
      image2Width: 26,
    },
  },
  {
    id: "3",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
  },
  {
    id: "4",
    description: "—",
    imageURL: null,
  },
  {
    id: "5",
    description: "—",
    imageURL: null,
  },
];

export const AirpodsMaxFeatuers: IAirpodFeatures[] = [
  {
    id: "1",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
    isHasSup: true,
  },
  {
    id: "2",
    description: "Active Noise Cancellation and Adaptive Transparency",
    imageURL: `${ComparisonIconURL}active_noise_icon.png`,
    isDoubleImage: true,
    imageURL2: `${ComparisonIconURL}active_cancellation.png`,
    size: {
      image1Width: 26,
      image1Height: 34,
      image2Height: 34,
      image2Width: 26,
    },
  },
  {
    id: "3",
    description: "Personalized Spatial Audio with dynamic head tracking",
    imageURL: `${ComparisonIconURL}spatial_icon.png`,
  },
  {
    id: "4",
    description: "—",
    imageURL: null,
  },
  {
    id: "5",
    description: "—",
    imageURL: null,
  },
];

export const ComparationAirpodsList: IAirpodsComparation[] = [
  {
    id: 1,
    imageURL: `${ComparisonImageURL}airpods-2nd-gen.png`,
    title: "AirPods",
    subTitle: "2nd generation",
    price: "₹14900.00*",
    buyHref: "/",
    learnMoreHref: "/",
  },
  {
    id: 2,
    imageURL: `${ComparisonImageURL}airpods-3rd-gen.png`,
    title: "AirPods",
    subTitle: "3rd generation",
    price: "From ₹19900.00*",
    buyHref: "/",
    learnMoreHref: "/",
  },
  {
    id: 3,
    imageURL: `${ComparisonImageURL}airpods-pro.png`,
    title: "AirPods Pro",
    subTitle: "2nd generation",
    price: "₹26900.00*",
    buyHref: "/",
    learnMoreHref: "/",
  },
  {
    id: 4,
    imageURL: `${ComparisonImageURL}airpods-max.png`,
    title: "AirPods Max",
    subTitle: "",
    price: "₹59900.00*",
    buyHref: "/",
    learnMoreHref: "/",
  },
];
