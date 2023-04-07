"use client"
import useSWR from "swr"
import useSWRMutation from "swr/mutation"
import { Toaster } from "@/components/ui/Toaster"
import { toast } from "@/hooks/useToast"
import { UserMessageType, UserType } from "@/app/(auth)/users/types/UserType"
import { useRouter, useSearchParams } from "next/navigation"
import MainWrapper from "../../components/MainWrapper"
import FormUsers from "../components/FormUsers"
import { fetchOneUser, updateUser } from "../components/fetchUsers"
import LoadingBar from "@/components/ui/LoadingBar"
import { getSession } from "next-auth/react"

export default function Page({
  params,
}: {
  params: { userid: number }
}) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const action = searchParams.get("action") as string
  const method = action === "edit" ? "PUT" : "POST"
  const { trigger } = useSWRMutation(`${method}:/api/users/`, updateUser)

  const { data, error, isLoading } = useSWR<UserMessageType>(
    `/api/users/${params.userid}`,
    fetchOneUser,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  async function handleSubmitReady(user: UserType): Promise<void> {
    const session = await getSession()
    user.updatedBy = session?.user.content.username
    user.updatedDate = new Date()
    if (action === "new") {
      user.createdBy = session?.user.content.username
      user.createdDate = new Date()

      // rome-ignore lint/performance/noDelete: <explanation>
      delete user.id
    }
    const response = await trigger(user)
    const userResponse: UserMessageType = await response?.json()
    if (response?.status !== 200) {
      toast({
        variant: "destructive",
        title: "Actualiación de usuarios",
        description: userResponse?.messages?.errorMessage,
        duration: 2000,
      })
    } else {
      toast({
        variant: "success",
        title: "Actualiación de usuarios",
        description: userResponse?.messages?.successMessage,
        duration: 2000,
      })
      router.push("/users/12/1")
    }
  }

  return (
    <>
      {isLoading && <LoadingBar />}
      <MainWrapper title="Mantenimiento de usiarios">
        <FormUsers
          title="Actualización de usuarios"
          onSubmitDone={handleSubmitReady}
          role={action}
          values={data?.content}
        />

        <Toaster />
      </MainWrapper>
    </>
  )
}
