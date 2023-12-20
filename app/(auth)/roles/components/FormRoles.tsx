"use client";
import { Icons } from "@/components/icons";
import { BackButton } from "@/components/ui/BackButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormRoleProps, RoleType } from "../types/RoleType";

const roleSchema = z.object({
	name: z.string().nonempty({ message: "El nombre es requerido" }),
	description: z.string().nonempty({ message: "La descripción es requerida" }),
	id: z.string().optional(),
	createdBy: z.string().optional(),
	updatedBy: z.string().optional(),
});
const FormRoles = forwardRef((props: FormRoleProps, ref) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<RoleType>({
		defaultValues: props.values,
		resolver: zodResolver(roleSchema),
	});
	useImperativeHandle(
		ref,
		() => {
			return {
				setParentErrors: (errors: string) => {
					console.log("error on child", errors);
				},
			};
		},
		[],
	);

	return (
		<form onSubmit={handleSubmit(props.onSubmitDone)}>
			<div className="overflow-hidden bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-base font-semibold leading-6 text-gray-900">
						{props.title}
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						Roles de usuarios
					</p>
				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">ID</dt>
							<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
								<Input type="text" readOnly {...register("id")} />
							</dd>
						</div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Nombre</dt>
							<dd className="mt-1 text-sm sm:col-span-2 sm:mt-0">
								<Input type="text" placeholder="Rol" {...register("name")} />
								<span className="text-sm text-red-500">
									{errors?.name?.message as string}
								</span>
							</dd>
						</div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Descripción</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<Input
									type="text"
									placeholder="Descripción del rol"
									{...register("description")}
								/>
								<span className="text-sm text-red-500">
									{errors?.description?.message as string}
								</span>
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div className="flex pt-4">
				<BackButton type="button" variant="link">
					<Icons.chevronLeft />
					Regresar
				</BackButton>
				<span className="ml-3 hidden sm:block">
					<Button
						disabled={isSubmitting}
						isLoading={isSubmitting}
						className="inline-flex items-center rounded-md border  border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
					>
						Guardar
					</Button>
				</span>
			</div>
		</form>
	);
});
FormRoles.displayName = "ForwardRefFormRoles";
export default FormRoles;
