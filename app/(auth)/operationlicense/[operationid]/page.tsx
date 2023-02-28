import MainWrapper from "../../components/MainWrapper"

export default function Page({
  params,
}: {
  params: { operationid: number }
}) {
  const { operationid } = params
  return (
    <MainWrapper title="Detalle de licencia">
      <h1> Detalle de licencia {operationid}</h1>
    </MainWrapper>
  )
}
