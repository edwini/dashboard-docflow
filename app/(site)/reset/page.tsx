"use client"
import { Icons } from "@/components/icons"
import Image from "next/image"
import useSWRMutation from "swr/mutation"
import logoMuni from "@/public/assets/images/logo_muni.png"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "@/hooks/useToast"
import { Toaster } from "@/components/ui/Toaster"
import { updateUser } from "@/app/(auth)/users/components/fetchUsers"
import { UserType } from "@/app/(auth)/users/types/UserType"
import Link from "next/link"
export default function ResetPage() {
  const [error, setError] = useState("")
  const router = useRouter()

  const { trigger, isMutating } = useSWRMutation(
    "POST:/api/users/reset",
    updateUser,
  )
  const emailRef = useRef<HTMLInputElement | null>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef?.current?.value
    if (!email) {
      setError("Usuario es requerido")
      return
    }

    const payload = {
      username: email,
    } as UserType
    const response = await trigger(payload)
    if (response?.status !== 200) {
      toast({
        variant: "default",
        title: "Resetear contraseña",
        description:
          "Enviando correo de restablecimiento de contraseña, por favor revisa tu bandeja de entrada o spam",
        duration: 5000,
      })
    } else {
      toast({
        variant: "destructive",
        title: "Resetear contraseña",
        description: "Usuario no existe",
        duration: 5000,
      })
    }
  }
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src={logoMuni}
            className="mx-auto w-auto h-24"
            alt="Logo Municipalidad de El Progreso, Yoro"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Resetear contraseña
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Ingresa tu usuario
              </label>
              <input
                ref={emailRef}
                id="email-address"
                name="user"
                type="text"
                required
                className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                placeholder="Ingresa tu usuario"
              />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-red-500">
            {error}
          </div>
          <div>
            <button
              type="submit"
              disabled={isMutating}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Enviar
              <span className="absolute inset-y-0 right-0 flex items-center pl-3">
                <Icons.chevronRight />
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="group relative flex w-full justify-center"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icons.chevronLeft />
              </span>
              Regresar
            </Link>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  )
}
