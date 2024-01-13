import { create } from 'zustand'

type Product = {
  id: string
  name: string
  price: number
  description: string
  badges: string[]
}

type CarStore = {
  cart: Product[]
  increaseCart: (product: Product) => void
  removeProducts: () => void
  removeProduct: (id: string) => void
}

export const useCartStore = create<CarStore>((set) => ({
  cart: [],
  increaseCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeProducts: () => set({ cart: [] }),
  removeProduct: (id) => {
    function removeInCollection(id: string, collection: any[]) {
      const index = collection.findIndex((item) => item.id === id)
      collection.splice(index, 1)
      return collection
    }

    set((state) => ({
      cart: removeInCollection(id, state.cart),
    }))
  },
}))
