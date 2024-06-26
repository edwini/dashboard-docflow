import { Icons } from "@/components/icons"
import { STATUS, STATUS_OPERATION_LICENSE } from "@/data/data"

export const FormatDate = (date: string | null | undefined) => {
  if (!date) return ""
  const _date = new Date(date)
  return _date.toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  })
}

export const FormatCurrency = (value: number, currency: string = "HNL") => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  })
}

export function getStatusUserName(statusValue: STATUS) {
  const statusColor = {
    ACTIVO: "bg-green-600",
    ELIMINADO: "bg-red-600",
    INACTIVO: "bg-amber-600",
  }
  return (
    <div className="flex items-center">
      <span
        className={`h-2.5 w-2.5 p-2 rounded-full mr-2 ${statusColor[statusValue]}`}
      >
        {" "}
      </span>
      {statusValue}
    </div>
  )
}
export function getStatusOperationName(statusValue: STATUS_OPERATION_LICENSE) {
  const statusColor = {
    PENDIENTE: "bg-amber-600",
    PROCESANDO: "bg-amber-600",
    "RECIBO GENERADO": "bg-green-600",
    PAGADO: "bg-green-600",
    IMPRESA: "bg-green-600",
    RECHAZADO: "bg-red-600",
  }
  return (
    //css span to circle

    <>
      <span
        className={`p-2 rounded-full mr-2 ml-2 h-2 w-2  ${statusColor[statusValue]}`}
      >
        {" "}
      </span>
      {statusValue}
    </>
  )
}

export function tiempoTranscurrido(desde: string | null | undefined): string {
  if (!desde) return "N/A"
  const fechaDesde = new Date(desde)
  const ahora = new Date()
  const diferencia = ahora.getTime() - fechaDesde.getTime()
  const segundos = Math.floor(diferencia / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)

  const horasRestantes = horas % 24
  const minutosRestantes = minutos % 60

  let resultado = ""
  if (dias > 0) {
    resultado += `${dias} dia${dias > 1 ? "s" : ""}`
  }
  if (horasRestantes > 0) {
    resultado += `${resultado ? " con " : ""}${horasRestantes} hora${
      horasRestantes > 1 ? "s" : ""
    }`
  }
  if (minutosRestantes > 0) {
    resultado += `${resultado ? " y " : ""}${minutosRestantes} minuto${
      minutosRestantes > 1 ? "s" : ""
    }`
  }

  return resultado ? resultado : "menos de un minuto"
}

export const BLOCKED_ROUTES = ["/users", "/roles"]
