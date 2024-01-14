import { Card } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

function ProductSkeleton() {
  return (
    <div className='flex items-center space-x-4'>
      <Card className='p-4'>
        <Skeleton className='h-[250px] w-[250px]' />
        <div className='mt-4 space-y-2'>
          <Skeleton className='h-4 w-[100px]' />
          <Skeleton className='h-4 w-[140px]' />
          <Skeleton className='h-4 w-[140px]' />
        </div>
        <Skeleton className='mt-4 h-8 w-[200px]' />
      </Card>
    </div>
  )
}

export function ProductsSkeleton() {
  return (
    <>
      {Array.from(Array(6).keys()).map((i) => (
        <ProductSkeleton key={i} />
      ))}
    </>
  )
}
