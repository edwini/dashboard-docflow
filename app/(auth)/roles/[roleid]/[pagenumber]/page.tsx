import MainWrapper from "@/app/(auth)/components/MainWrapper";
import { Icons } from "@/components/icons";
import PaginationLinks from "@/components/ui/PaginationLinks";
import Link from "next/link";
import { ListofRoles } from "../../components/ListofRoles";
import { fetchRoles } from "../../components/fetchRoles";

/**
 *
 * @param userid representa el limite de registros por pagina
 * @param pagenumber representa la pagina actual
 * @returns
 */
export default async function Page({
	params,
}: {
	params: { pagenumber: number };
}) {
	const { pagenumber } = params;

	const roles = await fetchRoles(pagenumber - 1);

	return (
		<MainWrapper title="Administración de roles">
			<div className="relative overflow-x-auto">
				<div className="p-4 bg-white dark:bg-gray-900 lg:flex lg:items-center lg:justify-between">
					<div className="mt-5 flex lg:mt-0 lg:ml-4">
						<Link
							href="/roles/0?action=new"
							className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
						>
							Crear nuevo rol
						</Link>
					</div>
				</div>
				<ListofRoles roles={roles?.content} />
			</div>
			<PaginationLinks
				parentPage="roles"
				currentPage={pagenumber}
				totalPages={roles.totalPages}
			/>
		</MainWrapper>
	);
}
