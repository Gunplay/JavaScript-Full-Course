"use strict"

const numberOfFilms = prompt('How many films have you wathced?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const a = prompt('one of the last movies you watched?', ''),
        b = prompt('how much would you rate it?', ''),
        c = prompt('one of the last movies you watched?', ''),
        d = prompt('how much would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);