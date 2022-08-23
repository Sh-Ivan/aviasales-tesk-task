export const datesIsEqual = (a: string, b: string) => {
  const date1 = new Date(a)
  if (!(date1 instanceof Date) || !date1.getTime()) {
    return false
  }
  const date2 = new Date(b)
  if (!(date2 instanceof Date) || !date2.getTime()) {
    return false
  }
  date1.setHours(0, 0, 0, 0)
  date2.setHours(0, 0, 0, 0)

  return date1.getTime() === date2.getTime()
}
