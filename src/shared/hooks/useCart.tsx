import { useState } from 'react'

export function useCart() {
  const [cartIsOpen, setCartIsOpen] = useState(false)

  function handleClickCart() {
    setCartIsOpen((prev) => !prev)
  }

  return { cartIsOpen, handleClickCart }
}
