import { SUB_ID } from "../const";
import type { IBreed, ICatsResponse } from "../types";
import { fetchFromCatApi } from "../utils";

export const vote = async (imageId: string, value: number) => {
  return fetchFromCatApi({
    endpoint: "votes",
    method: "POST",
    body: {
      image_id: imageId,
      value: value,
    },
  });
};

export const getBreeds = async () => fetchFromCatApi({ endpoint: "breeds" });

export const searchImages = async (breedIds?: IBreed["id"]): Promise<ICatsResponse> => {
  const limit = 12;
  const endpoint = breedIds ? `images/search?limit=${limit}&breed_ids=${breedIds}` : `images/search?limit=${limit}`;
  return fetchFromCatApi({ endpoint });
};

export const setAsFavorite = async (imageId: string): Promise<ICatsResponse> => {
  const method = "POST";

  return fetchFromCatApi({
    endpoint: "favourites",
    method,
    body: {
      image_id: imageId,
      sub_id: SUB_ID,
    },
  });
};

export const deleteFavorite = async (favouriteId: string): Promise<ICatsResponse> => {
  const method = "DELETE";

  return fetchFromCatApi({
    endpoint: `favourites/:${favouriteId}`,
    method,
  });
};
export const getFavourites = async () => {
  const limit = 20;
  return fetchFromCatApi({ endpoint: `favourites?limit=${limit}&sub_id=${SUB_ID}&order=DESC` });
};
