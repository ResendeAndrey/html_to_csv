import { useCallback, useEffect, useState } from 'react';
import { PaginationBTN, PaginationSC } from './styled';

interface IPaginationProps {
  changePagination: (type: 'previous' | 'next') => void
  totalPages: number
  pagination: {
    nextItem: number,
    firstItem: number
  }
}

const Pagination = ({changePagination, pagination, totalPages}: IPaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const calculateCurrentPage = useCallback(() => {
    if(pagination.nextItem) {
      setCurrentPage((pagination.nextItem / 20))
    }
  },[pagination.nextItem])

  useEffect(() => calculateCurrentPage(),[calculateCurrentPage])


  return (
    <PaginationSC>
      <PaginationBTN onClick={() => changePagination('previous')} disabledBtn={currentPage === 1} disabled={currentPage === 1}>prev</PaginationBTN>
      <span>Current Page: {currentPage}</span>
      <PaginationBTN onClick={() => changePagination('next')} disabledBtn={currentPage >= totalPages} disabled={currentPage >= totalPages}>next</PaginationBTN>
    </PaginationSC>
  )
}

export default Pagination
