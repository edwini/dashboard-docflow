import { ReactNode } from "react"

type MainWrapperType = {
  title: string
  children: ReactNode
}
//Aqui es donde se van a manejar los estados de los componentes hijos
export default function MainWrapper({ title, children }: MainWrapperType) {
  return (
    <>
      <header className="mt-14">
        <div className="p-4 sm:ml-64">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h1>
        </div>
      </header>
      <main>
        <div className="p-4 sm:ml-64">{children}</div>
      </main>
    </>
  )
}
