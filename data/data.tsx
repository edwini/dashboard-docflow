export enum ROLES {
  ADMINISTRADOR = 1,
  CONTROL_TRIBUTARIO = 2,
  PLANIFICACION = 3,
  CONTRIBUYENTE = 4,
}
export function getRoleName(roleValue: number): string {
  for (const roleName in ROLES) {
    if (ROLES[roleName as keyof typeof ROLES] === roleValue) {
      return roleName
    }
  }
  throw new Error(`Unknown role value: ${roleValue}`)
}
export enum STATUS_BILLBOARD {
  PENDIENTE = "PENDIENTE",
  APROBADO = "APROBADO",
  RECHAZADO = "RECHAZADO",
}
export enum STATUS {
  ACTIVO = "ACTIVO",
  INACTIVO = "INACTIVO",
  ELIMINADO = "ELIMINADO",
}
