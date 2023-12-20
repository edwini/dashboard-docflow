"use client";
import MainWrapper from "../components/MainWrapper";

import { Toaster } from "@/components/ui/Toaster";
import { toast } from "@/hooks/useToast";
import { getSession } from "next-auth/react";
import useSWRMutation from "swr/mutation";
import FormRoles from "./components/FormRoles";
import { RoleMessageType, RoleType } from "./types/RoleType";

async function updateData(url: string, { arg }: { arg: RoleType }) {
	const response = await fetch(url, {
		method: "POST",
		body: JSON.stringify(arg),
	});
	return response;
}
export default function Page() {
	//const formRolesRef = useRef(null)
	const { trigger } = useSWRMutation("/api/roles/", updateData);

	async function handleSubmitReady(role: RoleType): Promise<void> {
		const session = await getSession();
		role.updatedBy = session?.user.content.username;
		role.createdBy = session?.user.content.username;
		role.createdDate = new Date();
		role.updatedDate = new Date();
		const response = await trigger(role);

		const statusResponse: RoleMessageType = await response?.json();
		if (response?.status !== 200) {
			//Asi se ejecutan metodos en un componente hijo
			// if (formRolesRef) {
			//   formRolesRef?.current.setParentErrors(
			//     statusResponse.messages.errorMessage,
			//   )
			// }

			toast({
				variant: "destructive",
				title: "Registro de roles",
				description: statusResponse.messages.errorMessage,
				duration: 5000,
			});
		}

		toast({
			variant: "success",
			title: "Registro de roles",
			description: statusResponse.messages.successMessage,
			duration: 5000,
		});
	}

	return (
		<MainWrapper title="Administración de permisos">
			<FormRoles
				title={"Actualización de roles"}
				onSubmitDone={handleSubmitReady}
				role={"new"}
				// ref={formRolesRef}
			/>

			<Toaster />
		</MainWrapper>
	);
}
