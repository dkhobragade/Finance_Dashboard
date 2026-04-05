import { create } from "zustand";
import { persist } from "zustand/middleware";

type Page = "home" | "transaction" | "payment";
type Filter = "all" | "income" | "expense";

type Store = {
  activePage: Page;
  setActivePage: (page: Page) => void;

  isAuthenticated: boolean;
  isAdmin: boolean;

  login: (isAdmin?: boolean) => void;
  logout: () => void;

  filter: Filter;
  setFilter: (filter: Filter) => void;

  transactions: any[];
  addTransaction: (txn: any) => void;

  colorScheme: "light" | "dark";
  toggleColorScheme: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      activePage: "home",
      setActivePage: (page) => set({ activePage: page }),

      isAuthenticated: false,
      isAdmin: false,

      login: (isAdmin = false) =>
        set({ isAuthenticated: true, isAdmin, activePage: "home" }),

      logout: () =>
        set({
          isAuthenticated: false,
          isAdmin: false,
          activePage: "home",
        }),

      filter: "all",
      setFilter: (filter) => set({ filter }),

      transactions: [],
      addTransaction: (txn) =>
        set((state) => ({
          transactions: [txn, ...state.transactions],
        })),

      colorScheme: "light",
      toggleColorScheme: () =>
        set((state) => ({
          colorScheme:
            state.colorScheme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "app-storage",
    }
  )
);