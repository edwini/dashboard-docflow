import { GetFetch } from "@/lib/fetch"

export async function fetchUsers(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  return await GetFetch(
    `${process.env.NEXTAUTH_URL}/api/users/${page}/${limit}/`,
  )
}
