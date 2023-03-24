export const ROLES = {
  ADMIN: 1,
  USER: 2,
  PAYTAXER: 3,
} as const
export function getRoleName(roleValue: number): string {
  for (const roleName in ROLES) {
    if (ROLES[roleName as keyof typeof ROLES] === roleValue) {
      return roleName
    }
  }
  throw new Error(`Unknown role value: ${roleValue}`)
}

export const STATUS = {
  PENDING: "PENDIENTE",
  ACTIVO: "ACTIVO",
  INACTIVO: "INACTIVO",
  ELIMINADO: "ELIMINADO",
}
