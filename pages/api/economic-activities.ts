// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { URL_ECONOMIC_ACTIVITY } from "@/utils/apis"
import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { authOptions } from "./auth/[...nextauth]"

//Permite enviar datos al servidor del docflow-api
export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  const URL = URL_ECONOMIC_ACTIVITY()
  const token = await getToken({
    req: _req,
    secret: authOptions.secret,
  })
  const response = await fetch(URL, {
    headers: { Authorization: `Bearer ${token?.token}` },
    cache: "force-cache",
  })
  const data = await response.json()
  res.status(200).json(data)
}
