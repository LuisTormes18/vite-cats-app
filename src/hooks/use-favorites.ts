import { useEffect, useState } from "react";
import { getFavourites } from "../services/cats";
import type { ICat } from "../types";

export const useFavorites = () => {
  const [favoritesCats, setFavoritesCats] = useState<ICat[]>([]);
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
