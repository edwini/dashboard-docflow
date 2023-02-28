import { Button } from "@/components/ui/button"
import { UserType } from "@/types/UserType"
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
            className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {user.username}
            </th>
            <td className="px-6 py-4">{user.name}</td>
            <td className="px-6 py-4">{user.roleId}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                {user.status}
              </div>
            </td>
            <td className="px-6 py-4">
              <Button variant={"ghost"}>Editar</Button>
              <Button variant={"ghost"} className="text-red-700">
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
