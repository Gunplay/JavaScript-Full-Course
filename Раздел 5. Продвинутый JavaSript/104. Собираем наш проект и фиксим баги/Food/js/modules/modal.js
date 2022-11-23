// Делаем отдельным функционалом closeModal and openModal
function closeModal(modalSelector) {
// не обходимо получть переменную, то селектор    
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
// передаём modalTimerId как аргумент
function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
// не обходимо получть переменную, то селектор    
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
// если мы получили  modalTimerId
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}
// создали принимающие аргументы
function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
       
        // что бы callback функция не выполнилась автоматически, делаем стрелочную функцию и тогда она сработает только после клика!!!
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));// добавили modalTimerId,  что бы закрыть окно
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId); // добавили modalTimerId, что бы закрыть окно
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
// Делаем отдельным функционалом closeModal and openModal
export {closeModal};
export {openModal};