export type StatusOperationLicense = {
  id: number //operationLicenseId
  status: string
  rejectionReason?: string
  economicActivityId?: string
  totalFine?: number
  totalLatePayment?: number
  totalBillboards?: number
  updatedBy?: string
}
