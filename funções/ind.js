

let option = prompt("[1] Área triângulo \n [2] Área do retângulo \n [3] Área do quadrado \n [4] Área do trapézio \n [5] Ára do círculo \n [6] Sair")


function callOption(){
  option = prompt("[1] Área triângulo \n [2] Área do retângulo \n [3] Área do quadrado \n [4] Área do trapézio \n [5] Ára do círculo \n [6] Sair")
  return option
}
let base, height, side, smallerBase, largerBase, raio = 0;

do {
  function triangleArea(base, height){
    return (base * height) /2
  }

  function retangleArea(base, height){
    return base * height
  }

  function squareArea(side){
    return retangleArea(side, side)
  }

  function trapezeArea(largerBase, smallerBase, height){
    return ((largerBase + smallerBase) * height) /2
  }

  function circleArea(raio){
    return (raio * raio) * 3.14
  }

  switch (option) {
    case "1":
      base = parseInt(prompt("Qual o valor da base do triângulo?"));
      height = parseInt(prompt("Qual o valor da altura do triângulo?"));
      totalArea = triangleArea(base, height);

      alert("O total da área é " + totalArea)

      callOption()
      break;
    case "2":
      base = parseInt(prompt("Qual o valor da base do retângulo?"));
      height = parseInt(prompt("Qual o valor da altura do retângulo?"));
      totalArea = retangleArea(base, height);

      alert("O total da área é " + totalArea)

      callOption()
      break;

    case "3":
      side = parseInt(prompt("Qual o valor do lado do quadrado?"));
      totalArea = squareArea(side);

      alert("O total da área é " + totalArea)

      callOption()
      break;

    case "4":
      largerBase = parseInt(prompt("Qual o valor da base maior do trapézio?"));
      smallerBase = parseInt(prompt("Qual o valor da base menor do trapézio?"));
      height = parseInt(prompt("Qual o valor da altura do trapézio?"))
      totalArea = trapezeArea(largerBase, smallerBase, height);

      alert("O total da área é " + totalArea)
      callOption()
      break;

    case "5":
      raio = parseInt(prompt("Qual o valor do raio do círculo?"))
      totalArea = circleArea(raio)

      alert("O total da área é " + totalArea)
      callOption()
      break;

    case "6":
      alert("Encerrando...")
      break;
    default:
      alert("Opcção inválida! Tente novamente.")
      break;
  }
}while(option != "6")