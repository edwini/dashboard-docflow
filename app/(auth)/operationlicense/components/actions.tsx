import { OperationLicenseType } from "@/app/(auth)/operationlicense/types/OperationLicense";
import { GetFetch } from "@/lib/fetch";
import {
	URL_OPERATION_LICENSE,
	URL_OPERATION_LICENSE_FILTERING,
	URL_OPERATION_LICENSE_ID,
} from "@/utils/apis";
import { BillBoards } from "../types/BillboardsType";

export async function fetchOperationLicense(page: number) {
	const limit = parseInt(process.env.MAX_PAGE_SIZE || "5");
	const data = await GetFetch(URL_OPERATION_LICENSE(page, limit));
	if (!data) {
		return {
			content: [],
			totalPages: 1,
		};
	}
	return data;
}

export async function fetchOperationLicenseId(
	licenseid: number,
): Promise<OperationLicenseType | null> {
	const data = await GetFetch(URL_OPERATION_LICENSE_ID(licenseid));
	if (!data) {
		return null;
	}
	return data.content;
}

export async function fetchOperationLicenseAPI(page: number) {
	const limit = process.env.MAX_PAGE_SIZE;
	const data = await GetFetch(
		`${process.env.NEXTAUTH_URL}/api/operationlicense/${page}/${limit}/`,
	);
	if (!data) {
		return {
			content: [],
			totalPages: 1,
		};
	}
	return data;
}

export async function updateBillboard<BillBoardMessage>(
	url: string,
	{ arg }: { arg: Partial<BillBoards> },
) {
	const urlapi = url;
	const response = await fetch(urlapi, {
		method: "PUT",
		body: JSON.stringify(arg),
	});

	return response;
}

export async function updateStatusOperationLicense<StatusOperationLicense>(
	url: string,
	{ arg }: { arg: StatusOperationLicense },
) {
	const urlapi = url;
	const response = await fetch(urlapi, {
		method: "PUT",
		body: JSON.stringify(arg),
	});

	return response;
}

export async function fetchEconomicActivities(url: string) {
	return fetch(url).then((res) => res.json());
}

export async function fetchRejectionReasons(url: string) {
	return fetch(url).then((res) => res.json());
}

export async function fetchOperationLicenseFiltering(url: string) {
	return fetch(url).then((res) => res.json());
}
export async function fetchOperationLicenseFiltering2(
	serchValue: string,
): Promise<OperationLicenseType[] | null> {
	console.log(serchValue);
	const data = await GetFetch(URL_OPERATION_LICENSE_FILTERING(serchValue));

	if (!data) {
		return null;
	}
	console.log(data);

	return data.content;
}

type ApprovedMessage = { id: number; updatedBy: string };
export async function approvedJusticeRole<ApprovedMessage>(
	url: string,
	{ arg }: { arg: ApprovedMessage },
) {
	const urlapi = url;
	const response = await fetch(urlapi, {
		method: "POST",
		body: JSON.stringify(arg),
	});
	return response;
}
