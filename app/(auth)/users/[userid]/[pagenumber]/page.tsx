import MainWrapper from "@/app/(auth)/components/MainWrapper"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import PaginationLinks from "@/components/ui/PaginationLinks"
import { log } from "console"
import { fetchUsers } from "../../components/fetchUsers"
import { ListofUser } from "../../components/ListofUser"

/**
 *
 * @param userid representa el limite de registros por pagina
 * @param pagenumber representa la pagina actual
 * @returns
 */
export default async function Page({
  params,
}: {
  params: { pagenumber: number }
}) {
  const { pagenumber } = params

  const users = await fetchUsers(pagenumber - 1)

  return (
    <MainWrapper title="Administración de usuarios">
      <div className="relative overflow-x-auto">
        <div className="p-4 bg-white dark:bg-gray-900">
          <label htmlFor="table-search" className="sr-only">
            Buscar
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Icons.search />
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar por ID, nombre"
            />
          </div>
        </div>
        <ListofUser users={users?.content} />
      </div>
      <PaginationLinks
        parentPage="users"
        currentPage={pagenumber}
        totalPages={users.totalPages}
      />
    </MainWrapper>
  )
}
