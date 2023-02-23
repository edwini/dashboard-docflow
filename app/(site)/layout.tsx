import "@/style/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="h-full bg-gray-50" lang="en">
      <head />
      <body className="h-full Roboto">
        {children}
        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://www.munielprogreso.hn/"
              className="hover:underline"
            >
              Municipalidad de El Progreso, Yoro.
            </a>
            . Diseñado por Doble J Studio.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Manual de usuario
              </a>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  )
}
