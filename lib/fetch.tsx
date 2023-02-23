export async function GetFetch(url: string) {
  console.log("GetFetch", url)
  const response = await fetch(url)
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
