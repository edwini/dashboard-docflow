import { GetFetch } from "@/lib/fetch";
import { URL_USERS } from "@/utils/apis";
import { UserType } from "../types/UserType";

export async function fetchUsers(page: number) {
	const limit = parseInt(process.env.MAX_PAGE_SIZE || "5");
	const URL = URL_USERS(page, limit);
	const data = await GetFetch(URL);
	if (!data) {
		return {
			content: [],
			totalPages: 1,
		};
	}

	return data;
}

export async function fetchOneUser(url: string) {
	return fetch(url).then((res) => res.json());
}

export async function updateUser(url: string, { arg }: { arg: UserType }) {
	const method = url.split(":")[0];
	const urlapi = url.split(":")[1];
	const response = await fetch(urlapi, {
		method: method,
		body: JSON.stringify(arg),
	});

	return response;
}
