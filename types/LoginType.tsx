import { MessagesType } from "./MessagesType"

export type Content = {
  id: number
  username: string
  name: string
  phone: string
  status: string
  roleId: number
  taxpayer: boolean
}

export type LoginType = {
  messages: MessagesType
  content: Content
  token: string
  iat: number
  exp: number
  jti: string
}
