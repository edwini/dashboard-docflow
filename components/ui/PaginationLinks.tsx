import Link from "next/link"
import { Icons } from "../icons"

type PropsPagination = {
  currentPage: number
  totalPages: number
  parentPage: string
}

const PaginationLinks = (props: PropsPagination) => {
  let { totalPages, currentPage, parentPage } = props
  currentPage = eval(`${currentPage}`)
  let minPageLimit = 0
  let maxPageLimit: number = parseInt(
    process.env.MAX_PAGE_SIZE?.toString() || "5",
  )
  const pageNumberLimit: number = maxPageLimit
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }
  if (currentPage > maxPageLimit) {
    maxPageLimit = maxPageLimit * Math.ceil(currentPage / pageNumberLimit)
    minPageLimit = maxPageLimit - pageNumberLimit
  }

  const nexPage: number =
    currentPage < pages.length ? currentPage + 1 : currentPage
  const prevPage: number = currentPage > 1 ? currentPage - 1 : currentPage

  return (
    <nav
      className="flex items-center justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Mostrando{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {currentPage}-{totalPages}
        </span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <Link
            href={`/${parentPage}/${maxPageLimit}/${prevPage}`}
            className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <Icons.chevronLeft />
          </Link>
        </li>

        {minPageLimit >= 1 ? (
          <li>
            <Link
              href={`/${parentPage}/${maxPageLimit}/${minPageLimit}`}
              className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              &hellip;
            </Link>
          </li>
        ) : null}
        {pages.map((page: number) => {
          if (page <= maxPageLimit && page > minPageLimit) {
            return (
              <LinkItem
                key={page}
                page={page}
                currentPage={currentPage}
                maxPageLimit={maxPageLimit}
                parentPage={parentPage}
              />
            )
          }
        })}
        {pages.length > maxPageLimit ? (
          <li>
            <Link
              href={`/${parentPage}/${maxPageLimit}/${maxPageLimit + 1}`}
              className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              &hellip;
            </Link>
          </li>
        ) : null}
        <li>
          <Link
            href={`/${parentPage}/${maxPageLimit}/${nexPage}`}
            className="disabled:bg-gray-400 block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <Icons.chevronRight />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
function LinkItem({
  page,
  currentPage,
  maxPageLimit,
  parentPage,
}: {
  page: number
  currentPage: number
  maxPageLimit: number
  parentPage: string
}) {
  return (
    <li>
      <Link
        href={`/${parentPage}/${maxPageLimit}/${page}`}
        className={`${
          // rome-ignore lint/suspicious/noDoubleEquals: <explanation>
          currentPage == page
            ? "leading-tight z-10 text-blue-600  border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white"
            : " text-gray-500 bg-white border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        } block px-3 py-2 ml-0 border leading-tight cursor-pointer`}
      >
        {page}
      </Link>
    </li>
  )
}

export default PaginationLinks
