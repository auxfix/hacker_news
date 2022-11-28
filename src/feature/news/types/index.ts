export interface hackerstory {
  authorid: string;
  id: number;
  img?: string;
  karma?: number;
  score: number;
  time: number;
  title: string;
  url: string;
}

export interface user {
  about: string;
  created: number;
  id: string;
  karma: number;
}
