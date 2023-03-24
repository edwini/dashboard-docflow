import { UserType } from "@/app/(auth)/users/types/UserType"
import { getRoleName } from "@/data/data"
import { getStatusName } from "@/utils/fomaters"
import DropDownUserAction from "./DropDownUserAction"
export function ListofUser({ users }: { users: UserType[] }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Rol
          </th>
          <th scope="col" className="px-6 py-3">
            Contribuyente
          </th>
          <th scope="col" className="px-6 py-3">
            Estado
          </th>
          <th scope="col" className="px-6 py-3">
            Acción
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: UserType) => (
          <tr
            key={user.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.username}
            </th>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{getRoleName(user.roleId)}</td>
            <td className="px-6 py-4">{user.taxpayer ? "SI" : "NO"}</td>
            <td className="px-6 py-4">{getStatusName(user.status)}</td>
            <td className="px-6 py-4">
              <DropDownUserAction id={user.id as number} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
