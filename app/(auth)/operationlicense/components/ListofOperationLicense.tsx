import { OperationLicenseType } from "@/types/OperationLicense"
import Link from "next/link"

export function ListofOperationLicense({
  operations,
}: { operations: OperationLicenseType[] }) {
  return (
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
          <th scope="col" className="px-6 py-3">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {operations.map((operation: Partial<OperationLicenseType>) => (
          <tr
            key={operation.id}
            className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {operation.id}
            </th>
            <td className="px-6 py-4">{operation.commercialName}</td>
            <td className="px-6 py-4">{operation.rtn}</td>
            <td className="px-6 py-4">{operation.createdDate}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500 mr-2" />
                {operation.status}
              </div>
            </td>
            <td className="px-6 py-4">
              <Link
                href={`/operationlicense/${operation.id}`}
                className="hover:text-amber-600 font-semibold"
              >
                Ver Gestión
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
