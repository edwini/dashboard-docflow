export const FormatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export const FormatCurrency = (value: number, currency: string = "HNL") => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  })
}
