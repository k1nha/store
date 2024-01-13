import { useCartStore } from '@/shared/stores/cart'
import { ShoppingCart } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { ProductCartCard } from '../card/product-cart-card'

type DrawerSheetProps = {
  trigger?: string | React.ReactNode
}

export function CartDrawer(props: DrawerSheetProps) {
  const { cart, removeProduct, removeProducts } = useCartStore()

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='border-b pb-2'>Resumo do carrinho</SheetTitle>
          {/* <SheetDescription>
          </SheetDescription> */}
          {cart.length === 0 ? (
            <div className='text-center text-sm text-gray-600'>
              <h4 className='mt-4 text-lg font-semibold text-red-500'>
                Ops, seu carrinho está vazio
              </h4>
              <p>Não há produtos selecionados até o momento</p>
            </div>
          ) : (
            <div className='flex flex-col gap-2'>
              {cart.map(({ name, price, id }, k) => (
                <ProductCartCard
                  key={k}
                  name={name}
                  price={price}
                  removeProduct={() => removeProduct(id)}
                />
              ))}

              <button
                className='text-xs font-medium text-gray-400'
                onClick={() => removeProducts()}
              >
                Limpar o carrinho
              </button>
            </div>
          )}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
