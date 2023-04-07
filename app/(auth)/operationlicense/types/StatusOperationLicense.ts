export type StatusOperationLicense = {
  id: number //operationLicenseId
  status: string
  rejectReason?: string
  economicActivity?: string
  totalFine?: number
  totalLatePayment?: number
  totalBillboards?: number
  updatedBy?: string
  updatedDate?: string
}
