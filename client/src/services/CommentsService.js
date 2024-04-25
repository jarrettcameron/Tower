import { AppState } from "../AppState"
import { TowerComment } from "../models/TowerComment"
import { api } from "./AxiosService"

class CommentsService {
    async getCommentsForEvent(eventId) {
        const response = await api.get(`api/events/${eventId}/comments`)
        AppState.activeEventComments = response.data.map(x => new TowerComment(x))
    }
}

export const commentsService = new CommentsService()