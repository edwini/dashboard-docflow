import { STATUS_BILLBOARD } from "@/data/data";
import { MessagesType } from "@/types/MessagesType";

export type BillBoards = {
	id: number;
	operationLicenseId: number;
	type: string;
	location: string;
	weight: number;
	height: number;
	large: number;
	photo: string;
	pole: boolean;
	diameter: number;
	poleLocation: string;
	status: STATUS_BILLBOARD;
	updatedDate: string;
	updatedBy: string;
};
export type BillBoardMessage = {
	messages?: MessagesType;
	content?: BillBoards;
};
