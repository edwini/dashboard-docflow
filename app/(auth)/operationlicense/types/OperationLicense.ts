import { STATUS_OPERATION_LICENSE } from "@/data/data";
import { Appovement } from "./ApprovementType";
import { BillBoards } from "./BillboardsType";

export type OperationLicensePagesType = {
	content: OperationLicenseType[];
	pageable: null;
	last: boolean;
	totalPages: number;
	totalElements: number;
	size: number;
	number: number;
	sort: null;
	first: boolean;
	numberOfElements: number;
	empty: boolean;
};
type Document = {
	signatureBase64: string;
	rtnBase64: string;
	dniBase64: string;
	municipalSolvencyBase64: string;
	traderWrittingBase64: string;
	registrationCommerceBase64: string;
	lastOperationLicenseBase64: string;
	salesStatementBase64: string;
	incomeCondensateBase64: string;
	leasingContractBase64: string;
	soilContrancyBase64: string;
	viabilityConstancyBase64: string;
};

export type OperationLicenseType = {
	createdBy: string;
	updatedBy: string | null;
	createdDate: string | null;
	updatedDate: string | null;
	id: number;
	identification: string;
	businessName: string;
	legalRepresentative: string;
	address: string;
	phone: string;
	otherPhone: string;
	catastralId: string;
	commercialName: string;
	rtn: string;
	rtm: string;
	expedient: string;
	email: string;
	webSide: string;
	production: number;
	services: number;
	sells: number;
	otherFunds: number;
	controlledProduct: number;
	units: number;
	status: STATUS_OPERATION_LICENSE;
	licenseYear: number;
	billboards: BillBoards[];
	approvements: Appovement[];
	document: Document;
	rejectionReason: string;
	saleAlcohol: boolean;
	saleAlcoholApprovedBy: string | null
	saleAlcoholApprovedDate: string | null

};
