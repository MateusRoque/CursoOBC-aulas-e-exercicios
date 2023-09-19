function calcular(a, b, operacao){
  console.log("Operação")
  const resultado = operacao(a, b)
  return resultado
}

function somar(x, y){
  console.log("Soma.")
  return x + y
}

function multiplicar(x, y){
  console.log("Multiplicação")
  return x * y
}

console.log(calcular(5, 5, multiplicar))

console.log(calcular(5, 5, somar))

console.log(calcular(10, 5, (a, b) => {
  console.log("Arrow Function subtração")
  return a - b
}))

function exibirElemento(elemento, indice, array){
  console.log({
    elemento,
    indice,
    array
  })
}

let lista = ["Maçã", "Banana", "Morango", "Abacate"]

for(let i = 0; i < lista.length; i++){
  exibirElemento(lista[i], i, lista)
}