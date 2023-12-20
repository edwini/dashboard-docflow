import { GetFetch } from "@/lib/fetch";
import { URL_ROLE } from "@/utils/apis";

export async function fetchRoles(page: number) {
	const limit = parseInt(process.env.MAX_PAGE_SIZE || "5");
	const URL = URL_ROLE(page, limit);
	const data = await GetFetch(URL);
	if (!data) {
		return {
			content: [],
			totalPages: 1,
		};
	}

	return data;
}
