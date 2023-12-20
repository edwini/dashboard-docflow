"use client";

import { Icons } from "@/components/icons";
import { getStatusOperationName } from "@/utils/fomaters";
import {
	AutocompleteOptionsWithMetadata,
	BaseItem,
	createAutocomplete,
} from "@algolia/autocomplete-core";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
	OperationLicensePagesType,
	OperationLicenseType,
} from "../types/OperationLicense";
import { fetchOperationLicenseFiltering } from "./fetchOperationLicense";
export default function AutoComplete(props) {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false,
	});
	const onSearchDone = (data) => {
		console.log(data);
	};

	const autocomplete = useMemo(
		() =>
			createAutocomplete({
				onStateChange: ({ state }) =>
					setAutocompleteState({
						collections: state.collections,
						isOpen: state.isOpen,
					}),
				getSources: () => [
					{
						sourceId: "collections",
						getItems: ({ query }) => {
							if (query.trim().length > 0) {
								return fetchOperationLicenseFiltering(
									`/api/operationlicense/query?q=${query}`,
								).then((data) => data);
							}
							return [];
						},
					},
				],

				...props,
			}),
		[],
	);

	const inputRef = useRef(null);
	const panelRef = useRef(null);

	const formProps = autocomplete?.getFormProps({
		inputElement: inputRef.current,
	});
	const inputProps = autocomplete?.getInputProps({
		inputElement: inputRef.current,
		...props,
	});
	return (
		<>
			<label htmlFor="table-search" className="sr-only">
				Buscar
			</label>
			<div className="relative mt-1">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Icons.search />
				</div>
				<form {...formProps}>
					<input
						{...inputProps}
						type="text"
						className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Buscar por DNI o nombre de negocio"
					/>
					{autocompleteState.isOpen && (
						<div
							className="absolute mt-14 top-0 left-0 border border-amber-400 z-10 w-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
							ref={panelRef}
							{...autocomplete.getPanelProps()}
						>
							{autocompleteState.collections.map((collection) => {
								const { items } = collection;
								console.log(items, collection);

								return (
									<section key={collection.sourceId}>
										{items.length > 0 && (
											<ul className="p-2" {...autocomplete.getListProps()}>
												{items.map((item) => (
													<OperationItem item={item} />
												))}
											</ul>
										)}
									</section>
								);
							})}
						</div>
					)}
				</form>
			</div>
		</>
	);
}
const OperationItem = ({ item }) => {
	return (
		<li key={item.id}>
			<Link
				href={`/operationlicense/${item.id}`}
				className="hover:text-amber-500"
			>
				<h3 className="font-bold inline-flex">
					{item.businessName} {getStatusOperationName(item.status)}
				</h3>
				<div>
					DNI {item.identification} - RTN {item.rtn}
				</div>
			</Link>
		</li>
	);
};
