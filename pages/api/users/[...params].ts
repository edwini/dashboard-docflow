import { GetFetch } from "@/lib/fetch";
import { URL_OPERATION_LICENSE, URL_USERS } from "@/utils/apis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {
  const { params } = _req.query || {};

  const URL = URL_USERS(parseInt(params![0]), parseInt(params![1]));
  const data = await GetFetch(URL);
  res.status(200).json(data);
}
