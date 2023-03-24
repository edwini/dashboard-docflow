"use client"
import { Icons } from "@/components/icons"
import DropDownMenuUser from "./DropDownMenuUser"
import { SessionProvider } from "next-auth/react"
import Image from "next/image"
import logoMuni from "@/public/assets/images/logo_muni_mini.png"
export default function Navbar() {
  const handleMenuToggle = () => {
    const sidebar = document.getElementById("logo-sidebar")
    const header = document.querySelector("header>div")
    const main = document.querySelector("main>div")

    sidebar?.classList.toggle("sm:translate-x-0")
    header?.classList.toggle("sm:ml-64")
    main?.classList.toggle("sm:ml-64")

    const bodyWidth =
      document.body.clientWidth || document.documentElement.clientWidth
    if (bodyWidth < 640) {
      sidebar?.classList.toggle("transform-none")
    } else {
      sidebar?.classList.remove("transform-none")
    }
  }
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <a href="/dashboard" className="flex ml-2 md:mr-24">
              <Image
                src={logoMuni}
                className="h-8 mr-3"
                alt="Logo Municipalidad de El Progreso, Yoro"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Muni El progreso
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <SessionProvider>
                <DropDownMenuUser />
              </SessionProvider>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
