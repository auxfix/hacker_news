export interface HackerStory {
    id: number;
    title: string;
    url: string;
    time: number;
    score: number;
    authorId: string;
    karma?: number;
    img?: string; 
  }

export interface User {
    id: string;
    created: number;
    karma: number;
    about: string;
  }
