import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export async function GetFetch(url: string) {
  const session = await getServerSession(authOptions)
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${session?.user.token}` },
    cache: "no-store",
  })

  if (!response.ok) {
    return null
  }
  const data = await response.json()
  return data
}

export async function PostAuth(url: string, body: unknown) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
  const data = await response.json()
  return data
}

export async function PostFetch(url: string, body: unknown) {
  const session = await getServerSession(authOptions)

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
      "Content-Type": "application/json",
    },
  })
  const data = await response.json()
  return data
}
// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function fetcher(...args: any) {
  const res = await fetch({ ...args })
  if (!res.ok) throw new Error("Failed to fetch")
  return res.json()
}
