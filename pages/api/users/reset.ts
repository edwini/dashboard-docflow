import { URL_RESET_PASSWORD } from "@/utils/apis";
import type { NextApiRequest, NextApiResponse } from "next";  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<[]>,
) {   
  const URL = URL_RESET_PASSWORD(); 
    const response = await fetch(URL, {
      method: req.method,
      headers: { 
        "Content-Type": "application/json",
      },
      body:  req.body
    });
    console.log("reset api")
    const data = await response.json(); 
    res.status(200).json(data);
 
}
