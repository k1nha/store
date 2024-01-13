'use client'

import { Button } from '@/components/ui/button'
import { Product as ProductData, ProductForm } from './product-form'
import { number, object, string } from 'yup'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/lib/query'
import { HTTP } from '@/lib/axios'
import { LoadingSpinner } from '@/shared/icon'
import { useToast } from '@/components/ui/use-toast'

const productSchema = object({
  name: string().required(),
  value: number().required().min(0),
  description: string().required(),
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
        title: 'Produto criado com sucesso',
        description: 'Produto criado com sucesso',
      })
    },
  })

  async function handleSubmitProductForm(data: ProductData) {
    createProductMutation({
      ...data,
      badges: [],
    })
  }

  return (
    <>
      <ProductForm
        validationSchema={productSchema}
        onSubmit={handleSubmitProductForm}
        id='product-form'
      />
      <Button form='product-form' type='submit'>
        {isPending ? <LoadingSpinner /> : <>Enviar</>}
      </Button>
    </>
  )
}
