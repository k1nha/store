import Image from 'next/image'
import { Card } from '../ui/card'
import { Trash2 } from 'lucide-react'

type Props = {
  name: string
  price: number
  removeProduct: () => void
}

export function ProductCartCard(props: Props) {
  return (
    <Card className='relative flex gap-4 p-2'>
      <Image
        src={'https://placehold.co/80x80.png'}
        alt=''
        height={80}
        width={80}
        className='rounded-lg'
      />
      <div className='my-auto flex flex-col gap-1'>
        <p className='font-medium'>{props.name}</p>
        <p className='text-xs text-green-700'>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(props.price / 100)}
        </p>
        <p className='text-sm text-gray-400'>A vista no PIX</p>
      </div>

      <Trash2
        color='red'
        width={16}
        className='absolute right-3 top-2 cursor-pointer'
        onClick={props.removeProduct}
      />
    </Card>
  )
}
