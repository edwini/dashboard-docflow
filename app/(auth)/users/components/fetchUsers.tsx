import { GetFetch } from "@/lib/fetch"
import { URL_USERS } from "@/utils/apis"

export async function fetchUsers(page: number) {
  const limit = parseInt(process.env.MAX_PAGE_SIZE || "5")
  const URL = URL_USERS(page, limit)
  const data = await GetFetch(URL)
  if (!data) {
    return {
      content: [],
      totalPages: 1,
    }
  }
  console.log(data)

  return data
}
