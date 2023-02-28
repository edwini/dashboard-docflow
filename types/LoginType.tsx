export type Message = {
  successMessage: string | null
  errorMessage: string | null
  infoMessage: string | null
}

export type Content = {
  id: number
  username: string
  name: string
  phone: string
  status: string
  roleId: number
}

export type LoginType = {
  messages: Message
  content: Content
  token: string
}
