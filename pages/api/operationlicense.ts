import { GetFetch } from "@/lib/fetch";
import { URL_OPERATION_LICENSE } from "@/utils/apis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {
  const URL = URL_OPERATION_LICENSE();
  const data = await GetFetch(URL);
  res.status(200).json(data);
}
