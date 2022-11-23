debugger
const test = (time) => { debugger
    return new Promise((resolve, rejecte) =>{ debugger
        setTimeout(()=> { debugger
            resolve(); debugger 
        }, time); debugger
    });
};

test(1000).then(() => console.log('1000 ms')); debugger
test(2000).then(() => console.log('2000 ms')); debugger
// Promise.all - ждёт все Promise 
Promise.all([test(1000), test(2000), test[5000]]).then(() => { debugger
    console.log('All'); debugger
}) 
debugger