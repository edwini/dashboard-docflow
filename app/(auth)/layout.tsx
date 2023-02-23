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
    <html
      className="dark h-full bg-gray-50 "
      style={{ overflow: "overlay" }}
      lang="en"
    >
      <head />
      <body className="h-full Roboto">
        <Navbar />
        {children}
        <Sidebar />
      </body>
    </html>
  )
}
