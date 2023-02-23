import { Icons } from "@/components/icons"

export default function Sidebar() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-amber-600 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
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
              href="/users"
              className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icons.users className="flex-shrink-0 w-6 h-6 text-white group-hover:text-amber-600 transition duration-75 dark:text-gray-400  dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a
              href="/operationlicense"
              className="group flex items-center p-2 text-base font-normal  rounded-lg text-white hover:text-gray-900 hover:font-bold dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Icons.inbox className="flex-shrink-0 w-6 h-6 text-white group-hover:text-amber-600 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Permisos de operación
              </span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
