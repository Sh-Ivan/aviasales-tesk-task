export const dateToTime = (stringDate: string) => {
  const date = new Date(stringDate)
  return date.toLocaleTimeString(navigator.language, {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const daysHoursMinutes = (ms: number) => {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000))
  const daysms = ms % (24 * 60 * 60 * 1000)
  const hours = Math.floor(daysms / (60 * 60 * 1000))
  const hoursms = ms % (60 * 60 * 1000)
  const minutes = Math.floor(hoursms / (60 * 1000))

  const duration = days > 0 ? `${days}д ${hours}ч ${minutes}м` : `${hours}ч ${minutes}м`
  return duration
}

export const numberWithSpace = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const stopsNumber = (stops: number) => {
  return stops > 0 ? `${stops} ${stops === 1 ? 'пересадка' : 'пересадки'}` : 'без пересадок'
}
