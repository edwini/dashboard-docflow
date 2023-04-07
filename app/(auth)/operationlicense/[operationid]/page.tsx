import { Icons } from "@/components/icons"
import { BackButton } from "@/components/ui/BackButton"
import { tiempoTranscurrido } from "@/utils/fomaters"
import MainWrapper from "../../components/MainWrapper"
import { fetchOperationLicenseId } from "../components/fetchOperationLicense"
import { ListOfBillboard } from "../components/ListOfBillboard"
export default async function Page({
  params,
}: {
  params: { operationid: number }
}) {
  const { operationid } = params

  const operationLicense = await fetchOperationLicenseId(operationid)

  return (
    <MainWrapper title="Detalle de licencia">
      <div className="flex pb-4">
        <BackButton variant="link">
          <Icons.chevronLeft />
          Regresar
        </BackButton>

        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Activar
          </button>
        </span>
      </div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Información General
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Detalles generales de la aplicación de icencia de operación del
            contribuyente
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">RTM</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.rtm}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Expediente</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.expedient}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Clave catastral
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.catastralId}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">RTN</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.rtn}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">DNI</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.identification}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre de comerciante
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.commercialName}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Nombre de negocio
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.businessName}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Representante legal
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.legalRepresentative}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Dirección de negocio
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.address}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Correo electrónico
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Pagína web</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <a href="www.google.com">{operationLicense?.email}</a>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Telefonos de contacto
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.phone} / {operationLicense?.otherPhone}
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Declaración jurada de ingresos
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Volumen de producción
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.production}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Volumen por servicios
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.services}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Volumen por ventas
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.sells}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Producto Controlado
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.controlledProduct}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Unidades billares, Maquin y otros
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.units}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Otros ingresos
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {operationLicense?.otherFunds}
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Declaración de rotulos y vallas
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Total de rotulos declarados{" "}
            <span className="text-lg">
              {operationLicense?.billboards?.length || 0}
            </span>
          </p>
        </div>
        <div className="border-t border-gray-200 overflow-x-scroll ">
          <ListOfBillboard billboards={operationLicense?.billboards || []} />
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Frima de declaración y documentos adjuntos
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Firma
                </th>
                <th scope="col" className="px-6 py-3">
                  RTN
                </th>
                <th scope="col" className="px-6 py-3">
                  DNI
                </th>
                <th scope="col" className="px-6 py-3">
                  Solvencia municipal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.signature || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Firma de cliente no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.signature || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Firma de cliente no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.signature || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Firma de cliente no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <div className="flex w-0 flex-1 items-center">
                    <Icons.paperClip
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      solvencia_municipal.pdf
                    </span>
                    <a
                      download={"solvencia_municipal.pdf"}
                      href="data:image/png;base64,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"
                      target="blank"
                      className="font-medium text-amber-600 hover:text-amber-500"
                    >
                      Ver PDF
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Estado de la licencia:{" "}
            <span className="p-4 boder-solid border-2 rounded-md border-amber-600 uppercase text-lg">
              {operationLicense?.status}
            </span>{" "}
            desde{" "}
            {tiempoTranscurrido(
              operationLicense?.updatedDate ?? operationLicense?.createdDate,
            )}
          </h3>
        </div>
      </div>
      <div className="flex pt-4">
        <BackButton variant="link">
          <Icons.chevronLeft />
          Regresar
        </BackButton>
        <span className="ml-3 hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Activar
          </button>
        </span>
      </div>
    </MainWrapper>
  )
}
