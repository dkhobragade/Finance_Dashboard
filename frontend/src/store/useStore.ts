import { create } from "zustand";

type Page = "home" | "transaction" | "payment";

type Filter = "all" | "income" | "expense";

type Store = {
  activePage: Page;
  setActivePage: (page: Page) => void;

  filter: Filter;
  setFilter: (filter: Filter) => void;
};

export const useStore = create<Store>((set) => ({
  activePage: "home",
  setActivePage: (page) => set({ activePage: page }),

  filter: "all",
  setFilter: (filter) => set({ filter }),
}));