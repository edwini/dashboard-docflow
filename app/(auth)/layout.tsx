import "@/style/globals.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function RootAuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /*data-theme="dark"*/
  return (
    <html className="dark h-full bg-gray-50 " lang="en">
      <head />
      <body className="h-full Roboto">
        <Navbar />

        {children}
        {/*https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components*/}
        {/* @ts-expect-error Server Component */}
        <Sidebar />
      </body>
    </html>
  )
}
