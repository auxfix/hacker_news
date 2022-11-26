import API from "services/api";
import { HackerStory } from "types";

export default class HackerApi extends API {
    constructor(){
        super(process.env.HACKER_API);
    }

    async getUser(id: string): Promise<Array<HackerStory>> {
        return await this.doFetch(`user/${id}.json`);
    }

    async getTopStories(): Promise<Array<number>> {
        return await this.doFetch(`topstories.json`);
    }

    async getHackerStoy(id: string): Promise<Array<number>> {
        return await this.doFetch(`item/${id}.json`);
    }
}