"use client"
import { Icons } from "@/components/icons"
import { useState } from "react"

type PropsPagination = {
  currentPage: number
  maxPageLimit: number
  minPageLimit: number
  totalPages: number
  onPageChange: (page: number) => void
}

const Pagination = (props: PropsPagination) => {
  const { totalPages } = props
  const pageNumberLimit = 5
  const [currentPage, setCurrentPage] = useState(props.currentPage)
  const [maxPageLimit, setMaxPageLimit] = useState(props.maxPageLimit)
  const [minPageLimit, setMinPageLimit] = useState(props.minPageLimit)

  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      const clase = `${
        currentPage === page
          ? "leading-tight z-10 text-blue-600  border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
          : " text-gray-500 bg-white border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      } block px-3 py-2 ml-0 border leading-tight cursor-pointer`
      return (
        <li
          key={page}
          id={`${page}`}
          onClick={handlePageClick}
          className={clase}
        >
          {page}
        </li>
      )
    } else {
      return null
    }
  })
  let pageIncrementEllipses = null
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <li
        className="block px-3 py-2 ml-0 border leading-tight cursor-pointer text-gray-500 bg-white border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={handleNextClick}
      >
        &hellip;
      </li>
    )
  }
  let pageDecremenEllipses = null
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <li
        className="block px-3 py-2 ml-0 border leading-tight cursor-pointer text-gray-500 bg-white border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={handlePrevClick}
      >
        &hellip;
      </li>
    )
  }
  function handleNextClick() {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit)
      setMinPageLimit(minPageLimit + pageNumberLimit)
    }
    props.onPageChange(currentPage + 1)
    setCurrentPage((prev) => prev + 1)
  }
  function handlePrevClick() {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit)
      setMinPageLimit(minPageLimit - pageNumberLimit)
    }
    props.onPageChange(currentPage - 1)
    setCurrentPage((prev) => prev - 1)
  }
  function handlePageClick(e: React.MouseEvent<HTMLElement>) {
    setCurrentPage(Number(e.currentTarget.id))
    props.onPageChange(Number(e.currentTarget.id))
  }
  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Mostrando{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          1-{totalPages}
        </span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            type="button"
            onClick={handlePrevClick}
            disabled={currentPage === pages[0]}
            className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <Icons.chevronLeft />
          </button>
        </li>
        {pageDecremenEllipses}
        {pageNumbers}
        {pageIncrementEllipses}
        <li>
          <button
            type="button"
            onClick={handleNextClick}
            disabled={currentPage === pages[pages.length - 1]}
            className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <Icons.chevronRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
