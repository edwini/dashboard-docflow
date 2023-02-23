"use client"

import { signOut, useSession } from "next-auth/react"
import { Icons } from "@/components/icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import Link from "next/link"

export default function DropDownMenuUser() {
  const { data: session } = useSession()

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        >
          <Icons.user className="w-8 h-8 rounded-full" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400 w-56">
        <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300">
          {session?.user?.content?.name}
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="-mx-1 my-1 h-px bg-amber-600 dark:bg-slate-700" />
        <DropdownMenuItem className="relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700">
          <span>Perfil</span>
        </DropdownMenuItem>
        <Link href={"#"} onClick={handleLogout}>
          <DropdownMenuItem className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700">
            Salir
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
