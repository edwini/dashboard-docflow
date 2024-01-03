"use client";
///soil-constancy

import { UploadFileButton } from "@/components/UploadFile";
import { Toaster } from "@/components/ui/Toaster";
import { toast } from "@/hooks/useToast";
import { MessagesType } from "@/types/MessagesType";
import useSWRMutation from "swr/mutation";
import { putSoilConstancy } from "./actions";

import { useRouter } from "next/navigation";
const UploadViabilityConstancy = ({
	operationId,
	updatedBy,
}: { operationId: number; updatedBy: string | null }) => {
	const { trigger, isMutating } = useSWRMutation(
		"/api/gema/viability-constancy/upload",
		putSoilConstancy,
	);
	const router = useRouter();
	const handleUploadFile = async (base64File: string) => {
		toast({
			variant: "default",
			title: "Subiendo Constancia de viabilidad....",
			duration: 5000,
		});

		const payload = {
			id: operationId,
			updatedBy: updatedBy,
			document: {
				viabilityConstancyBase64: base64File,
			},
		};
		const response = await trigger(payload);

		const dataMessage: MessagesType = await response?.json();
		if (!response?.ok || dataMessage?.errorMessage) {
			toast({
				variant: "destructive",
				title: "Constancia de viabilidad",
				description: dataMessage?.errorMessage,
				duration: 8000,
			});
			return;
		}
		toast({
			variant: "success",
			title: "Constancia de viabilidad subida correctamente",
			duration: 5000,
		});

		router.refresh();
	};

	return (
		<UploadFileButton onUpload={handleUploadFile}>
			Constancia de viabilidad
			<Toaster />
		</UploadFileButton>
	);
};

export default UploadViabilityConstancy;
