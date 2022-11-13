'use strict'
//Ajax – это аббревиатура, означающая "Асинхронный JavaScript и XML" (Asynchronous JavaScript and XML).

const inputUAH = document.querySelector('#uah'),
        inputUSD = document.querySelector('#usd');

inputUSD.addEventListener('input', () => {
    const request = new XMLHttpRequest();

// Формирование запроса    
// request.open(metgod, url, async, login, pass);

// Get - для получения из backend, для использования ан frontend
// POST для отпарвки даннаых в облачное хранищие или данных с формы клиента

// GET - работат на простыъ серверах (Live server)
// POST - любой локальный сервер, open server, map и др
//request.open(metgod, url, async, login, pass);
    request.open('GET', 'js/current.json'); // open собирает настройки, что бы сделать запрос // async: true - default
    // request.setRequestHeader - устанавливаем тип принимаеомого файла
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    // 1) readyState - событие отслеживает статус готовности нашего запроса в данный текущий момент
    // 2) LOADING - 2е событие огад всё загрузилсоь
    request.addEventListener('readystatechange', () =>{
        // 0 1 2 3 4 - Done                   // 2xx: Success (успешно)
        if (request.readyState === 4 && request.readyState === 200) {
            //response - ответ от сервера
            console.log(request.response);
            const data =JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    });


    // status 404 - клиентская часть, 500+ серверная
    //statustext - текстовое описание ответа от сервера 200 (oket, accpet, create)
    // response - ответ от сервера ( то что нам дал backend розработчик, то что мы будем использовать на клиенте)
                            // readyState - текущее состояние запроса
//     Value	State	Description
// 0	UNSENT	Client has been created. open() not called yet.
// 1	OPENED	open() has been called.
// 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	LOADING	Downloading; responseText holds partial data.
// 4	DONE	The operation is complete.


});        