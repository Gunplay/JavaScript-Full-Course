'use strict'

const usdCurr = 41
const eurCurr = 39
const discount = 0.9
const bonus = 300
const currentExchangeRate = (amount, currency) => {
  return amount * currency
}

function promotion(result) {
  return result * discount
}
const res = currentExchangeRate(600, usdCurr)
const resWithOutBonus = promotion(res)

function cashBack() {
  console.log(`${resWithOutBonus + bonus} : +300 uah`)
}
cashBack()

// const arr = [0, -1, -2, 4, 2, -3, -10, 'name', 'car']

// const sortArr = arr.filter(
//   (isPositive) => isPositive > 0 || typeof isPositive === 'string'
// )
// console.log(sortArr)
