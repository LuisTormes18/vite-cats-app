/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUser {
  name: string;
  username: string;
  password: string;
}
export interface ILoginUser {
  username: IUser["username"];
  password: IUser["password"];
}

export interface IAuhResponse {
  ok: boolean;
  data: IUser | null;
  message: string;
}

// cats

export interface IBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  cfa_url: string;
  vetstreet_url: string;
  vcahospitals_url: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap: number;
  alt_names: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface ICatsResponse {
  ok: boolean;
  data: ICatImage[] | IBreed[] | IFavoriteCat[] | null;
  message?: string | any;
  error?: Error | string;
}
export interface IApiBreadsResponse {
  ok: boolean;
}

export interface IFavoriteCat {
  id: number;
  user_id: string;
  image_id: string;
  sub_id: string;
  created_at: Date;
  image: {
    id: string;
    url: string;
  };
}
export interface ICatImage {
  id: string;
  url: string;
  width?: number;
  height?: number;
}
