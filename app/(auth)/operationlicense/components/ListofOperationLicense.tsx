"use client"
import { Icons } from "@/components/icons"
import { useState } from "react"
import Pagination from "../../components/Pagination"
import { fetchOperationLicense } from "./fetchOperationLicense"

export function ListofOperationLicense() {
  const [operationLicense, setOperationLicense] = useState([])
  async function handlePageChange(page: number) {
    const list = await fetchOperationLicense()
    console.log("list of operation license", list)
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
              Gestión
            </th>
            <th scope="col" className="px-6 py-3">
              Negocio
            </th>
            <th scope="col" className="px-6 py-3">
              RTN
            </th>
            <th scope="col" className="px-6 py-3">
              Emitido
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              1
            </th>
            <td className="px-6 py-4">Digital Equipment Corporation</td>
            <td className="px-6 py-4">05011980009231</td>
            <td className="px-6 py-4">23-01-2023 18:25</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2" />{" "}
                Pendiente
              </div>
            </td>
          </tr>
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              2
            </th>
            <td className="px-6 py-4">Digital Equipment Corporation</td>
            <td className="px-6 py-4">05011980009231</td>
            <td className="px-6 py-4">23-01-2023 18:25</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2" />{" "}
                Aprobado
              </div>
            </td>
          </tr>
          <tr className="cursor-pointer bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              3
            </th>
            <td className="px-6 py-4">Digital Equipment Corporation</td>
            <td className="px-6 py-4">05011980009231</td>
            <td className="px-6 py-4">23-01-2023 18:25</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />{" "}
                Denegado
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        currentPage={1}
        maxPageLimit={5}
        minPageLimit={0}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
