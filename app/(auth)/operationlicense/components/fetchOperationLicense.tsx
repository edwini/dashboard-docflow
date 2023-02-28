import { GetFetch } from "@/lib/fetch"

export async function fetchOperationLicense(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  return await GetFetch(
    `http://localhost:3000/api/operationlicense/${page}/${limit}/`,
  )
}
