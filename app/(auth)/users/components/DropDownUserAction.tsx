"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
export type DropDownProps = {
	id: number;
	resetPassword: (id: number) => void;
};
export default function DropDownUserAction(props: DropDownProps) {
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
				<Link
					href={`/users/${props.id}/?action=edit`}
					className="relative flex cursor-pointer mb-1 select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 hover:bg-slate-100  dark:focus:bg-slate-700"
				>
					<Icons.edit className="w-5 h-5 mr-2" />
					Editar
				</Link>
				<Button
					type="button"
					onClick={() => props.resetPassword(props.id)}
					className="relative flex w-full mb-1 justify-start cursor-pointer select-nonerounded-sm py-1.5 px-2 text-sm font-medium outline-none bg-white focus:bg-slate-100 hover:bg-slate-100 text-slate-700  dark:focus:bg-slate-700"
				>
					<Icons.user className="w-5 h-5 mr-2" />
					Resetear contraseña
				</Button>
				<Button
					type="button"
					onClick={() => props.resetPassword(props.id)}
					className="relative flex w-full mb-1 justify-start cursor-pointer select-nonerounded-sm py-1.5 px-2 text-sm font-medium outline-none bg-white focus:bg-slate-100 hover:bg-red-500 hover:text-white text-slate-700  dark:focus:bg-slate-700"
				>
					<Icons.delete className="w-5 h-5 mr-2" />
					Eliminar
				</Button>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
