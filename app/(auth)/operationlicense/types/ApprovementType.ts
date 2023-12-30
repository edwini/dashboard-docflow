import { APPOVED_TYPES } from "@/data/data";

export type Appovement = {
    id: number;
    approvedType: APPOVED_TYPES;
    operationLicenseId: number;
    approvedDate: string;
    approvedBy: string;
};