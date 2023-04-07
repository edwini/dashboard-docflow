import { GetFetch } from "@/lib/fetch"
import { URL_USER_ID, URL_USERS } from "@/utils/apis"
import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {
  const { params } = _req.query || {}
  if (params && params!.length === 2) {
    const URL = URL_USERS(parseInt(params![0]), parseInt(params![1]))
    const data = await GetFetch(URL)
    res.status(200).json(data)
  } else if (params && params!.length === 1) {
    const URL = URL_USER_ID(parseInt(params![0]))
    const token = await getToken({
      req: _req,
      secret: authOptions.secret,
    })
    const response = await fetch(URL, {
      headers: { Authorization: `Bearer ${token?.token}` },
      cache: "no-store",
    })
    const data = await response.json()
    res.status(200).json(data)
  }
}
