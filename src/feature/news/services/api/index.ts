import API from 'services/api';
import { HackerStory, User } from 'types';

export default class HackerApi extends API {
  constructor() {
    super(process.env.HACKER_API);
  }

  async getUser(id: string): Promise<User> {
    return this.doFetch(`user/${id}.json`);
  }

  async getTopStories(): Promise<Array<number>> {
    return this.doFetch(`topstories.json`);
  }

  async getHackerStory(id: number): Promise<HackerStory> {
    return this.doFetch(`item/${id}.json`);
  }
}
