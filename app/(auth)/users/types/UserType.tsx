import { ROLES, STATUS } from "@/data/data";
import { MessagesType } from "../../../../types/MessagesType";
export type UserPagesType = {
	content: UserType[];
	pageable: {};
	last: boolean;
	totalPages: number;
	totalElements: number;
	size: number;
	number: number;
	sort: {};
	first: boolean;
	numberOfElements: number;
	empty: boolean;
};
export type UserType = {
	id?: number;
	username: string;
	name: string;
	phone: string;
	status: STATUS;
	taxpayer: boolean;
	createdBy?: string;
	updatedBy?: string;
	updatedDate?: Date;
	createdDate?: Date;
	roleId: ROLES;
	token?: string;
	rtn?: string;
	dni?: string;
};
export type UserMessageType = {
	content: UserType;
	messages: MessagesType;
};
export type FormUserProps = {
	title: string;
	onSubmitDone: (data: UserType) => Promise<void>;
	values?: UserType;
	role: string; // "edit" | "create"
};
