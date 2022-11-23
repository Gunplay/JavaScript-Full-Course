function calc() {
  // Calc

  const result = document.querySelector('.calculating__result span');

  let sex, height, weight, age;

  if (localStorage.getItem('sex')) {
      sex = localStorage.getItem('sex');
  } else {
      sex = 'female';
      localStorage.setItem('sex', 'female');
  }

  
  if (localStorage.getItem('ratio')) {
      ratio = localStorage.getItem('ratio');
  } else {
      ratio = '1.375';
      localStorage.setItem('ratio', '1.375');
  }


  function calcTotal() {
      if (!sex || !height || !weight || !age ||  !ratio) {
          result.textContent = "____";
          return; // после return уже ничего работать не будет
          // елси у нас всё в порядке, то
      } 

          if (sex === 'female') {
              result.textContent = ((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio).toFixed(2);
          } else {
              // male
              result.textContent = ((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio).toFixed(2);
          }
      }
  
  calcTotal();

// Func для запоминания класса активности
function initLocalSetting(selector, activeClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if ( elem.getAttribute('id') === localStorage.getItem('sex')) {
          elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
          elem.classList.add(activeClass);
      }
  });
}

initLocalSetting('#gender div', 'calculating__choose-item_active');
initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active');

  function getStaticInformation(selector, activeClass) {
      const elements = document.querySelectorAll(selector);

      elements.forEach(elem => {
          elem.addEventListener('click', (e) => {
              if (e.target.getAttribute('data-ratio')) {
                  // именно клик на определённое значение (активность) - вытаскиваем её
                  // если кликием в блок GENDER - то значение не будет срабатывать так как мы указываем уник атрибут
                  ratio = +e.target.getAttribute('data-ratio');
                  // делаем созранение ratio
                  localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
              } else {
                  sex = e.target.getAttribute('id');
                  localStorage.setItem('sex', e.target.getAttribute('id'));
              }
              console.log(ratio, sex);

              // работаем тперь с классави активности
              // Перебираем через родительский полученный класс
              elements.forEach(elem => {
                  elem.classList.remove(activeClass);
              });

              e.target.classList.add(activeClass);

              calcTotal();
      });
      });
    
  }
                      // selector           classActive
                      // обязателнь нужно добовлять div - что срабатывало
  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
// Делаем функцию для input: height, weight, age
  function getDinamicInformation(selector) {
      const input = document.querySelector(selector);

      input.addEventListener('input', () =>{

          if (input.value.match(/\D/g)) { // NaN
             alert('Only numbers');
              input.style.border = '1px solid red';
            
          } else {
              input.style.border = 'none';
          }

          switch(input.getAttribute('id')) {
              case 'height':
                  height = +input.value; //NaN - false
                  break;
              case 'weight':
                  weight = +input.value;
                  break;
              case 'age':
                  age = +input.value;
                  break;
          }
          calcTotal();
      });
    
    
  }
  getDinamicInformation('#height');
  getDinamicInformation('#weight');
  getDinamicInformation('#age');
  
}

module.exports = calc;