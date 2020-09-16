export interface rate {
  source: string;
  value: string;
}
export class Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
}

export interface Response {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
