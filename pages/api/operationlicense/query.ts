import { GetFetch } from "@/lib/fetch"
import {
  URL_OPERATION_LICENSE_FILTERING,
  URL_REJECTION_REASON,
} from "@/utils/apis"
import type { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { getToken } from "next-auth/jwt"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const { q } = _req.query as { q: string }

  const URL = URL_OPERATION_LICENSE_FILTERING(q)
  console.log("URL", URL)

  const token = await getToken({
    req: _req,
    secret: authOptions.secret,
  })
  const response = await fetch(URL, {
    headers: { Authorization: `Bearer ${token?.token}` },
    cache: "no-cache",
  })
  const data = await response.json()
  res.status(200).json(data.content)
}
