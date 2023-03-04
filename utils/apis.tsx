export const URL_OPERATION_LICENSE = (page: number, limit: number) => {
  return `${process.env.DASHBOARD_API}/operation-licenses/${page}/${limit}`
}
export const URL_OPERATION_LICENSE_ID = (id: number) => {
  return `${process.env.DASHBOARD_API}/operation-licenses/${id}`
}
export const URL_USERS = (page: number, limit: number) => {
  return `${process.env.DASHBOARD_API}/users/${page}/${limit}/`
}
export const URL_AUTH_LOGIN = () => {
  return `${process.env.DASHBOARD_API}/auth/authenticate`
}
