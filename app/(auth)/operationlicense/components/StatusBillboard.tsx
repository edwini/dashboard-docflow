"use client";
import { Toaster } from "@/components/ui/Toaster";
import { STATUS_BILLBOARD } from "@/data/data";
import { toast } from "@/hooks/useToast";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { BillBoardMessage } from "../types/BillboardsType";
import DropDownBillboardAction from "./DropDownBillboardAction";
import { updateBillboard } from "./fetchOperationLicense";

export default function StatusBillboard({
	id,
	status,
}: { id: number; status: STATUS_BILLBOARD }) {
	const { trigger, isMutating } = useSWRMutation(
		"/api/billboards",
		updateBillboard,
	);

	const handleChangeStatus = async (
		id: number,
		newStatus: STATUS_BILLBOARD,
	) => {
		const payload = {
			id: id,
			status: newStatus,
		};

		const response = await trigger(payload);
		const data: BillBoardMessage = await response?.json();

		if (!response?.ok) {
			toast({
				variant: "destructive",
				title: "Actualiación de rotulos",
				description: data.messages?.errorMessage,
				duration: 4000,
			});
			return;
		}
		toast({
			variant: "success",
			title: "Actualiación de rotulos",
			description: data.messages?.successMessage,
			duration: 2000,
		});
		setStatusLabel(newStatus);
	};

	const [statusLabel, setStatusLabel] = useState<string>(status);
	return (
		<>
			{statusLabel}
			{statusLabel === STATUS_BILLBOARD.PENDIENTE && (
				<DropDownBillboardAction id={id} changeStatus={handleChangeStatus} />
			)}

			<Toaster />
		</>
	);
}
