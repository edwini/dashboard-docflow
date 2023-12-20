import { RoleType } from "../types/RoleType";
import DropDownRoleAction from "./DropDownRoleAction";
export function ListofRoles({ roles }: { roles: RoleType[] }) {
	return (
		<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						ID
					</th>
					<th scope="col" className="px-6 py-3">
						Rol
					</th>
					<th scope="col" className="px-6 py-3">
						Descripción
					</th>
					<th scope="col" className="px-6 py-3">
						Acción
					</th>
				</tr>
			</thead>
			<tbody>
				{roles.map((item: RoleType) => (
					<tr
						key={item.id}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.id}
						</th>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{item.name}
						</th>
						<td className="px-6 py-4">{item.description}</td>
						<td className="px-6 py-4">
							<DropDownRoleAction id={item.id} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
