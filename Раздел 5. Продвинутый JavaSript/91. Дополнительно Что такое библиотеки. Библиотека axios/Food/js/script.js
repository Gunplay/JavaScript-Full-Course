window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
	}

	function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();

	tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
    });
    


     // Используем классы для создание карточек меню

     class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, percent, ...classes) {
            
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes; // || 'menu__item'  - старый способ - forEach не работает со строками
            this.parent = document.querySelector(parentSelector);
            this.transfer = 41;
            this.percent = 0.7;
            this.changeToUAH();
            
        }

        changeToUAH() {
            this.price = Math.round((+this.price * this.transfer) * +this.percent); 
        }

        render() {
            const element = document.createElement('div');
           
            // console.log(this.classes);

            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
                
            } else {
                this.classes.forEach(className => element.classList.add(className)); // перебераем классы в массиве, которые указали в экземпляре объекта
            }

            element.innerHTML = `
            <img src=${this.src} alt=${this.alt} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
            this.parent.append(element);
            
        }
        
    }

    const getResource = async (url) => { // data - нам не нужен, потому что мы только полачем данные
        // в переменной res - сначала ничего не будет, так код асинхронный и может вернуть обещание не так мыстро(3, 4, 10 sec);
        // await - ждём пока прийдёт ответ! И только после ответа продолжаем работу кода и потом у res появляется метод  .json();
        const res = await fetch(url); 
      
        if (!res.ok) { // если пошло что-то не так сработает блок catch()
            // Объект ошибки
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        // res.json(); - возращает promise и нам нужно его дождаться, что бы его return!!!
        return await res.json(); // Метод нам не будет доступен И что бы сделать его синхронным надо! Await ждём promise
      };

    //   getResource('http://localhost:3000/menu')
    //   .then(data => {
    //      data.forEach(obj => {
    //          new MenuCard({obj.img, obj.altimg}).render();
    //      });
    //      Используем деструктуризацию!!!
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //   });
        // getResource('http://localhost:3000/menu')
        //     .then(data => createCard(data)); // вызываем функцию

        // Без Class
        //     function createCard(data) {
        //         data.forEach(({img, altimg, title, descr, price}) => {
        //             price = price * 41;
        //             const element = document.createElement('div');
        //             element.classList.add('menu__item');
        //             element.innerHTML = `
        //             <img src=${img} alt=${altimg} />
        //             <h3 class="menu__item-subtitle">${title}</h3>
        //             <div class="menu__item-descr">${descr}</div>
        //             <div class="menu__item-divider"></div>
        //             <div class="menu__item-price">
        //               <div class="menu__item-cost">Цена:</div>
        //               <div class="menu__item-total"><span>${price}</span> грн/день</div>
        //             </div>
        //             `;
        //             document.querySelector('.menu .container').append(element);
        //         });
        //    }

    axios.get('http://localhost:3000/menu')
        .then(data => {
             data.data.forEach(({img, altimg, title, descr, price}) => {
                 new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
    });
    // const div = new MenuCard();
    // div.render;

    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     1000,
    //     ".menu .container",
    //     // 'menu_item',
    //     // 'big',
        
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     14,
    //     ".menu .container",
    //     // 'menu__item',
    // ).render();

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     21,
    //     ".menu .container",
    //     // 'menu__item',
    // ).render();




    // Timer
 console.log(new Date());

    const deadline = '2022-12-31';

    console.log(Date.parse(new Date()));

    function getTimeRemaining(endtime) {
        // console.log(endtime);
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());

         if ( t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
         } else {
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );
         }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);
            // console.log(t);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    // const btnConnectWhite = document.querySelector('.btn_white');
    // console.log(btnConnectWhite);

    // const btnConnectDark = document.querySelector('.btn_dark');
    // console.log(btnConnectDark);

    const modalTrigger = document.querySelectorAll('[data-modal]'),
           
            modalDialog = document.querySelector('.modal');
           
          
    
        function openModel() {
            modalDialog.classList.add('show');
            modalDialog.classList.remove('hide');
            // modalDialog.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId); // если пользователь уже открыл мод окно, что бы через 5 сек не открывалось ещё
        } 

        modalTrigger.forEach((btn)  => {
            btn.addEventListener('click', openModel);
        });
// Когда участок кода мы переиспользовуем,  делаем отделью фукцию - оптимазация кода
        function closeModel () {
            modalDialog.classList.add('hide');
            modalDialog.classList.remove('show');
            // modalDialog.classList.toggle('show');
            document.body.style.overflow = '';

        }

       modalDialog.addEventListener('click', (e) => {
//event. code уточняет, какая именно из них была нажата, в то время как event. key сообщает о «смысле» клавиши: что вообще было нажато ( Shift ).
            if ( e.target === modalDialog || e.target.getAttribute('data-close') == '') {
                closeModel();
                // modalDialog.classList.add('hide');
                // modalDialog.classList.remove('show');
                // document.body.style.overflow = '';
            }
        });

      document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalDialog.classList.contains('show')) {
            closeModel();
        }
      });

      const modalTimerId = setTimeout(openModel, 50000);

      function showModalByScroll() {
        console.log(`scroll by Y: ${window.pageXOffset}`);
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModel();
            // удаляем после того как модальное окно сработало один раз
            window.removeEventListener('scroll', showModalByScroll);
        }
      }

      window.addEventListener('scroll', showModalByScroll);


      // Forms
