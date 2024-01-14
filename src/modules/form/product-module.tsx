'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { HTTP } from '@/lib/axios'
import { queryClient } from '@/lib/query'
import { LoadingSpinner } from '@/shared/icon'
import { useMutation } from '@tanstack/react-query'
import { number, object, string } from 'yup'
import { Product as ProductData, ProductForm } from './product-form'

const productSchema = object({
  name: string().required('Nome é obrigatório'),
  value: number()
    .required('Valor é obrigatório')
    .min(0.1, 'O valor precisa ser maior que 0.01'),
  description: string().required('Descrição é obrigatória'),
})

export function ProductModule() {
  const { toast } = useToast()
  const { mutate: createProductMutation, isPending } = useMutation({
    mutationFn: async (data: any) => await HTTP.post('/product', data),
    onError: (e) => {
      toast({
        variant: 'destructive',
        title: 'Erro ao criar produto',
        description: e.message,
      })
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['products'],
      })
      toast({
        title: 'Sucesso',
        description: 'O item foi adicionado na lista de produtos',
      })
    },
  })

  async function handleSubmitProductForm(data: ProductData) {
    createProductMutation(data)
  }

  return (
    <>
      <ProductForm
        validationSchema={productSchema}
        onSubmit={handleSubmitProductForm}
        id='product-form'
      />

      <Button form='product-form' type='submit' className='mt-3'>
        {isPending ? <LoadingSpinner /> : <>Enviar</>}
      </Button>
    </>
  )
}
