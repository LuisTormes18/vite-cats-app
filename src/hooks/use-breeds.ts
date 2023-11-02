import { useEffect, useState } from "react";
import { getBreeds } from "../services/cats";
import type { IBreed } from "../types";

export const useGetBreeds = () => {
  const [breeds, setBreeds] = useState<IBreed[]>([]);

  useEffect(() => {
    getBreeds().then(({ ok, data }) => {
      if (ok) {
        setBreeds(data as IBreed[]);
      }
    });
  }, []);

  return {
    breeds,
  };
};
