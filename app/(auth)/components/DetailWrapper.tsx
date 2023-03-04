import { Icons } from "@/components/icons"
import { ReactNode } from "react"

type MainWrapperType = {
  title: string
  children: ReactNode
}
//Aqui es donde se van a manejar los estados de los componentes hijos
export default function DetailWrapper({ title, children }: MainWrapperType) {
  return (
    <>
      <header className="mt-14">
        <div className="p-4 sm:ml-64 lg:flex lg:items-center lg:justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
          {/*
          <div className="mt-5 flex lg:mt-0 lg:ml-4">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Edit
              </button>
            </span>

            <span className="ml-3 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View
              </button>
            </span>

            <span className="ml-3 hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm  hover:bg-amber-700  focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Activar
              </button>
            </span>
  </div> */}
        </div>
      </header>
      <main>
        <div className="p-4 sm:ml-64">{children}</div>
      </main>
    </>
  )
}
