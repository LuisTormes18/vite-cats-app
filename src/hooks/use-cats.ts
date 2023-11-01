import { useEffect, useMemo, useState } from "react";
import { getBreeds, searchImages } from "../services/cats";
import type { IBreed, ICat } from "../types";

export const useCats = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [breedSelected, setBreedSelected] = useState<IBreed["id"]>();

  useEffect(() => {
    getBreeds().then(({ ok, data }) => {
      if (ok) {
        setBreeds(data as IBreed[]);
      }
    });
  }, []);

  useEffect(() => {
    searchImages(breedSelected).then(({ ok, data }) => {
      if (ok) {
        setCats(data as ICat[]);
      }
    });
  }, [breedSelected]);

  const handleSelectBreed = (id: IBreed["id"]) => setBreedSelected(id);

  const filterCats = useMemo(() => cats, [cats]);

  return {
    filterCats,
    breeds,
    handleSelectBreed,
    breedSelected,
  };
};
