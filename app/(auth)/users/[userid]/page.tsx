import MainWrapper from "../../components/MainWrapper"

export default function Page({
  params,
}: {
  params: { userid: number }
}) {
  const { userid } = params
  return (
    <MainWrapper title="Administración de usuarios">
      <h1> Detalle de usuerio {userid}</h1>
    </MainWrapper>
  )
}
