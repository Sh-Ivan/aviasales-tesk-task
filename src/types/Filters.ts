export interface Transfers {
  name: string
  type: number
  checked: boolean
}

export interface SearchData {
  from: string
  to: string
  dateTo: string
  dateFrom: string
}

export type SearchTypes = keyof SearchData

export interface Filters {
  transfers: Transfers[]
  search: SearchData
}
