export class Serie {
    id: number;
    name: String;
    channel: String;
    seasons: number;

    constructor(id: number, name: String, channel: String, seasons: number) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
    }
}