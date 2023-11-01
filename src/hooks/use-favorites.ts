import { useEffect, useState } from "react";
import { getFavourites } from "../services/cats";
import type { IFavoriteCat } from "../types";

export const useFavorites = () => {
  const [favoritesCats, setFavoritesCats] = useState<IFavoriteCat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavourites()
      .then(({ ok, data }) => {
        if (ok) {
          setFavoritesCats(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    favoritesCats,
    loading,
  };
};
