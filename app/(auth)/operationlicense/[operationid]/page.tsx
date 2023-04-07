import { Icons } from "@/components/icons"
import { BackButton } from "@/components/ui/BackButton"
import { tiempoTranscurrido } from "@/utils/fomaters"
import MainWrapper from "../../components/MainWrapper"
import RejectOperation from "../components/DialogReject"
import SendtoSimafi from "../components/DialogSendtoSimafi"
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
        <SendtoSimafi operationId={params.operationid} />
        <RejectOperation />
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
                    src={operationLicense?.document.signatureBase64 || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Imagen no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.document.rtnBase64 || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Imagen no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.document.dniBase64 || ""}
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Imagen no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={
                      operationLicense?.document.municipalSolvencyBase64 || ""
                    }
                    width="250px"
                    height="120px"
                    className="object-cover object-center"
                    alt="Imagen no  disponible"
                  />
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
