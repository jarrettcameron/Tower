import { AppState } from "../AppState.js"
import { TowerEvent } from "../models/TowerEvent.js"
import { api } from "./AxiosService.js"

class TowerEventsService {
    async getEvents() {
        const events = await api.get('api/events')
        AppState.towerEvents = events.data.map(x => new TowerEvent(x))
    }
}

export const eventsService = new TowerEventsService()