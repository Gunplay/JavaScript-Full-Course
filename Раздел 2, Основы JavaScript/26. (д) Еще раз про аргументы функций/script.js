'use strict'

const usdCurr = 41
const eurCurr = 39

const currentExchangeRate = (amount, currency) => {
  console.log(amount * currency)
}
currentExchangeRate(600, usdCurr)
currentExchangeRate(600, eurCurr)

const arr = [0, -1, -2, 4, 2, -3, -10, 'name', 'car']

const sortArr = arr.filter(
  (isPositive) => isPositive > 0 || typeof isPositive === 'string'
)
console.log(sortArr)
