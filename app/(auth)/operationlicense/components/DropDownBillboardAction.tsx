"use client"

import { Icons } from "@/components/icons"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { STATUS_BILLBOARD } from "@/data/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
export type DropDownProps = {
  id: number
  changeStatus: (id: number, newStatus: STATUS_BILLBOARD) => void
}
export default function DropDownBillboardAction(props: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <Icons.more className="w-8 h-8 rounded-full" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400 w-56">
        <DropdownMenuItem
          onClick={() =>
            props.changeStatus(props.id, STATUS_BILLBOARD.APROBADO)
          }
          className="cursor-pointer hover:text-green-500 text-slate-700  dark:focus:bg-green-700"
        >
          <Icons.aproved className="w-5 h-5 mr-2" />
          Aprobar
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            props.changeStatus(props.id, STATUS_BILLBOARD.RECHAZADO)
          }
          className="cursor-pointer hover:text-red-500 text-slate-700  dark:focus:bg-ref-700"
        >
          <Icons.denied className="w-5 h-5 mr-2" />
          Rechazar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
