import { GetFetch } from "@/lib/fetch"

export async function fetchOperationLicense() {
  return await GetFetch("/api/operationlicense")
}
