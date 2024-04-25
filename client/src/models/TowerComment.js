export class TowerComment {
    constructor(data) {
        this.id = data.id
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.eventId = data.eventId
        this.body = data.body
    }
}