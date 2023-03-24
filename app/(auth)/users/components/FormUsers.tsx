"use client"
import { Input } from "@/components/ui/input"
import { set, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormUserProps, UserType } from "../types/UserType"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const schema = z.object({
  name: z.string().nonempty({ message: "El nombre es requerido" }),
  username: z.string().email(),
  phone: z.string().optional(),
  id: z.number().default(0),
  taxpayer: z.boolean(),
  roleId: z.number().nonnegative("Debe seleccionar un permiso"),
  createdBy: z.string().nullable().optional(),
  updatedBy: z.string().nullable().optional(),
  status: z.string().transform((V) => V ?? "INACTIVO"),
  createdDate: z.string().nullable().optional(),
  updatedDate: z.string().nullable().optional(),
  token: z.string().nullable().optional(),
})
const FormUsers = (props: FormUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserType>({
    values: props.values,
    defaultValues: props.values,
    resolver: zodResolver(schema),
  })

  const router = useRouter()
  return (
    <form onSubmit={handleSubmit(props.onSubmitDone)}>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            {props.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Ingresa los datos para los usuarios de Back Office o usuario
            contribuyentes.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {props.values?.id && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ID</dt>
                <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                  <Input type="number" readOnly {...register("id")} />
                </dd>
              </div>
            )}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Usuario</dt>
              <dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
                <Input
                  type="email"
                  {...register("username")}
                  placeholder="Email"
                />
                <span className="text-sm text-red-500">
                  {errors?.username?.message as string}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Nombre</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <Input type="text" {...register("name")} placeholder="..." />
                <span className="text-sm text-red-500">
                  {errors?.name?.message as string}
                </span>
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <Input type="text" {...register("phone")} placeholder="..." />
                <span className="text-sm text-red-500">
                  {errors?.phone?.message as string}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Usuario Contribuyente
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    {...register("taxpayer")}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600" />
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    SI
                  </span>
                </label>
                <span className="text-sm text-red-500">
                  {errors?.taxpayer?.message as string}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Estado del usuario
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <select
                  {...register("status")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                >
                  <option value="ACTIVO">ACTIVO</option>
                  <option value="INACTIVO">INACTIVO</option>
                  <option value="ELIMINADO">ELIMINADO</option>
                </select>
                <span className="text-sm text-red-500">
                  {errors?.status?.message as string}
                </span>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Permiso</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <select
                  {...register("roleId", { valueAsNumber: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                >
                  <option value="-1">Elija un permiso</option>
                  <option value="1">Admin</option>
                  <option value="2">Back Office</option>
                  <option value="3">Contribuyente</option>
                </select>
                <span className="text-sm text-red-500">
                  {errors?.roleId?.message as string}
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex pt-4">
        <Button
          type="button"
          variant={"link"}
          onClick={() => router.push("/users/12/1")}
        >
          Regresar
        </Button>
        <span className="ml-3 hidden sm:block">
          <Button
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            className="inline-flex items-center rounded-md border  border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Guardar
          </Button>
        </span>
      </div>
    </form>
  )
}
export default FormUsers
