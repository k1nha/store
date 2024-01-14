import { ProductModule } from '@/modules/form/product-module'

export default function CadastroPage() {
  return (
    <div className='mx-auto mt-4 max-w-xl px-4 md:px-4'>
      <h2 className='mb-4 text-2xl font-semibold'>
        Adicione seus produtos aqui
      </h2>
      <ProductModule />
    </div>
  )
}
