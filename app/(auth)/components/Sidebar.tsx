import { Icons } from "@/components/icons";
import { ROLES } from "@/data/data";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { BLOCKED_ROUTES } from "@/utils/fomaters";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Sidebar() {
	const maxPageLimit: number = parseInt(
		process.env.MAX_PAGE_SIZE?.toString() || "5",
	);
	async function ListMenu() {
		const menu = [
			{
				id: 1,
				name: "Dashboard",
				icon: (
					<Icons.home className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white" />
				),
				link: "/dashboard",
			},
			{
				id: 2,
				name: "Usuarios",
				icon: (
					<Icons.users className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white" />
				),
				link: `/users/${maxPageLimit}/1`,
			},
			{
				id: 3,
				name: "Roles",
				icon: (
					<Icons.users className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white" />
				),
				link: `/roles/${maxPageLimit}/1`,
			},
			{
				id: 4,
				name: "Permisos de operación",
				icon: (
					<Icons.inbox className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white" />
				),
				link: `/operationlicense/${maxPageLimit}/1`,
			},
		];
		const session = await getServerSession(authOptions);

		return (
			<ul className="space-y-2">
				{menu
					.filter((item) => {
						if (session?.user.content.roleId === ROLES.ADMINISTRADOR)
							return true;
						return !BLOCKED_ROUTES.some((route) => item.link.startsWith(route));
					})
					.map((item, index) => (
						<li key={item.id}>
							<Link
								href={item.link}
								className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
							>
								{item.icon}
								<span className="ml-3">{item.name}</span>
							</Link>
						</li>
					))}
			</ul>
		);
	}

	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-amber-600 border-r border-gray-200  dark:bg-gray-800 sm:translate-x-0 dark:border-gray-700"
			aria-label="Sidebar"
		>
			<div className="h-full px-3 pb-4 overflow-y-auto bg-amber-600 dark:bg-gray-800">
				{/*https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components*/}
				{/* @ts-expect-error Server Component */}
				<ListMenu />
			</div>
		</aside>
	);
}
