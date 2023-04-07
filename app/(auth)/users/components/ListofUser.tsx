"use client"
import { UserType } from "@/app/(auth)/users/types/UserType"
import { Toaster } from "@/components/ui/Toaster"
import { getRoleName } from "@/data/data"
import { toast } from "@/hooks/useToast"
import useSWRMutation from "swr/mutation"
import { getStatusName } from "@/utils/fomaters"
import DropDownUserAction from "./DropDownUserAction"
import { updateUser } from "./fetchUsers"
export function ListofUser({ users }: { users: UserType[] }) {
  const { trigger, isMutating } = useSWRMutation(
    "POST:/api/users/reset",
    updateUser,
  )
  async function handleResetPassword(id: number) {
    const payload = {
      username: users.find((f) => f.id === id)?.username,
    } as UserType
    const response = await trigger(payload)
    response?.ok &&
      toast({
        variant: "default",
        title: "Resetear contraseña",
        description: `Se ha enviado un correo a ${
          users.find((f) => f.id === id)?.username
        } para que pueda cambiar su contraseña`,
        duration: 5000,
      })
  }

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Username
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
            <td className="px-6 py-4 ">{getStatusName(user.status)}</td>
            <td className="px-6 py-4">
              <DropDownUserAction
                id={user.id as number}
                resetPassword={handleResetPassword}
              />

              <Toaster />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
