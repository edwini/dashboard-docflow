import { GetFetch } from "@/lib/fetch"
import { URL_OPERATION_LICENSE } from "@/utils/apis"

export async function fetchOperationLicense(page: number) {
  const limit = parseInt(process.env.MAX_PAGE_SIZE || "5")
  const data = await GetFetch(URL_OPERATION_LICENSE(page, limit))
  if (!data) {
    return {
      content: [],
      totalPages: 1,
    }
  }
  return data
}
