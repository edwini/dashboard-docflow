// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { URL_ROLE } from "@/utils/apis";
import type { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "./auth/[...nextauth]";

type Data = {
  name: string;
};
//Permite enviar datos al servidor del docflow-api
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  const token: any = await getToken({
    req: req,
    secret: authOptions.secret,
  });
  const URL = URL_ROLE();
  const response = await fetch(URL, {
    method: req.method,
    headers: {
      Authorization: `Bearer ${token?.token}`,
      "Content-Type": "application/json",
    },
    body: req.body,
  });
  const data = await response.json();
  res.status(response.status).json(data);
}
