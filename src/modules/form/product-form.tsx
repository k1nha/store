import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { FormProps } from '@/shared/types'
import { formatCurrency } from '@/shared/utils/currency'
import { useFormik } from 'formik'
import { ChangeEvent, useState } from 'react'

export class Product {
  name!: string
  value!: number
  description!: string

  constructor() {
    this.name = ''
    this.value = 0
    this.description = ''
  }
}

type ProductFormProps = FormProps<Product>

export function ProductForm({
  onSubmit,
  data,
  disabled,
  id,
  validationSchema,
}: ProductFormProps) {
  const [currencyInput, setCurrencyInput] = useState('')
  const {
    getFieldProps,
    handleSubmit,
    errors,
    touched,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: data || new Product(),
    onSubmit: handleSubmitForm,
    validationSchema,
  })

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    const formattedValue = formatCurrency(inputValue)
    setCurrencyInput(formattedValue)
    setFieldValue(
      'value',
      +e.target.value.replace('R$ ', '').replace(',', '').replace(/^0+/, ''),
    )
  }

  function handleSubmitForm(data: Product) {
    onSubmit(data)
    setCurrencyInput('')
    resetForm()
  }

  return (
    <form id={id} onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <div className=''>
        <Label>Nome do Produto</Label>
        <Input
          type='text'
          placeholder='Digite o nome do produto'
          disabled={disabled}
          {...getFieldProps('name')}
        />
        {errors.name && touched.name && (
          <p className='text-end text-xs text-red-400'>{errors.name}</p>
        )}
      </div>

      <div className=''>
        <Label>Valor do Produto</Label>
        <Input
          type='text'
          placeholder='Digite o valor do produto'
          onChange={handleInputChange}
          value={currencyInput}
          disabled={disabled}
        />
        {errors.value && touched.value && (
          <p className='text-end text-xs text-red-400'>{errors.value}</p>
        )}
      </div>

      <div className=''>
        <Label>Descrição</Label>
        <Textarea
          placeholder='Digite a descrição do produto'
          disabled={disabled}
          {...getFieldProps('description')}
        />
        {errors.description && touched.description && (
          <p className='text-end text-xs text-red-400'>{errors.description}</p>
        )}
      </div>
    </form>
  )
}
