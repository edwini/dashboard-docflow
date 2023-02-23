"use client"
import { Icons } from "@/components/icons"
import DropDownMenuUser from "./DropDownMenuUser"
import { SessionProvider } from "next-auth/react"
export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <Icons.menu />
            </button>
            <a href="/dashboard" className="flex ml-2 md:mr-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
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
