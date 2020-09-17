// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_base: 'https://api.themoviedb.org/3/discover/movie?',
  most_popular: 'sort_by=popularity.desc',
  highest_rated: 'certification_country=US&certification=R&sort_by=vote_average.desc',
  most_popular_kids: 'certification_country=US&certification.lte=G&sort_by=popularity.desc',
  best_from_2020: 'primary_release_year=2020&sort_by=vote_average.desc',
  url: 'http://localhost:3000/response',
  poster_size: 'w92',
  apiKey: '4b172fb5c6e8fcb226d23e4fc2e10efd',
  count: 2
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
