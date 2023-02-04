const test = (time) => {
  return new Promise((resolve, rejecte) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

test(1000).then(() => console.log('1000 ms'))
test(2000).then(() => console.log('2000 ms'))
// Promise.all - ждёт все Promise
Promise.all([test(1000), test(2000), test[5000]]).then(() => {
  console.log('All')
})
