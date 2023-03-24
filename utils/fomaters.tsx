export const FormatDate = (date: Date) => {
  return date.toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const FormatCurrency = (value: number, currency: string = "HNL") => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  })
}

export function getStatusName(statusValue: string | undefined) {
  const statusColor = {
    PENDIENTE: "bg-yellow-500",
    ACTIVO: "bg-green-500",
    INACTIVO: "bg-yellow-500",
    ELIMINADO: "bg-gray-200",
  }
  return (
    <div className="flex items-center">
      <div
        className={`h-2.5 w-2.5 rounded-full mr-2 ${
          statusColor[statusValue as keyof typeof statusColor]
        }`}
      />{" "}
      {statusValue}
    </div>
  )
}

export const BLOCKED_ROUTES = ["/users", "/roles"]
