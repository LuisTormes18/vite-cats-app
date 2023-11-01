import { create } from "zustand";
import type { IUser } from "../types";

interface IAuthStore {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (newUser: IUser) => void;
  logout: () => void;
}
export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (newUser: IUser) => set({ isAuthenticated: true, user: newUser }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
