import { AppState } from "../AppState"
import { Ticket } from "../models/Ticket"
import { api } from "./AxiosService.js"

class TicketsService {
    async createTicket(data) {
        const response = await api.post(`api/tickets`, data)
        AppState.activeEventTickets.push(new Ticket(response.data))
    }
    async deleteTicket(id) {
        const index = AppState.activeEventTickets.findIndex(x => x.id == id)
        if (index == -1) throw new Error('Could not find ticket.')

        await api.delete(`api/tickets/${id}`)
        AppState.activeEventTickets.splice(index, 1)
    }
    async getTicketsForEvent(eventId) {
        AppState.activeEventTickets = null
        const response = await api.get(`api/events/${eventId}/tickets`)
        AppState.activeEventTickets = response.data.map(x => new Ticket(x))
    }
}

export const ticketsService = new TicketsService()