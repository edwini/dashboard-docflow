"use client"
import { Icons } from "@/components/icons"
import { BackButton } from "@/components/ui/BackButton"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Toaster } from "@/components/ui/Toaster"
import { useSearchParams } from "next/navigation"
import { useRef } from "react"
import MainWrapper from "../../components/MainWrapper"

import SelectRole from "../components/SelectRole"
import { useUserForm } from "../components/useUserForm"

export default function Page({
  params,
}: {
  params: { userid: number }
}) {
  const searchParams = useSearchParams()
  const page = searchParams.get("action") || "edit"
  const formRef = useRef<HTMLFormElement>(null)
  const { validateForm, error } = useUserForm({
    currentForm: formRef.current,
    action: page,
  })
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    validateForm()
  }
  return (
    <MainWrapper title="Mantenimiento de usiarios">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Registro de usuarios
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Ingresa los datos para los usuarios de Back Office o usuario
              contribuyentes.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Usuario</dt>
                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                  <Input type="email" name="username" placeholder="Email" />
                  {error.usernameError && (
                    <p className="text-sm text-red-500">
                      {error.usernameError}
                    </p>
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Nombre</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <Input type="text" name="name" placeholder="..." />
                  {error.nameError && (
                    <p className="text-sm text-red-500">{error.nameError}</p>
                  )}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <Input type="text" name="phone" placeholder="..." />
                  {error.phoneError && (
                    <p className="text-sm text-red-500">{error.phoneError}</p>
                  )}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Contribuyente
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <Switch
                    className="data-[state=checked]:bg-amber-600 "
                    name="paytaxer"
                  />
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Permiso</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <SelectRole id="role" name="role" />
                  {error.roleError && (
                    <p className="text-sm text-red-500">{error.roleError}</p>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex pt-4">
          <BackButton variant="link">
            <Icons.chevronLeft />
            Regresar
          </BackButton>
          <span className="ml-3 hidden sm:block">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Guardar
            </button>
          </span>
        </div>
        <Input type="hidden" name="valid" value={`${error.isValid}`} />
        <Input type="text" readOnly name="id" value={`${params.userid}`} />
      </form>
      <Toaster />
    </MainWrapper>
  )
}
