export interface Transfers {
  name: string
  type: number
  checked: boolean
}

export interface SearchData {
  origin: string
  destionation: string
  dateStart: string
  dateEnd: string
}

export type SearchTypes = keyof SearchData

export interface Filters {
  transfers: Transfers[]
  search: SearchData
}
