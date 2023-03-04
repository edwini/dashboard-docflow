import { toast } from "@/hooks/useToast"
import { ErrorUserFormState } from "@/types/ErrorUserFormState"
import { UserType } from "@/types/UserType"
import { useState } from "react"

export function useUserForm({
  currentForm,
  action,
}: { currentForm: HTMLFormElement | null; action: string }) {
  const [error, setError] = useState<ErrorUserFormState>({
    usernameError: null,
    nameError: null,
    phoneError: null,
    roleError: null,
    isValid: false,
  })

  function validateForm() {
    if (!currentForm) return
    const formData = new FormData(currentForm)
    let errorMessage: ErrorUserFormState = {
      usernameError: null,
      nameError: null,
      phoneError: null,
      roleError: null,
      isValid: false,
    }
    console.log(action)

    const username = formData.get("username")
    errorMessage.usernameError = !username
      ? "Por favor ingrese un usuario válido."
      : null

    const name = formData.get("name")
    errorMessage.nameError = !name
      ? "Por favor ingrese un nombre válido."
      : null

    const phone = formData.get("phone")
    errorMessage.phoneError = !phone
      ? "Por favor ingrese un teléfono válido."
      : null

    const paytaxer = formData.get("paytaxer")
    const role = formData.get("role")

    errorMessage.roleError = !role ? "Por favor seleccione un permiso." : null
    setError((prev) => errorMessage)
    if (!(username && name && phone && role)) {
      return
    }

    errorMessage.isValid = true
    setError((prev) => errorMessage)
    const data: Partial<UserType> = {
      username: username as string,
      name: name as string,
      phone: phone as string,
      roleId: parseInt(role.toString()),
      taxPayer: paytaxer === "on",
    }
    console.log(data)
    toast({
      variant: "success",
      title: "Registro de usuarios",
      description: "Nuevo usuario registrado con exito.",
    })
  }
  return {
    validateForm,
    error,
  }
}
