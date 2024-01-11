import Image from 'next/image'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { Badge } from '../ui/badge'

type CardProductProps = {
  name?: string
  price?: number
  imgSrc?: string
  alt?: string
  className?: string
  about?: string[]
}

export function CardProduct({ alt, className, imgSrc }: CardProductProps) {
  return (
    <Card className={cn('p-4', className)}>
      <Image
        src={imgSrc || ''}
        alt={'product ' + alt}
        width={250}
        height={250}
        className='aspect-[1/1] w-full rounded-lg object-cover transition-opacity group-hover:opacity-75'
      />

      <h2 className='mt-4 text-lg font-bold'>Titulo produto</h2>

      <div className='pb-2 text-start'>
        <p className='text-lg font-semibold text-green-400'>R$ 266,99</p>
        <span className='text-sm text-gray-500'>À vista no PIX</span>
      </div>

      <div className='mb-2'>
        <Badge>Tesx</Badge>
      </div>

      <Button className='flex'>Adicione ao carrinho</Button>
    </Card>
  )
}
