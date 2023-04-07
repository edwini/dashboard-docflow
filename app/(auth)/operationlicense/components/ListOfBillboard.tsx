import { Icons } from "@/components/icons"
import { STATUS_BILLBOARD } from "@/data/data"
import { BillBoards } from "@/app/(auth)/operationlicense/types/OperationLicense"
import DropDownBillboardAction from "./DropDownBillboardAction"
import StatusBillboard from "./StatusBillboard"

export function ListOfBillboard({
  billboards,
}: { billboards: BillBoards[] | [] }) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-2 py-3">
            Tipo
          </th>
          <th scope="col" className="px-6 py-3">
            Ubicación
          </th>
          <th scope="col" className="px-2 py-3">
            Medidas (Ancho x Alto x Largo)
          </th>
          <th scope="col" className="px-2 py-3">
            Tiene poste
          </th>
          <th scope="col" className="px-4 py-3">
            Estado
          </th>
          <th scope="col" className="px-4 py-3">
            Foto
          </th>
        </tr>
      </thead>
      <tbody>
        {billboards.map(
          (
            {
              id,
              type,
              location,
              weight,
              height,
              large,
              pole,
              photo,
              status,
            }: BillBoards,
            index,
          ) => {
            return (
              <tr
                key={id}
                className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {type}
                </th>
                <td className="px-6 py-4">{location}</td>
                <td className="px-2 py-4">{`${weight}m x ${height}m x ${large}m`}</td>
                <td className="px-2 py-4">{pole ? "SI" : "NO"}</td>
                <td className="px-4 py-4 flex justify-between items-center">
                  <StatusBillboard id={id} status={status} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex w-0 flex-1 items-center">
                    <Icons.paperClip
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      imagen_rotulo_{index}.jpg
                    </span>
                    <a
                      download={`imagen_rotulo_${index}.png`}
                      href={photo}
                      target="blank"
                      className="font-medium text-amber-600 hover:text-amber-500"
                    >
                      Ver imagen
                    </a>
                  </div>
                </td>
              </tr>
            )
          },
        )}
      </tbody>
    </table>
  )
}