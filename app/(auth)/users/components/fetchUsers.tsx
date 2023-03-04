import { GetFetch } from "@/lib/fetch"
import { UserPagesType } from "@/types/UserType"
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

  return data
}

export async function fetchUsersAPI(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  const data = await GetFetch(
    `${process.env.NEXTAUTH_URL}/api/user/${page}/${limit}/`,
  )
  if (!data) {
    return {
      content: [],
      totalPages: 1,
    }
  }
  return data
}
