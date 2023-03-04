export type OperationLicensePagesType = {
  content: OperationLicenseType[]
  pageable: {}
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: {}
  first: boolean
  numberOfElements: number
  empty: boolean
}

export type BillBoards = {
  id: number
  licenseId: number
  type: string
  location: string
  weight: number
  height: number
  large: number
  photo: string
  pole: boolean
}

export type OperationLicenseType = {
  createdBy: string
  updatedBy: string | null
  createdDate: string | null
  updatedDate: string | null
  id: number
  identification: string
  businessName: string
  legalRepresentative: string
  address: string
  phone: string
  otherPhone: string
  catastralId: string
  commercialName: string
  rtn: string
  email: string
  webSide: string
  production: number
  services: number
  sells: number
  otherFunds: number
  controlledProduct: number
  units: number
  status: string
  licenseYear: number
  signature: string
  billboards: BillBoards[]
}
