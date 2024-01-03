import { Icons } from "@/components/icons";
import { BackButton } from "@/components/ui/BackButton";
import { APPOVED_TYPES, ROLES, STATUS_BILLBOARD } from "@/data/data";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { FormatDate, tiempoTranscurrido } from "@/utils/fomaters";
import { getServerSession } from "next-auth";
import Link from "next/link";
import MainWrapper from "../../components/MainWrapper";
import ButtonApprove from "../components/ButtonAprove";
import RejectOperation from "../components/DialogReject";
import SendtoSimafi from "../components/DialogSendtoSimafi";
import { ListOfBillboard } from "../components/ListOfBillboard";

import UploadSoilConstancy from "../components/UploadSoilContancy";
import UploadViabilityConstancy from "../components/UploadViabilityConstancy";
import { fetchOperationLicenseId } from "../components/actions";

export default async function Page({
	params,
}: {
	params: { operationid: number };
}) {
	const { operationid } = params;

	const session = await getServerSession(authOptions);
	const operationLicense = await fetchOperationLicenseId(operationid);
	const permite =
		(operationLicense?.billboards?.length === 0 ||
			operationLicense?.billboards.some(
				(billboard) => billboard.status !== STATUS_BILLBOARD.PENDIENTE,
			)) === undefined
			? false
			: true;
	const leasingContractAppoved = operationLicense?.approvements.findLast(
		(approved) => approved.approvedType === APPOVED_TYPES.LEASING_CONTRACT,
	);
	const alcoholApproved = operationLicense?.approvements.findLast(
		(approved) => approved.approvedType === APPOVED_TYPES.ALCOHOL,
	);

	const GeneralInformationSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
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
						<div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
						<div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
						<div className="bg-gray-50  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
			</div>
		);
	};

	const StatementSalesSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-base font-semibold leading-6 text-gray-900">
						Declaración jurada de ingresos
					</h3>
				</div>
				<div className="border-t border-gray-200">
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
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
				</div>
			</div>
		);
	};

	const JusticeSection = () => {
		if (
			session?.user.content.roleId === ROLES.ADMINISTRADOR ||
			session?.user.content.roleId === ROLES.JUSTICIA
		) {
			return (
				<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-base font-semibold leading-6 text-gray-900">
							Departamento de Justicia
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							Aprobaciones del contrato de arrendamiento y la venta de alcohol
							si el contribuyente indica que lo vende.
						</p>
					</div>
					<div className="border-t border-gray-200">
						<dl>
							<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									{operationLicense?.document.leasingContractBase64 ? (
										<Link
											href={operationLicense?.document.leasingContractBase64}
											target={"_blank"}
											download="Solvencia municipal"
											className="text-blue-500 hover:underline"
										>
											✅ Ver Contrato de arrendamiento
										</Link>
									) : (
										"❌ Contrato de arrendamiento"
									)}
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{leasingContractAppoved ? (
										<strong>
											Aprobado {FormatDate(leasingContractAppoved.approvedDate)}{" "}
											por {leasingContractAppoved.approvedBy}
										</strong>
									) : (
										<ButtonApprove
											operationId={params.operationid}
											type={APPOVED_TYPES.LEASING_CONTRACT}
											updatedBy={session.user.content.username}
										>
											Aprobar Contrato
										</ButtonApprove>
									)}
								</dd>
							</div>
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-sm font-medium text-gray-500">
									Permiso para venta de bebidas alcohólicas
								</dt>
								<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
									{alcoholApproved ? (
										<strong>
											Aprobado {FormatDate(alcoholApproved.approvedDate)} por{" "}
											{alcoholApproved.approvedBy}
										</strong>
									) : operationLicense?.saleAlcohol ? (
										<ButtonApprove
											operationId={params.operationid}
											type={APPOVED_TYPES.ALCOHOL}
											updatedBy={session.user.content.username}
										>
											Aprobar licencia de alcohol
										</ButtonApprove>
									) : (
										"No requiere aprobación"
									)}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			);
		}
	};
	const GemaSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
				<div className="flex justify-between items-center">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-base font-semibold leading-6 text-gray-900">
							Gerencia de Medio Ambiente
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							Debe adjuntar la constancia de viabilidad
						</p>
					</div>
					<div className="px-4 py-5 sm:px-6">
						{operationLicense && (
							<UploadViabilityConstancy
								operationId={operationLicense.id}
								updatedBy={
									operationLicense.updatedDate ?? operationLicense.createdDate
								}
							/>
						)}
					</div>
				</div>
			</div>
		);
	};
	const BillboardSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
				<div className="flex justify-between items-center">
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
					<div className="px-4 py-5 sm:px-6">
						{operationLicense && (
							<UploadSoilConstancy
								operationId={operationLicense.id}
								updatedBy={
									operationLicense.updatedDate ?? operationLicense.createdDate
								}
							/>
						)}
					</div>
				</div>
				<div className="border-t border-gray-200 overflow-x-scroll ">
					<ListOfBillboard billboards={operationLicense?.billboards || []} />
				</div>
			</div>
		);
	};

	const AttachSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-base font-semibold leading-6 text-gray-900">
						Firma de declaración y documentos adjuntos
					</h3>
				</div>
				<div className="border-t border-gray-200">
					<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Lista de documentos
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.signatureBase64 ? (
										<Link
											href={operationLicense?.document.signatureBase64}
											className="text-blue-500 hover:underline"
											download="Firma del contribuyente"
											target="_blank"
										>
											✅ Firma del contribuyente
										</Link>
									) : (
										"❌ Fima del contribuyente"
									)}
								</td>
							</tr>

							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.rtnBase64 ? (
										<Link
											href={operationLicense?.document.rtnBase64}
											target={"_blank"}
											download="RTN"
											className="text-blue-500 hover:underline"
										>
											✅ RTN
										</Link>
									) : (
										"❌ RTN"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.dniBase64 ? (
										<Link
											href={operationLicense?.document.dniBase64}
											target={"_blank"}
											download="DNI"
											className="text-blue-500 hover:underline"
										>
											✅ DNI
										</Link>
									) : (
										"❌ DNI"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.municipalSolvencyBase64 ? (
										<Link
											href={operationLicense?.document.municipalSolvencyBase64}
											target={"_blank"}
											download="Solvencia municipal"
											className="text-blue-500 hover:underline"
										>
											✅ Solvencia municipal
										</Link>
									) : (
										"❌ Solvencia municipal"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.leasingContractBase64 ? (
										<Link
											href={operationLicense?.document.leasingContractBase64}
											target={"_blank"}
											download="Solvencia municipal"
											className="text-blue-500 hover:underline"
										>
											✅ Contrato de arrendamiento
										</Link>
									) : (
										"❌ Contrato de arrendamiento"
									)}
								</td>
							</tr>

							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.traderWrittingBase64 ? (
										<Link
											href={operationLicense?.document.traderWrittingBase64}
											target={"_blank"}
											download="Escritura de comerciante"
											className="text-blue-500 hover:underline"
										>
											✅ Escritura de comerciante
										</Link>
									) : (
										"❌ Escritura de comerciante"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.registrationCommerceBase64 ? (
										<Link
											href={
												operationLicense?.document.registrationCommerceBase64
											}
											target={"_blank"}
											download="Constancia de inscripción a camara de comercio"
											className="text-blue-500 hover:underline"
										>
											✅ Constancia de inscripción a camara de comercio
										</Link>
									) : (
										"❌ Constancia de inscripción a camara de comercio"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.lastOperationLicenseBase64 ? (
										<Link
											href={
												operationLicense?.document.lastOperationLicenseBase64
											}
											target={"_blank"}
											download="Ultima declaración de impuesto sobre la renta"
											className="text-blue-500 hover:underline"
										>
											✅ Ultima declaración de impuesto sobre la renta
										</Link>
									) : (
										"❌ Ultima declaración de impuesto sobre la renta"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.salesStatementBase64 ? (
										<Link
											href={operationLicense?.document.salesStatementBase64}
											target={"_blank"}
											download="Declaraciones de ventas"
											className="text-blue-500 hover:underline"
										>
											✅ Declaraciones de ventas
										</Link>
									) : (
										"❌ Declaraciones de ventas"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.incomeCondensateBase64 ? (
										<Link
											href={operationLicense?.document.incomeCondensateBase64}
											target={"_blank"}
											download="Condensado de ingresos"
											className="text-blue-500 hover:underline"
										>
											✅ Condensado de ingresos
										</Link>
									) : (
										"❌ Condensado de ingresos"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.soilContrancyBase64 ? (
										<Link
											href={operationLicense?.document.soilContrancyBase64}
											target={"_blank"}
											download="Constancia de suelos"
											className="text-blue-500 hover:underline"
										>
											✅ Constancia de suelos
										</Link>
									) : (
										"❌ Constancia de suelos"
									)}
								</td>
							</tr>
							<tr className=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">
									{operationLicense?.document.viabilityConstancyBase64 ? (
										<Link
											href={operationLicense?.document.viabilityConstancyBase64}
											target={"_blank"}
											download="Constancia de viabilidad"
											className="text-blue-500 hover:underline"
										>
											✅ Constancia de viabilidad
										</Link>
									) : (
										"❌ Constancia de viabilidad"
									)}
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
		);
	};

	const BackButtonSection = () => {
		return (
			<div className="flex pb-4">
				<BackButton>
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
		);
	};

	const AuditSection = () => {
		return (
			<div className="overflow-hidden bg-white shadow sm:rounded-lg mb-4">
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
								<td className="px-2 py-4">{operationLicense?.createdBy}</td>
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
		);
	};

	return (
		<MainWrapper title="Detalle de licencia">
			{BackButtonSection()}

			{GeneralInformationSection()}

			{StatementSalesSection()}

			{JusticeSection()}

			{GemaSection()}

			{BillboardSection()}

			{AttachSection()}

			{BackButtonSection()}

			{AuditSection()}
		</MainWrapper>
	);
}
