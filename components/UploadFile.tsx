"use client";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
type UploadFileProps = {
	children: React.ReactNode;
	onUpload: (base64File: string) => void;
};
export function UploadFileButton({ children, onUpload }: UploadFileProps) {
	const [loading, setLoading] = useState(false);
	async function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
		setLoading(true);
		const input = e.target;
		if (input.files) {
			const file = input.files[0];
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				onUpload(reader.result as string);
				setLoading(false);
			};
		}
	}
	return (
		<label
			htmlFor="archivo"
			className="inline-flex items-center rounded-md p-2 border border-slate-300 hover:bg-slate-100 cursor-pointer"
		>
			{loading ? (
				<Icons.loading className="animate-spin" />
			) : (
				<>
					<Icons.upload />
					{children}
					<Input
						className="hidden"
						type="file"
						onChange={(e) => handleFileUpload(e)}
						id="archivo"
					/>
				</>
			)}
		</label>
	);
}
