const alunos = [
  { nome: 'Alice', nota: 85 },
  { nome: 'Bob', nota: 43 },
  { nome: 'Carol', nota: 88 },
  { nome: 'David', nota: 95 },
  { nome: 'Eva', nota: 50 }
]


let aprove = []
let disaprove = []

function checkMedia(list){

  list.forEach((dic) => {

    if(dic['nota'] >= 60) {
      dic['situação'] = "aprovado"
    } else { 
      dic['situação'] = "reprovado"
    }

   
  })
}

checkMedia(alunos)

console.log(alunos)