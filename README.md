# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## API:
http://www.omdbapi.com/?i=tt3896198&apikey=6a590b1d
--------------------------------------------------------------

https://api.themoviedb.org/3/movie/550?api_key=4b172fb5c6e8fcb226d23e4fc2e10efd
https://api.themoviedb.org/3/discover/movie?api_key=4b172fb5c6e8fcb226d23e4fc2e10efd&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1


token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjE3MmZiNWM2ZThmY2IyMjZkMjNlNGZjMmUxMGVmZCIsInN1YiI6IjVmNjE5NzQxZDhjYzRhMDAzYTAxOGZhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqe1aFv2VHIzHfgcs0NDkBJUikEX8gElR33F0kgxi-M


API COnfiguration
{
  "images": {
    "base_url": "http://image.tmdb.org/t/p/",
    "secure_base_url": "https://image.tmdb.org/t/p/",
    "backdrop_sizes": [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    "logo_sizes": [
      "w45",
      "w92",
      "w154",
      "w185",
      "w300",
      "w500",
      "original"
    ],
    "poster_sizes": [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    "profile_sizes": [
      "w45",
      "w185",
      "h632",
      "original"
    ],
    "still_sizes": [
      "w92",
      "w185",
      "w300",
      "original"
    ]
  },
  "change_keys": [
    "adult",
    "air_date",
    "also_known_as",
    "alternative_titles",
    "biography",
    "birthday",
    "budget",
    "cast",
    "certifications",
    "character_names",
    "created_by",
    "crew",
    "deathday",
    "episode",
    "episode_number",
    "episode_run_time",
    "freebase_id",
    "freebase_mid",
    "general",
    "genres",
    "guest_stars",
    "homepage",
    "images",
    "imdb_id",
    "languages",
    "name",
    "network",
    "origin_country",
    "original_name",
    "original_title",
    "overview",
    "parts",
    "place_of_birth",
    "plot_keywords",
    "production_code",
    "production_companies",
    "production_countries",
    "releases",
    "revenue",
    "runtime",
    "season",
    "season_number",
    "season_regular",
    "spoken_languages",
    "status",
    "tagline",
    "title",
    "translations",
    "tvdb_id",
    "tvrage_id",
    "type",
    "video",
    "videos"
  ]
}


Discover movies:
## What movies are in theatres?
URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

## What are the most popular movies?
URL: /discover/movie?sort_by=popularity.desc

## What are the highest rated movies rated R?
URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

## What are the most popular kids movies?
URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

##What is are the best movies from 2010?
URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

## What are the best dramas that were released this year?
URL: /discover/movie?with_genres=18&primary_release_year=2014

What are the highest rated science fiction movies that Tom Cruise has been in?
URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

What are the Will Ferrell's highest grossing comedies?
URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

Have Brad Pitt and Edward Norton ever been in a movie together?
URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc

Has David Fincher ever worked with Rooney Mara?
URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc

What are the best drama's?
URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

What are Liam Neeson's highest grossing rated 'R' movies?
URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896




TODOs:
  Cargando general con interceptores, interfaz y servicio
  Uso de switchMap en las peticiones
  Customize theme material
  Covertura de tests
  Manejo de estado
  Uso de patron Adapter
  Agregar indicador al boton de la barra de herramientas
  Mostrar detalles de una card
  Lazy loading de las imagenes
  Scroll infinito o Paginacion
  FlexLayout
  
