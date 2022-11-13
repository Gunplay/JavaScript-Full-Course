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
        postData(item);
      });

      function postData(form) {
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
                   
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            // ЗАГОЛОВОК УСТАНАВЛИВАТЬ НЕ НУЖНО, ЕСЛИ МЫ ОТПРАВЛЯЕМ ОБЫЧНЫМ ТЕКСТ ИЗ ФОРМЫ!
            // request.setRequestHeader('Content-type', 'multipart/form-data');
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form); // формируем объет ключ значение
            // Преобразуем в формат JSON
            const object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const json = JSON.stringify(object);

            request.send(json); // PHP - не умеет работать, но как - с $_PSOT = json_decode(file_get_contents("php://input"), true);

            request.addEventListener('load', () =>{
                if (request.status === 200) {
                    console.log(request.response);
                    // statusMessage.textContent = message.success;
                    // Вместо этого подставляем нашу новую функцию
                    showThanksModal(message.success);
                    form.reset();
                        statusMessage.remove();
//                   2) Формируем ответ для пользователя после успешной отправки!
                } else {
                    // statusMessage.textContent = message.failure;
                    showThanksModal(message.failure);
                }
            })
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
});