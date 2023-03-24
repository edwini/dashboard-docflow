import { Icons } from "@/components/icons"
import { BackButton } from "@/components/ui/BackButton"
import MainWrapper from "../components/MainWrapper"

export default function Page() {
  return (
    <MainWrapper title="Acceso denegado">
      <p>No tiene permisos para ver este recurso.</p>
      <div className="flex pt-4">
        <BackButton variant="link">
          <Icons.chevronLeft />
          Regresar
        </BackButton>
      </div>
    </MainWrapper>
  )
}
