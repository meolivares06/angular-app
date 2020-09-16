import { Movie } from "./movie";

class MovieBuilder {
  instance: Movie

  title: string

  withTitle(title): Movie {
    this.instance.title = title
    return this.instance
  }
  getInstance(): Movie {
    return this.instance = new Movie()
  }
}
