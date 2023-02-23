"use client"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Pagination from "../../components/Pagination"
export function ListofUser() {
  function handlePageChange(page: number) {
    console.log("handlePageChange list of operation license", page)
  }
  return (
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
            placeholder="Buscar por gestión, negocio, RTN"
          />
        </div>
      </div>
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
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              amazingrace@mail.com
            </th>
            <td className="px-6 py-4">Grace Hopper</td>
            <td className="px-6 py-4">ADMIN</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                Activo
              </div>
            </td>
            <td className="px-6 py-4">
              <Button variant={"ghost"}>Editar</Button>
              <Button variant={"ghost"} className="text-red-700">
                Eliminar
              </Button>
            </td>
          </tr>
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              lady.ada@gmail.com
            </th>
            <td className="px-6 py-4">Lady Ada Augusta</td>
            <td className="px-6 py-4">SERVICIO</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                Activo
              </div>
            </td>
            <td className="px-6 py-4">
              <Button variant={"ghost"}>Editar</Button>
              <Button variant={"ghost"} className="text-red-700">
                Eliminar
              </Button>
            </td>
          </tr>
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              anafrank@gmail.com
            </th>
            <td className="px-6 py-4">Ana Frank</td>
            <td className="px-6 py-4">TESORERIA</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />{" "}
                Inactivo
              </div>
            </td>
            <td className="px-6 py-4">
              <Button variant={"ghost"}>Editar</Button>
              <Button variant={"ghost"} className="text-red-700">
                Eliminar
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        currentPage={1}
        maxPageLimit={5}
        minPageLimit={0}
        totalPages={3}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
