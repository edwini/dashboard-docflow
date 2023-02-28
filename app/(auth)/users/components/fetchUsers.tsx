import { GetFetch } from "@/lib/fetch"

export async function fetchUsers(page: number) {
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
