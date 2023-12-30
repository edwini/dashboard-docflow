"use client";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { MessagesType } from "@/types/MessagesType";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import { RejectionReasonType } from "../types/RejectionReasonType";
import { StatusOperationLicense } from "../types/StatusOperationLicense";
import { fetchRejectionReasons, updateStatusOperationLicense } from "./actions";

import { Toaster } from "@/components/ui/Toaster";
import { toast } from "@/hooks/useToast";
export default function RejectOperation({
	operationId,
}: { operationId: number }) {
	const [open, setOpen] = useState(false);

	const router = useRouter();
	const ref = useRef<HTMLSelectElement>(null);
	const { data, error, isLoading } = useSWR<RejectionReasonType>(
		"/api/rejection-reasons/",
		fetchRejectionReasons,
	);

	const { trigger, isMutating } = useSWRMutation(
		"/api/operationlicense/status",
		updateStatusOperationLicense,
	);
	async function onSubmitDone(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const payload: StatusOperationLicense = {
			id: operationId,
			status: "RECHAZADO",
			rejectionReason: ref.current?.value,
		};

		const response = await trigger(payload);
		const dataMessage: MessagesType = await response?.json();

		if (!response?.ok || dataMessage?.errorMessage) {
			toast({
				variant: "destructive",
				title: "Rechazar permiso de operación",
				description: dataMessage?.errorMessage,
				duration: 8000,
			});
			return;
		}
		toast({
			variant: "success",
			title: "Rechazar permiso de operación",
			description: dataMessage?.successMessage,
			duration: 4000,
		});
		setOpen(false);
		router.refresh();
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					type="button"
					className="inline-flex items-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-red-700  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
				>
					Rechazar
				</button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[768px]">
				<form onSubmit={onSubmitDone}>
					<DialogHeader>
						<DialogTitle>Rechazar permiso de operación</DialogTitle>
						<DialogDescription>
							Revice los datos y rechace el permiso de operación seleccionando
							el motivo de rechazo.
						</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<label htmlFor="motivo" className="text-right">
								Motivo del rechazo
							</label>
							<select
								ref={ref}
								id="motivo"
								className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
							>
								{data?.content.map(({ id, reason }) => (
									<option key={id} value={reason}>
										{reason}
									</option>
								))}
							</select>
						</div>
					</div>
					<DialogFooter>
						<button
							type="submit"
							className="inline-flex items-center rounded-md border border-gray-300 bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-red-700  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
						>
							Rechazar
						</button>
					</DialogFooter>
				</form>
			</DialogContent>
			<Toaster />
		</Dialog>
	);
}