// shift + f5 - очистить кеш браузера (сервера)
      const forms = document.querySelectorAll('form');

      const message = {
        loading: 'img/form/spinner.svg',
        success: 'Thanks, we will contact you soon!',
        failure: 'Something went wrong...',
        failurCuteCate: 'img/form/grooming-1801287.svg',
      }
// Перебираем наши формы и формируем объеты
      forms.forEach(item => {
        bindPostData(item);
      });

      const postData = async (url, data) => {
        // в переменной res - сначала ничего не будет, так код асинхронный и может вернуть обещание не так мыстро(3, 4, 10 sec);
        // await - ждём пока прийдёт ответ! И только после ответа продолжаем работу кода и потом у res появляется метод  .json();
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            // body: JSON.stringify(object);
            body: data
        })
        // res.json(); - возращает promise и нам нужно его дождаться, что бы его return!!!
        return await res.json(); // Метод нам не будет доступен И что бы сделать его синхронным надо! Await ждём promise
      }

      function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // без перезагрузки страницы
            // 1) Формируем ответ для пользователя после отправки формы!
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // statusMessage.textContent = message.loading;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);
            // 'beforebegin': перед самим элементом targetElement.
            // 'afterbegin': внутри элемента targetElement, перед его первым потомком.
            // 'beforeend': внутри элемента targetElement, после его последнего потомка.
            // 'afterend': после самого элемента targetElement.    
                   
            // ЗАГОЛОВОК УСТАНАВЛИВАТЬ НЕ НУЖНО, ЕСЛИ МЫ ОТПРАВЛЯЕМ ОБЫЧНЫМ ТЕКСТ ИЗ ФОРМЫ!
            // request.setRequestHeader('Content-type', 'multipart/form-data');
           
            const formData = new FormData(form); // формируем объет ключ значение
            // Преобразуем в формат JSON - старый метод
            // const object = {};
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });
            // Новый метод
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // console.log(json);
            // const obj = {a: 23, b: 50};
            // //           В Объект         В массив!!!
            // console.log(Object.fromEntries(Object.entries(obj)));
            
// Одна из особенностей fetch - если клиент неправильно прописал URL - то он не реагирует!! 404 Not Found («не найдено»)[
        //     fetch('server.php', {
        //         method: "POST",
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(object)
        //   })
        // На данный момент на не интересен файл server.php, а нужен именно который создал нам сервер
            postData('http://localhost:3000/requests', json)
        //   .then(data => data.text()) // Преобразуем в текстовый код, так как у нас уже есть JSON преобразование в строку не нужна
          .then(data => {
            console.log(data);
            // statusMessage.textContent = message.success;
            // Вместо этого подставляем нашу новую функцию
            showThanksModal(message.success);
            statusMessage.remove();
          }).catch(() => {
            showThanksModal(message.failure);
          }).finally(() => {
            form.reset();
          });
            // request.send(json); // PHP - не умеет работать, но как - с $_PSOT = json_decode(file_get_contents("php://input"), true);

//             request.addEventListener('load', () =>{
//                 if (request.status === 200) {
//                     console.log(request.response);
//                     // statusMessage.textContent = message.success;
//                     // Вместо этого подставляем нашу новую функцию
//                     showThanksModal(message.success);
//                     form.reset();
//                         statusMessage.remove();
// //                   2) Формируем ответ для пользователя после успешной отправки!
//                 } else {
//                     // statusMessage.textContent = message.failure;
//                     showThanksModal(message.failure);
//                 }
//             })
        })
      }

      function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModel();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close data-close">x</div>
                <div class="modal__title">${message}</div>
            </div>
        `
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() =>{
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModel();
        },4000);
      }

      // API - Application Programming Interface
      // DOM API

      // fetch - принести, получать
    //   fetch('https://jsonplaceholder.typicode.com/users', {
    //         // method: 'POST',
    //         // body: JSON.stringify({name: 'Alex'}),
    //         // headers: { // заголовки
    //         //     'Content-type': 'application/json'
    //         // }
    //   }) // Promise
    //     .then(response => response.json())  //1) Возвращается Promise // в Fetch уже встроен метод JSOM.parse();
    //     // .then(json => console.log(json));
       
// 0) NPM i - если человек хочет скачать проект без node_modules, то через консоль он сможет установить все зависимости благодаря package.json
// 1) npm init
// 2) npm i json-server - устанавливать в каждый проект лучше локально (-g global); для разработки - npm i json-server --save-dev
// 3) npx json-server db.json - запуск сервера      
    //   fetch('http://localhost:3000/menu') // db.json меняем на http://localhost:3000/menu
    //     .then(data => data.json())
    //     .then(res => console.log(res));
});