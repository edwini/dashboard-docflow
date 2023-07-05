import { Icons } from "@/components/icons"
import { BackButton } from "@/components/ui/BackButton"
import { ROLES, STATUS_BILLBOARD } from "@/data/data"
import { FormatDate, tiempoTranscurrido } from "@/utils/fomaters"
import MainWrapper from "../../components/MainWrapper"
import RejectOperation from "../components/DialogReject"
import SendtoSimafi from "../components/DialogSendtoSimafi"
import { fetchOperationLicenseId } from "../components/fetchOperationLicense"
import { ListOfBillboard } from "../components/ListOfBillboard"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

export default async function Page({
  params,
}: {
  params: { operationid: number }
}) {
  const { operationid } = params

  const session = await getServerSession(authOptions)
  const operationLicense = await fetchOperationLicenseId(operationid)
  const permite =
    (operationLicense?.billboards?.length === 0 ||
      operationLicense?.billboards.some(
        (billboard) => billboard.status !== STATUS_BILLBOARD.PENDIENTE,
      )) === undefined
      ? false
      : true

  return (
    <MainWrapper title="Detalle de licencia">
      <div className="flex pb-4">
        <BackButton variant="link">
          <Icons.chevronLeft />
          Regresar
        </BackButton>
        {session?.user.content.roleId === ROLES.ADMINISTRADOR ? (
          <>
            <SendtoSimafi enabled={permite} operationId={params.operationid} />
            <RejectOperation operationId={params.operationid} />
          </>
        ) : (
          <></>
        )}
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
                  Solvencia municipal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.document.signatureBase64 || ""}
                    width="500px"
                    height="250px"
                    className="object-cover object-center  transform hover:scale-150 transition duration-300 hover:translate-x-1/2 hover:-translate-y-1/2"
                    alt="Imagen no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={
                      operationLicense?.document.municipalSolvencyBase64 || ""
                    }
                    width="500px"
                    height="250px"
                    className="object-cover object-center  transform hover:scale-150 transition duration-300 hover:-translate-x-1/2 hover:-translate-y-1/2"
                    alt="Imagen no  disponible"
                  />
                </td>
              </tr>
              <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <th scope="col" className="px-6 py-3">
                  RTN
                </th>
                <th scope="col" className="px-6 py-3">
                  DNI
                </th>
              </tr>
              <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.document.rtnBase64 || ""}
                    width="500px"
                    height="250px"
                    className="object-cover object-center  transform hover:scale-150 transition duration-300 hover:translate-x-1/2 hover:-translate-y-1/2"
                    alt="Imagen no disponible"
                  />
                </td>
                <td className="px-6 py-4">
                  <img
                    src={operationLicense?.document.dniBase64 || ""}
                    width="500px"
                    height="250px"
                    className="object-cover object-center  transform hover:scale-150 transition duration-300 hover:-translate-x-1/2 hover:-translate-y-1/2"
                    alt="Imagen no disponible"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Estado de la licencia hace{" "}
            {tiempoTranscurrido(
              operationLicense?.updatedDate ?? operationLicense?.createdDate,
            )}
            :{" "}
            <span className="p-4 boder-solid border-2 rounded-md border-amber-600 uppercase text-lg">
              {operationLicense?.status}
            </span>
          </h3>
        </div>
      </div>
      <div className="flex pt-4 pb-4">
        <BackButton variant="link">
          <Icons.chevronLeft />
          Regresar
        </BackButton>
        {session?.user.content.roleId === ROLES.ADMINISTRADOR ? (
          <>
            <SendtoSimafi enabled={permite} operationId={params.operationid} />
            <RejectOperation operationId={params.operationid} />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Información de auditoria
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Información de auditoria del permiso de operación.
          </p>
        </div>
        <div className="border-t border-gray-200 overflow-x-scroll ">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" colSpan={2} className="px-2 py-3">
                  Registrado por
                </th>
                <th scope="col" colSpan={2} className="px-6 py-3">
                  Modificado por
                </th>
                <th scope="col" className="px-2 py-3">
                  Motivo de rechazo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-2 py-4">
                  {operationLicense?.createdBy}
                </td>
                <td className="px-6 py-4">
                  {FormatDate(operationLicense?.createdDate)}
                </td>
                <td className="px-2 py-4">{operationLicense?.updatedBy}</td>
                <td className="px-2 py-4">
                  {FormatDate(operationLicense?.updatedDate)}
                </td>
                <td className="px-4 py-4 flex justify-between items-center">
                  {operationLicense?.rejectionReason}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainWrapper>
  )
}
