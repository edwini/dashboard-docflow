import { GetFetch } from "@/lib/fetch"

export async function fetchOperationLicense(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  return await GetFetch(
    `${process.env.NEXTAUTH_URL}/api/operationlicense/${page}/${limit}/`,
  )
}
