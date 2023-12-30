"use client";
import { Toaster } from "@/components/ui/Toaster";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { APPOVED_TYPES } from "@/data/data";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "@/hooks/useToast";
import { MessagesType } from "@/types/MessagesType";
import useSWRMutation from "swr/mutation";
import { approvedJusticeRole } from "./actions";
type ButtonApproveProps = {
	operationId: number;
	children: React.ReactNode;
	type: APPOVED_TYPES;
	updatedBy: string;
};
const Mutations = {
	[APPOVED_TYPES.ALCOHOL]: "/api/justice/alcohol/approve",
	[APPOVED_TYPES.LEASING_CONTRACT]: "/api/justice/leasing/approve",
};
export default function ButtonApprove({
	children,
	type,
	operationId,
	updatedBy,
}: ButtonApproveProps) {
	const [open, setOpen] = useState(false);

	const router = useRouter();
	const { trigger, isMutating } = useSWRMutation(
		Mutations[type],
		approvedJusticeRole,
	);
	async function onSubmitDone(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const payload = {
			id: operationId,
			updatedBy: updatedBy,
		};
		const response = await trigger(payload);

		const dataMessage: MessagesType = await response?.json();
		if (!response?.ok || dataMessage?.errorMessage) {
			toast({
				variant: "destructive",
				title: "Aprobación de tramite",
				description: dataMessage?.errorMessage,
				duration: 8000,
			});
			return;
		}
		toast({
			variant: "success",
			title: "Aprobación de tramite",
			description: dataMessage?.successMessage,
			duration: 4000,
		});
		setOpen(false);
		router.refresh();
	}
	return (
		<Dialog key={type} open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					type="button"
					className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:amber-red-500 focus:ring-offset-2"
				>
					{children}
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[768px]">
				<form onSubmit={onSubmitDone}>
					<DialogHeader>
						<DialogTitle>Confirmación</DialogTitle>
						<DialogDescription>
							Esta seguro de realizar la aprobación
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<button
							type="submit"
							className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-red-700  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							Aprobar
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
			<Toaster />
		</Dialog>
	);
}
