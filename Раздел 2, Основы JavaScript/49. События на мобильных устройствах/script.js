//touchstart
//touchmove
//touchend как только палец зашел на пределвы этого элемента!
//touchenter
//touchleave - когда палец ушёл за пределвы экрана!
//touchcancel - когда палец ушел запределвы баузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        // console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        // console.log('move');
        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });

});

// touches = список всех пальцев
// targetTouches
// chengedTouches - список пальцев которые учавствуют в текущем событии!