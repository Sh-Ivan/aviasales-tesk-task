export const formatDate = (stringDate: string) => {
  const date = new Date(stringDate)
  const formattedDate = date
    .toLocaleDateString(navigator.language, {
      day: 'numeric',
      month: 'long',
      weekday: 'short',
    })
    .split(', ')
    .reverse()
    .join(', ')
  return formattedDate
}
