import { AppState } from "../AppState"
import { Ticket } from "../models/Ticket"
import { api } from "./AxiosService.js"

class TicketsService {
    async getTicketsForEvent(eventId) {
        AppState.activeEventTickets = null
        const response = await api.get(`api/events/${eventId}/tickets`)
        AppState.activeEventTickets = response.data.map(x => new Ticket(x))
    }
}

export const ticketsService = new TicketsService()