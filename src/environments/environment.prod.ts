export const environment = {
  production: true,
  url_base: 'https://api.themoviedb.org/3/discover/movie?',
  most_popular: 'sort_by=popularity.desc',
  highest_rated: 'certification_country=US&certification=R&sort_by=vote_average.desc',
  most_popular_kids: 'certification_country=US&certification.lte=G&sort_by=popularity.desc',
  best_from_2020: 'primary_release_year=2020&sort_by=vote_average.desc',
  url: 'https://api.themoviedb.org/3/discover/movie?api_key=4b172fb5c6e8fcb226d23e4fc2e10efd&',
  poster_size: 'w300',
  apiKey: '4b172fb5c6e8fcb226d23e4fc2e10efd',
  count: 25
};

/*
## What are the most popular movies?
URL: /discover/movie?sort_by=popularity.desc

## What are the highest rated movies rated R?
URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

## What are the most popular kids movies?
URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

##What is are the best movies from 2010?
URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc
*/
