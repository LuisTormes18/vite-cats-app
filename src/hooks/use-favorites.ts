import { useEffect, useState } from "react";
import { getFavourites } from "../services/cats";
import { useCatsStore } from "../store";
import type { IFavoriteCat } from "../types";

export const useGetFavorites = () => {
  const [loading, setLoading] = useState(true);
  const setFavoritesCats = useCatsStore((state) => state.setFavoritesCats);
  const favoritesCats = useCatsStore((state) => state.favoritesCats);

  useEffect(() => {
    getFavourites()
      .then(({ ok, data }) => {
        if (ok) {
          setFavoritesCats(data as IFavoriteCat[]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setFavoritesCats]);

  return {
    favoritesCats,
    loading,
  };
};
