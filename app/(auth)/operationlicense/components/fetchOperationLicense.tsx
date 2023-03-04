import { GetFetch } from "@/lib/fetch"
import { OperationLicenseType } from "@/types/OperationLicense"
import { URL_OPERATION_LICENSE, URL_OPERATION_LICENSE_ID } from "@/utils/apis"

export async function fetchOperationLicense(page: number) {
  const limit = parseInt(process.env.MAX_PAGE_SIZE || "5")
  const data = await GetFetch(URL_OPERATION_LICENSE(page, limit))
  if (!data) {
    return {
      content: [],
      totalPages: 1,
    }
  }
  return data
}

export async function fetchOperationLicenseId(
  licenseid: number,
): Promise<OperationLicenseType | null> {
  const data = await GetFetch(URL_OPERATION_LICENSE_ID(licenseid))
  if (!data) {
    return null
  }
  return data.content
}

export async function fetchOperationLicenseAPI(page: number) {
  const limit = process.env.MAX_PAGE_SIZE
  const data = await GetFetch(
    `${process.env.NEXTAUTH_URL}/api/operationlicense/${page}/${limit}/`,
  )
  if (!data) {
    return {
      content: [],
      totalPages: 1,
    }
  }
  return data
}
