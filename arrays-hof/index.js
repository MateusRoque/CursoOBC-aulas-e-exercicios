// const personagens = [
//   { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
//   { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
//   { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
//   { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
//   { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
//   { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
//   { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
// ]

// MAP -- cria novo array e nao altera o inicial
// const nomes = personagens.map((personagem) => {
//   // console.log(evento)
//   // nomes.push(personagem.nome)
//   return personagem.raca === "Orc"
// })

// console.log(nomes)

// FILTER -- mesma coisa do map porem serve para filtrar

// const personagensOrc = personagens.filter((personagem) => {
//   return personagem.raca === "Orc"
// })

// personagensOrc.forEach((personagem) => {
//   console.log(personagem.nome)
// })

// REDUCE  
// const nivelTotal = personagens.reduce((valorAcumulado, personagem) => {
//   return valorAcumulado + personagem.nivel
// }, 0)

// console.log(nivelTotal)


// const racas = personagens.reduce((valorAcumulado, personagem) => {
//   if (valorAcumulado[personagem.raca]){
//     valorAcumulado[personagem.raca].push(personagem)
//   } else {
//     valorAcumulado[personagem.raca] = [personagem]
//   }

//   return valorAcumulado

// }, {})

// console.log(racas)

// SORT -- forma de ordenar um array
//  ALTERA OS VALORES ORIGINAI DO ARRAY
// personagens.sort((a, b) => {
//   return a.nivel - b.nivel
// })

// console.log(personagens)


let lista = [{nome: "mateus", idade: 20}, 
              {nome:"Umberto", idade: 55}]
let opcaoLista = 4
let mostrarDaLista = lista[1]

console.log(mostrarDaLista.nome)