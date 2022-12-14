window.addEventListener('DOMContentLoaded', function() {

    // Tabs
    
	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {
        
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
	}

	function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';

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

    //Timer
    // const now = new Date();
    

    const deadline = '2022-06-11';
   
    // Получаем оставшиеся время
    function getTimeRemaining(endTime) {
        // конечное время до которого нам нужно дойти
        const t = Date.parse(endTime) - Date.parse(new Date()),
        // делим общее количество миллисекунд, на кол мил сек в одном дне
        // сколько в сутках миллисекунд
                
                days = Math.floor( (t/(1000*60*60*24)) ),
                seconds = Math.floor( (t/1000) % 60 ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                hours = Math.floor( (t/(1000*60*60) % 24) ); // example 50 hours / 24 = 2 дня отбрасываеми остаётся два часа
                
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
        
        });