"use client"

import { RoleMessageType, RoleType } from ".././types/RoleType"
import useSWRMutation from "swr/mutation"
import { Toaster } from "@/components/ui/Toaster"
import { toast } from "@/hooks/useToast"
import MainWrapper from "../../components/MainWrapper"
import FormRoles from "../components/FormRoles"
import { getSession } from "next-auth/react"
import { useRouter } from "next/navigation"

async function updateData(url: string, { arg }: { arg: RoleType }) {
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(arg),
  })
  return response
}
export default function Page({
  params,
}: {
  params: { roleid: number }
}) {
  const { trigger } = useSWRMutation("/api/roles/", updateData)
  async function handleSubmitReady(role: RoleType): Promise<void> {
    const session = await getSession()
    role.updatedBy = session?.user.content.username
    role.updatedDate = new Date()
    const response = await trigger(role)

    const statusResponse: RoleMessageType = await response?.json()
    if (response?.status !== 200) {
      toast({
        variant: "destructive",
        title: "Actualiación de roles",
        description: statusResponse.messages.errorMessage,
        duration: 2000,
      }).dismiss()
    }
    refreshData()
    toast({
      variant: "success",
      title: "Actualiación de roles",
      description: statusResponse.messages.successMessage,
      duration: 2000,
    })
  }

  const router = useRouter()
  const refreshData = () => {
    router.refresh
  }
  return (
    <MainWrapper title="Administración de roles">
      <FormRoles
        title={"Actualización de roles"}
        onSubmitDone={handleSubmitReady}
        role={"edit"}
        values={{
          id: params.roleid,
          name: "Administrador",
          description: "Administrador del sistema",
        }}
      />

      <Toaster />
    </MainWrapper>
  )
}
