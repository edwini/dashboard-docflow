import { MessagesType } from "./MessagesType"
export type UserPagesType = {
  content: UserType[]
  pageable: {}
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: {}
  first: boolean
  numberOfElements: number
  empty: boolean
}
export type UserType = {
  id: number
  username: string
  name: string | null | undefined
  phone: string
  status: string
  taxPayer: boolean
  createdBy: string
  updatedBy: string
  createdDate: string
  updatedDate: string
  roleId: number
  token: string
  messages: MessagesType
}
