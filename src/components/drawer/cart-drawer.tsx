import { useCartStore } from '@/shared/stores/cart'
import { ShoppingCart, WalletCards } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { ProductCartCard } from '../card/product-cart-card'
import { Button } from '../ui/button'

export function CartDrawer() {
  const { cart, removeProduct, removeProducts } = useCartStore()

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='border-b pb-2'>Resumo do carrinho</SheetTitle>
          {cart.length === 0 ? (
            <div className='text-center text-sm text-gray-600'>
              <h4 className='mt-4 text-lg font-semibold text-red-500'>
                Ops, seu carrinho está vazio
              </h4>
              <p>Não há produtos selecionados até o momento</p>
            </div>
          ) : (
            <>
              <div className='flex h-[80vh] flex-col gap-2 overflow-y-auto'>
                {cart.map(({ name, price, id }, k) => (
                  <ProductCartCard
                    key={k}
                    name={name}
                    price={price}
                    removeProduct={() => removeProduct(id)}
                  />
                ))}
              </div>
              <button
                className='text-xs font-medium text-gray-400'
                onClick={() => removeProducts()}
              >
                Limpar o carrinho
              </button>

              <Button className='flex space-x-4'>
                <WalletCards />
                <span>Ir para pagamento</span>
              </Button>
              <div className='flex justify-between rounded-lg border px-4 py-2'>
                <p className='font-semibold'>Total</p>
                <p className='font-medium text-green-500'>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    cart.reduce((acc, cur) => acc + cur.price, 0) / 100,
                  )}
                </p>
              </div>
            </>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
