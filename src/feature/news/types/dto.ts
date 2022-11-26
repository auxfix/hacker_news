export interface HackerStoryDTO {
    id: number;
    title: string;
    url: string;
    timestamp: number;
    score: number;
    by: string;
  }

export interface UserDTO {
    id: string;
    created: number;
    karma: number;
    about: string;
  }