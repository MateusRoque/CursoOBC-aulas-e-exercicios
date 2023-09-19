function somar(a, b){
  return a + b
}

let operacao = somar
console.log(operacao(5, 5))

operacao = (a, b) => {
  return a * b
}

console.log(operacao(5, 5))
// const subtrair = (a, b) => {
//   return a - b;
// }


// console.log(subtrair(10, 5))