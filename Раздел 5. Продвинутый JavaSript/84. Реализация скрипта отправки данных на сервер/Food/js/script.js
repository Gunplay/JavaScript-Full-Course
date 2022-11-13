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
           
            modalDialog = document.querySelector('.modal'),
            modalCloseBtn = document.querySelector('[data-close]');
            console.log(modalTrigger);
           
    
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
       modalCloseBtn.addEventListener('click', closeModel);

       modalDialog.addEventListener('click', (e) => {
//event. code уточняет, какая именно из них была нажата, в то время как event. key сообщает о «смысле» клавиши: что вообще было нажато ( Shift ).
            if ( e.target === modalDialog) {
                closeModel();
                // modalDialog.classList.add('hide');
                // modalDialog.classList.remove('show');
                // document.body.style.overflow = '';
            }
        });

      document.addEventListener('keydown', (e) => {
        if (e.code = "Escape" && modalDialog.classList.contains('show')) {
            closeModel();
        }
      });

      const modalTimerId = setTimeout(openModel, 5000);

      function showModalByScroll() {
        console.log(`scroll by Y: ${window.pageXOffset}`);
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModel();
            // удаляем после того как модальное окно сработало один раз
            window.removeEventListener('scroll', showModalByScroll);
        }
      }

      window.addEventListener('scroll', showModalByScroll);
});