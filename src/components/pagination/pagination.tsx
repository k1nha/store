import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Pagination as PaginationRoot,
} from '../ui/pagination'

type PaginationProps = {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<any> | any
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <PaginationRoot className='mb-4'>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={pages !== pageIndex || totalCount < perPage}
          >
            <ChevronLeft className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>{pageIndex}</PaginationItem>

        <PaginationItem>
          <PaginationLink
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={pageIndex >= pages}
          >
            <ChevronRight className='h-4 w-4' />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </PaginationRoot>
  )
}
