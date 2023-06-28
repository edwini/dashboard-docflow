// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { URL_USERS } from "@/utils/apis";
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
  req.body
  const userdata = { ...JSON.parse(req.body), password: "12345678" };

  const URL = URL_USERS();
  const response = await fetch(URL, {
    method: req.method,
    headers: {
      Authorization: `Bearer ${token?.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });
  console.log(userdata);

  const data = await response.json();
  res.status(response.status).json(data);
}
