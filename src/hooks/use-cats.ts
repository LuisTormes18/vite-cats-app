import { useEffect, useMemo, useState } from "react";
import { searchImages } from "../services/cats";
import { useCatsStore } from "../store/cats.store";
import type { ICatImage } from "../types";

export const useGetCats = () => {
  const [cats, setCats] = useState<ICatImage[]>([]);
  const [loading, setLoading] = useState(true);
  const breedSelected = useCatsStore((state) => state.breedSelected);

  useEffect(() => {
    searchImages(breedSelected)
      .then(({ ok, data }) => {
        if (ok) {
          setCats(data as ICatImage[]);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [breedSelected]);

  const filterCats = useMemo(() => cats, [cats]);

  return {
    filterCats,
    breedSelected,
    loading,
  };
};
