"use client"
import { Icons } from "@/components/icons"
import Image from "next/image"
import logoMuni from "@/public/assets/images/logo_muni.png"
import { useRef, useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [error, setError] = useState("")
  const router = useRouter()

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = emailRef?.current?.value
    const password = passwordRef?.current?.value
    if (!(email && password)) {
      setError("Usuario y contraseña con requeridos")
      return
    }

    setError("")
    const login = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
      callbackUrl: "/dashboard",
    })

    if (!login?.ok) {
      setError("Usuario y contraseña incorrectos")
      return
    }

    router.push(login?.url ?? "/dashboard")
  }

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Image
            src={logoMuni}
            className="mx-auto w-auto h-24"
            alt="Logo Municipalidad de El Progreso, Yoro"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Usuario
              </label>
              <input
                ref={emailRef}
                id="email-address"
                name="user"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                placeholder="Usuario"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Icons.lock />
              </span>
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
