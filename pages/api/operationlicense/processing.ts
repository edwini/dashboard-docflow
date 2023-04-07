// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BillBoardMessage } from "@/app/(auth)/operationlicense/types/BillboardsType"
import { ROLES } from "@/data/data"
import { URL_BILLBOARDS, URL_OPERATION_LICENSE_STATUS } from "@/utils/apis"
import type { NextApiRequest, NextApiResponse } from "next"
import { getToken } from "next-auth/jwt"
import { authOptions } from "../auth/[...nextauth]"

//Permite enviar datos al servidor del docflow-api
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const token: any = await getToken({
    req: req,
    secret: authOptions.secret,
  })
  const URL = URL_OPERATION_LICENSE_STATUS("processing")
  console.log("ROL", token.content.roleId)
  const roles = [ROLES.ADMINISTRADOR, ROLES.CONTROL_TRIBUTARIO]
  if (!roles.includes(token.content.roleId)) {
    const data: BillBoardMessage = {
      messages: {
        errorMessage: "No tiene permisos para realizar esta acción",
        successMessage: "",
        infoMessage: "",
      },
    }
    res.status(500).json(data)
  } else {
    const response = await fetch(URL, {
      method: req.method,
      headers: {
        Authorization: `Bearer ${token?.token}`,
        "Content-Type": "application/json",
      },
      body: req.body,
    })
    const data = await response.json()

    res.status(response.status).json(data)
  }
}
