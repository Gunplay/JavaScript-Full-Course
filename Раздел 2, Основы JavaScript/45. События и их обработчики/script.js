// const body = document.body;
// console.log(body);

const btns = document.querySelectorAll('button');
        overlay = document.querySelector('.overlay');
// btn.onclick = function () {
//     alert('Hi');
// };

// btn.onclick = function () {
//     alert('Second Hi');
// };

// btn.addEventListener('click',() => {
//     alert('Hi');
// });

// btn.addEventListener('click',() => {
//     alert('Second Hi');
// });

// btn.addEventListener('mouseenter',(event) => {
//     console.log(event.target);
//     event.target.remove();
//     console.log('Hover', 'Hi');
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type); //click
    // i++;
    // if (i == 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', () => {
    event.preventDefault();
    console.log(event.target);
})
