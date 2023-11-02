import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { IBreed } from "../types";

type BreedIdType = IBreed["id"];

interface ICatsStore {
  breedSelected: BreedIdType;
  changeSelectedBreed: (id: BreedIdType) => void;
}

export const useCatsStore = create<ICatsStore>()(
  devtools(
    persist(
      (set) => ({
        breedSelected: "all",
        changeSelectedBreed: (id: BreedIdType) => set({ breedSelected: id }),
      }),
      {
        name: "cats-storage",
      }
    )
  )
);
