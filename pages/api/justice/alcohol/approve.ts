import { URL_APPROVE_ALCOHOL } from "@/utils/apis"
import { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { authOptions } from "../../auth/[...nextauth]"

export default async function handler(
    _req: NextApiRequest,
    res: NextApiResponse,
) {
    const URL = URL_APPROVE_ALCOHOL()
    const token = await getToken({
        req: _req,
        secret: authOptions.secret,
    })
    const payload = JSON.parse(_req.body)
    const response = await fetch(URL, {
        method: _req.method,

        headers: {
            Authorization: `Bearer ${token?.token}`,
            "Content-Type": "application/json",
        },
        cache: "force-cache",
        body: JSON.stringify(payload),
    })
    const data = await response.json()

    res.status(response.status).json(data.messages)
}
