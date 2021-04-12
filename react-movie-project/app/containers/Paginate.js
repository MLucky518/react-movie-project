import React from 'react'
import { PaginateContainer } from '../components/Paginate'

export const Pagination = ({ perPage, total, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <PaginateContainer>
      <ul>
        {pageNumbers.map(pageNum => {
          return (
            <li key={pageNum}>
              <a
                onClick={() => paginate(pageNum)}
                href="#"
                style={{ color: 'red' }}>
                {pageNum}
              </a>
            </li>
          )
        })}
      </ul>
    </PaginateContainer>
  )
}
