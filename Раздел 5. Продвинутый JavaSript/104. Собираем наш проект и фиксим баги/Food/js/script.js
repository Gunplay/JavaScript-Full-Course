import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider'; // 
import {openModal} from './modules/modal'; // объектная

window.addEventListener('DOMContentLoaded', function() {
    //
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);
// создаём аргументы для приёма  селектора, очень часто будет использоваться!
// приём из главного App в другие модули
// function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass)
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-29-11');
    cards();
    calc();
    // создаём аргументы для приёма  селектора, очень часто будет использоваться!
    forms('form', modalTimerId);
    // делаем объект для для деструкторизаци
    slider({
// function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}        
        container: '.offer__slider', // container
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});