import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { IBreed, IFavoriteCat } from "../types";

type BreedIdType = IBreed["id"];

interface ICatsStore {
  breedSelected: BreedIdType;
  changeSelectedBreed: (id: BreedIdType) => void;
  favoritesCats: IFavoriteCat[];
  setFavoritesCats: (favorites: IFavoriteCat[]) => void;
  handleAsFavorite: (id: BreedIdType) => void;
}

export const useCatsStore = create<ICatsStore>()(
  devtools(
    persist(
      (set, get) => ({
        breedSelected: "all",
        changeSelectedBreed: (id: BreedIdType) => set({ breedSelected: id }),
        favoritesCats: [],
        setFavoritesCats: (favorites: IFavoriteCat[]) => set({ favoritesCats: favorites }),
      }),
      {
        name: "cats-storage",
      }
    )
  )
);
