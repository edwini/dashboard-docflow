import { GetFetch } from "@/lib/fetch";
import { URL_OPERATION_LICENSE } from "@/utils/apis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<[]>,
) {
  //los valores significativos son:
  /*
  numberOfElements: 10
  totalElements: 10
  totalPages: 1

  */
  const { params } = _req.query || {};

  console.log("API REQUEST ", params);
  const URL = URL_OPERATION_LICENSE(parseInt(params![0]), parseInt(params![1]));
  const data = await GetFetch(URL);
  res.status(200).json(data);
}
