/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
// Для того что-бы полностью прогрузить страницу либо window.
document.addEventListener('DOMContentLoaded', ()=> {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
            imageBack = document.querySelector('.promo__bg'),
            tittle = imageBack.querySelector('.promo__title'),

            genre = imageBack.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkBox = addForm.querySelector('[type="checkbox"]');
            console.dir(checkBox);
            
           
// submit() позволяет инициировать отправку формы из JavaScript. Мы можем использовать его для динамического создания и отправки наших собственных форм на сервер.            
    addForm.addEventListener('submit', (event)=> {
        event.preventDefault();

        let newFilm = addInput.value;
        console.log(newFilm);
        const favorite = checkBox.checked; // boolean(true/false)
        console.log(favorite);
// IF СОДЕРЖИТ ЛОГ BOOLEAN!
        if (newFilm) {

            if ( newFilm.length > 21) {
                // undeground
                // substr - (0 ,length);
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Added favorite film");
            }    
            movieDB.movies.push(newFilm);
        // movieDB.movies.sort();
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, movieList);
        }  else {
            console.log('Вы ничего не вввели!')
        }

        
        event.target.reset(); // очищаем таргет на котором происходит событие!
    });
   
    
    const deleteAdv = (arr) => {
        // console.log(arr);
        arr.forEach((item)=>{
            
            item.remove();
            console.log(item);
        });
    };

 

  const makeChanges = () => {
    tittle.textContent = 'ВО ВЛАСТИ КОСМОСА';
    genre.textContent = 'ДРАМА';
    imageBack.style.background = 'url("img/bg.jpg")';
  };

  makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    }
   

    function createMovieList(films, parent) {
        // const showFilmDeleted = alert('Film deledet!')
        parent.innerHTML = '';
        sortArr(films);
        // console.log(imageBack.innerHTML);
        
        films.forEach((film, i) => {
            
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
            `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                 if (btn.parentElement.remove) {
                   alert('Film deledet!');
                movieDB.movies.splice(i, 1); // метод вырезает элемент с массива

                createMovieList(films, parent);
                 }
                // createMovieList(movieDB.movies, movieList);

            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    // sortArr(movieDB.movies); делаем так что бы сортировка работала после удалённого фильма, а не после прогрузки страницы! Перемещаем в функцию!
    createMovieList(movieDB.movies, movieList);


});

// /* Задания на урок:

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

// 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
// "Добавляем любимый фильм"

// 5) Фильмы должны быть отсортированы по алфавиту */

// 'use strict';

// // Возьмите свой код из предыдущей практики

// const str = 'undeground';
// console.log(str.substr(9, 11));