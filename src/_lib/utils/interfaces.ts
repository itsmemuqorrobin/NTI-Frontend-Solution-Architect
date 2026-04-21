export interface INavbarLinks {
  id: number;
  name: string;
  href: string;
}

export interface IHeadInfo {
  id: number;
  title: string;
  link: string;
  href: string;
  width: number;
  height: number;
}

export interface IAirpodFeatures {
  id: string | number;
  description: string;
  imageURL?: string | null;
  imageURL2?: string;
  isDoubleImage?: boolean;
  isHasSup?: boolean;
  size?: {
    image1Width: number;
    image1Height: number;
    image2Width: number;
    image2Height: number;
  };
}

export interface IAirpodsComparation {
  id: number;
  imageURL: string;
  title: string;
  subTitle: string;
  price: string;
  buyHref: string;
  learnMoreHref: string;
  width: number;
  heigth: number;
}
