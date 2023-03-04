import { Icons } from "@/components/icons"

export default function Sidebar() {
  let maxPageLimit: number = parseInt(
    process.env.MAX_PAGE_SIZE?.toString() || "5",
  )

  // OPEN fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 transform-none
  //HIDE fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 -translate-x-full
  //<aside id="default-sidebar" className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0" aria-label="Sidebar" aria-modal="true" role="dialog">
  //<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-amber-600 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 peer-checked:translate-x-0" aria-label="Sidebar">
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-amber-600 border-r border-gray-200  dark:bg-gray-800 sm:translate-x-0 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-amber-600 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a
              href="/dashboard"
              className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icons.home className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-white" />

              <span className="ml-3">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href={`/users/${maxPageLimit}/1`}
              className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icons.users className="flex-shrink-0 w-6 h-6 text-white group-hover:text-amber-600 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a
              href={`/operationlicense/${maxPageLimit}/1`}
              className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icons.inbox className="flex-shrink-0 w-6 h-6 text-white group-hover:text-amber-600 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Permisos de operación
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
