/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    hello: false,

    sayHi: function(helloYes){
        if(!helloYes) {
            console.log('WELCOME')
        }
    },

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '').trim();
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detecPersonLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
         console.log(personalMovieDB);
        }
     },

     toggleVisivleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
     },

     writeYourGenres: function(write) {

      
        // для пользователя делаем старт с 1, а не с нуля
            for (let i = 1; i < 2; i++){
                // let genre = prompt(`Ваш любимиый жанр под номером №${i}`, '');

                // if (genre == null || genre ==='') {
                //     console.log('Вы ввели некорректные данные или не ввели их вовсе!')
                //     i--;
                // } else {
                // // const qustion = prompt(`Ваш любимиый жанр под номером №${i}`, '');
                // personalMovieDB.genres[ i - 1 ] = genre // для массива делаем старт с 0
                // console.log('done');
                // }

                let genres = prompt('Введите жанры через запяткую!').toLowerCase();

                if (genres == null || genres ==='') {
                        console.log('Вы ввели некорректные данные или не ввели их вовсе!');
                        i--;
                    } else {
                    // const qustion = prompt(`Ваш любимиый жанр под номером №${i}`, '');
                    personalMovieDB.genres = genres.split(', '); // для массива делаем старт с 0
                    personalMovieDB.genres.sort();
                    }
            } 
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимий жанр ${i + 1} - это ${item}`);
            });
        },
};








