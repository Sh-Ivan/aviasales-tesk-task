export interface Ticket {
  id: string
  price: number
  companyId: string
  // Массив идентификаторов перелётов
  info: {
    // Код города откуда вылет
    origin: CityCodes
    // Код города куда летим
    destination: CityCodes
    // Дата и время вылета в unix времени
    dateStart: string
    // Дата и время прибытия в unix времени
    dateEnd: string
    // Массив кодов городов с пересадками
    stops: CityCodes[]
    // Длительность полета в миллисекундах
    duration: number
  }
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
export type CityCodes =
  | 'MOW'
  | 'HKT'
  | 'HKG'
  | 'JNB'
  | 'PTB'
  | 'ARH'
  | 'TRN'
  | 'KRS'
  | 'SRT'
  | 'LOS'
  | 'EKV'
  | 'EKT'
