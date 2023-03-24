export const URL_OPERATION_LICENSE = (page: number, limit: number) => {
  return `${process.env.DASHBOARD_API}/operation-licenses/${page}/${limit}`
}
export const URL_OPERATION_LICENSE_ID = (id: number) => {
  return `${process.env.DASHBOARD_API}/operation-licenses/${id}`
}
export const URL_USER_ID = (userid: number) => {
  return `${process.env.DASHBOARD_API}/users/${userid}/`
}
export const URL_USERS = (userid?: number, limit?: number) => {
  const url = new URL(`${process.env.DASHBOARD_API}/users/`)
  if (userid !== undefined) url.pathname += `${userid}/`
  if (limit !== undefined) url.pathname += `${limit}/`
  return url.toString()
}

export const URL_ROLE = (userid?: number, limit?: number) => {
  const url = new URL(`${process.env.DASHBOARD_API}/roles/`)
  if (userid !== undefined) url.pathname += `${userid}/`
  if (limit !== undefined) url.pathname += `${limit}/`
  return url.toString()
}
export const URL_AUTH_LOGIN = () => {
  return `${process.env.DASHBOARD_API}/auth/authenticate`
}
