import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormProps } from '@/shared/types'
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
  const [value, setValue] = useState('')
  const { getFieldProps, handleSubmit, values, errors, touched, resetForm } =
    useFormik({
      initialValues: data || new Product(),
      onSubmit: handleSubmitForm,
      validationSchema,
    })

  const formatCurrency = (inputValue: string): string => {
    let formattedValue = inputValue.replace(/\D/g, '')
    formattedValue = (Number(formattedValue) / 100).toFixed(2).replace('.', ',')
    return `R$ ${formattedValue}`
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const inputValue = e.target.value
    const formattedValue = formatCurrency(inputValue)
    setValue(formattedValue)
    values.value = +e.target.value
      .replace('R$ ', '')
      .replace(',', '')
      .replace(/^0+/, '')
  }

  function handleSubmitForm(data: Product) {
    onSubmit(data)
    resetForm()
  }

  return (
    <form id={id} onSubmit={handleSubmit} className='mb-3 flex flex-col gap-3'>
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
          value={value}
          disabled={disabled}
        />
      </div>

      <div className=''>
        <Label>Descrição</Label>
        <Input
          type='text'
          placeholder='Digite a descrição do produto'
          disabled={disabled}
          {...getFieldProps('description')}
        />
      </div>

      <div className=''></div>
    </form>
  )
}
