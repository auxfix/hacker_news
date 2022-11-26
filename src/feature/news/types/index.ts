export interface HackerStory {
    id: number;
    title: string;
    url: string;
    timestamp: number;
    score: number;
    authorId: string;
    karma?: number;
  }

export interface User {
    id: string;
    created: number;
    karma: number;
    about: string;
  }
