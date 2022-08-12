import ticketApi from '../api'
import { AxiosResponse } from 'axios'
import { Ticket } from '../types/Ticket'

export default class TicketService {
  static async getTickets(): Promise<AxiosResponse<Ticket>> {
    return ticketApi.get<Ticket>('/163b5e66df9f2741243e')
  }

  static async getCompanies(): Promise<AxiosResponse<Ticket>> {
    return ticketApi.get<Ticket>('/a1b1c28b32d9785bb26c')
  }
}
