import { MessagesType } from "@/types/MessagesType"

export type RoleType = {
  id: number
  name: string
  description: string
  createdBy?: string | "system"
  updatedBy?: string | "system"
  updatedDate?: Date
  createdDate?: Date
}
export type FormRoleProps = {
  title: string
  onSubmitDone: (data: RoleType) => Promise<void>
  values?: RoleType
  role: "new" | "edit"
}

export type RoleMessageType = {
  content: RoleType
  messages: MessagesType
}
export type RolePageType = {
  content: RoleType[]
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
