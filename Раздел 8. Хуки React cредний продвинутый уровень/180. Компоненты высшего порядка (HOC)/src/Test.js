function count(x) {
  return function (y) {
    return function (z) {
      return x * y * z
    }
  }
}
console.log(count(2)(2)(3))
