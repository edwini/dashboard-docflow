export async function GetFetch(url: string) {
  const response = await fetch(url, { cache: "no-store" })
  const data = await response.json()
  return data
}

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function PostFetch(url: string, body: any) {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
  const data = await response.json()
  return data
}
