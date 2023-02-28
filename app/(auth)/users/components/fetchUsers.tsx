import { GetFetch } from "@/lib/fetch"

export async function fetchUsers(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  return await GetFetch(`http://localhost:3000/api/users/${page}/${limit}/`)
}
