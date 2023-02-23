import MainWrapper from "../components/MainWrapper"
import { ListofUser } from "./components/ListofUser"

export default function Page() {
  return (
    <MainWrapper title="Administración de usuarios">
      <ListofUser />
    </MainWrapper>
  )
}
