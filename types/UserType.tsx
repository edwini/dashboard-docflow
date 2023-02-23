import { MessagesType } from "./MessagesType"

export type UserType = {
  content: {
    id: number
    username: string
    name: string | null | undefined
    phone: string
    status: string
    roldId: number
    taxPayer: boolean
  }
  token: string
  messages: MessagesType
}
