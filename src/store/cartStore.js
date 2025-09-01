import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: {},
  toggleItem: (slug) =>
    set((state) => {
      const newCart = { ...state.cart };
      if (newCart[slug]) {
        delete newCart[slug];
      } else {
        newCart[slug] = true;
      }
      return { cart: newCart };
    }),
}));

export default useCartStore;
