import MainWrapper from "@/app/(auth)/components/MainWrapper";
import PaginationLinks from "@/components/ui/PaginationLinks";
import { ListofOperationLicense } from "../../components/ListofOperationLicense";
import AutoComplete from "../../components/SearchAutocomplete.jsx";
import { fetchOperationLicense } from "../../components/actions";

/**
 *
 * @param pagenumber representa la pagina actual
 * @returns
 */
export default async function Page({
	params,
}: {
	params: { pagenumber: number };
}) {
	const { pagenumber } = params;

	const operations = await fetchOperationLicense(pagenumber - 1);
	return (
		<MainWrapper title="Permisos de operación">
			<div className="relative overflow-x-auto">
				<div className="p-4 bg-white dark:bg-gray-900">
					<AutoComplete />
				</div>
				<ListofOperationLicense operations={operations?.content} />
			</div>
			<PaginationLinks
				parentPage="operationlicense"
				currentPage={pagenumber}
				totalPages={operations.totalPages}
			/>
		</MainWrapper>
	);
}
