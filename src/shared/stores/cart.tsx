import { create } from 'zustand'

type CartState = {
  cart: number
  increasePopulation: () => void
  removeAllCart: () => void
}

const useCartStore = create<CartState>((set) => ({
  cart: 0,
  increasePopulation: () => set((state) => ({ cart: state.cart + 1 })),
  removeAllCart: () => set({ cart: 0 }),
}))

// import { combine } from 'zustand/middleware'

// type InitialState = { bears: number }
// type SetState = { increase: (by: number) => void }

// const useStore = create(
//   combine<InitialState, SetState>(
//     { bears: 0 },
//     (set) => ({ increase: (by) => set((state) => ({ bears: state.bears + by })) })
//   ),
// )
