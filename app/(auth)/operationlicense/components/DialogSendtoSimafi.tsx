"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { StatusOperationLicense } from "../types/StatusOperationLicense"
import { EconomicActivityType } from "../types/EconomicActivityType"
import { fetchEconomicActivities } from "./fetchOperationLicense"
import useSWR from "swr"
import { Button } from "@/components/ui/button"
const schema = z.object({
  totalBillboards: z
    .number()
    .nonnegative("El total de rotulos debe ser mayor o igual a 0"),
  totalFine: z
    .number({ required_error: "Campo requerido" })
    .nonnegative("El total de multa debe ser mayor o igual a 0"),
  totalLatePayment: z
    .number({ required_error: "Campo requerido" })
    .nonnegative("El total de declaracion tardia debe ser mayor o igual a 0"),
  economicActivity: z.number().nonnegative("Actividad economica es requerida"),
})
const textoDialog =
  "Enviar el registro del permiso hasta que todos los rotulos esten revisados."
export default function SendtoSimafi({
  enabled,
  operationId,
}: { enabled: boolean; operationId: number }) {
  const [open, setOpen] = useState(false)

  const { data, error, isLoading } = useSWR<EconomicActivityType>(
    "/api/economic-activities/",
    fetchEconomicActivities,
    {
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  //Ingresar el total de multa, total de rotulos, total de declaracion tardia

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<StatusOperationLicense>({
    resolver: zodResolver(schema),
    defaultValues: {
      totalBillboards: 0,
      totalFine: 0,
      totalLatePayment: 0,
      economicActivity: "-1",
    },
  })
  async function onSubmitDone(data: StatusOperationLicense) {
    data.id = operationId
    console.log(data)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                type="button"
                disabled={!enabled}
                className="inline-flex items-center rounded-md border  border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Enviar a Control Tributario
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <span className="text-sm font-bold ">{textoDialog}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[512px]">
        <form onSubmit={handleSubmit(onSubmitDone)}>
          <DialogHeader>
            <DialogTitle>Control tributario</DialogTitle>
            <DialogDescription>{textoDialog}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">Actividad economica</label>
              <div className=" col-span-3">
                <select
                  {...register("economicActivity", { valueAsNumber: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                >
                  <option value="-1">Actividad economica principal</option>
                  {data?.content.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.businessName} - Nuevo({item.opening}) / Renovacion(
                      {item.renovation})
                    </option>
                  ))}
                </select>
                <span className="text-sm text-red-500">
                  {errors?.economicActivity?.message as string}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="tmulta" className="text-right">
                Total multa
              </label>
              <div className="col-span-3">
                <Input
                  {...register("totalFine", { valueAsNumber: true })}
                  id="tmulta"
                  type="number"
                  placeholder="..."
                />
                <span className="text-sm text-red-500">
                  {errors?.totalFine?.message as string}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="ttardia" className="text-right">
                Total declaración tardia
              </label>
              <div className="col-span-3">
                <Input
                  {...register("totalLatePayment", { valueAsNumber: true })}
                  id="ttardia"
                  type="number"
                  placeholder="..."
                />
                <span className="text-sm text-red-500">
                  {errors?.totalLatePayment?.message as string}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="trotulos" className="text-right">
                Total rotulos
              </label>
              <div className="col-span-3">
                <Input
                  {...register("totalBillboards", { valueAsNumber: true })}
                  id="trotulos"
                  type="number"
                  placeholder="..."
                />
                <span className="text-sm text-red-500">
                  {errors?.totalBillboards?.message as string}
                </span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Enviar a Control Tributario
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
