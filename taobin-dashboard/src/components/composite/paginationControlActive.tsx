'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControlActive: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  return (
    <Pagination>
      <PaginationContent>
        {hasPrevPage && (
          <PaginationItem>
          <PaginationPrevious onClick={() => { router.push(`/status/active/?page=${Number(page) - 1}&per_page=${per_page}`) }}/>
        </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
      {hasNextPage && (
        <PaginationItem>
        <PaginationNext onClick={() => { router.push(`/status/active/?page=${Number(page) + 1}&per_page=${per_page}`) }} />
      </PaginationItem>
      )}
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationControlActive