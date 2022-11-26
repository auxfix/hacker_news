export interface HackerStoryDTO {
    id: number;
    title: string;
    url: string;
    time: number;
    score: number;
    by: string;
  }

export interface UserDTO {
    id: string;
    created: number;
    karma: number;
    about: string;
  }