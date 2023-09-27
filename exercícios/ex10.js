let vagas = []


function showOption(){
  let option = prompt("O que deseja fazer? \n [1] Listar vagas disponíveis \n [2] Criar uma nova vaga \n [3] Visualizar uma vaga \n [4] Inscrever um candidato em uma vaga \n [5] Excluir uma vaga \n [6] Sair")

  return option
}

function showCandidates(){
  const vagaInText = vagas.reduce((finalText, vaga, index ) => {
    finalText += (index + 1) + ". "
    finalText += vaga.nome
    finalText += " (" + vaga.candidatos.length + " candidatos)."
    return finalText
  }, "")


  alert(vagaInText)
}


function createNewVaga(){
  const nameVaga = prompt("Qual é o nome da vaga?")
  const description  = prompt("Qual a descrição da vaga?")
  const dateLimit = prompt("Qual a data limite? dd/mm/aaaa")

  const confirmPrompt = confirm("Você deseje salvar essa nova vaga? \n" + "Nome: " + nameVaga + "\n" + "Descrição: " + description+ "\n" + "Data limite: " + dateLimit
  )

  if (confirmPrompt){
    return vagas.push({
      nome: nameVaga,
      descricao: description,
      dataLimite: dateLimit,
      candidatos: []
    })
  }
  alert("Alterações não foram feitas.")


}


function showVagaByIndex(){
  let indexVaga = parseInt(prompt("Qual a vaga você deseja visualizar?"))
  const showVaga = vagas[indexVaga]  
  const candidatos = vagas[indexVaga].candidatos.reduce((texto, candidato) => {
    return texto + "\n - " + candidato
  }, "")
  alert("\n Nome: "+ showVaga.nome+ 
        "\n Descrição: " + showVaga.descricao + 
        "\n Data Limite: " + showVaga.dataLimite+ 
        "\n Quantidade de candidatos: " + showVaga.candidatos.length + 
        "\n Candidatos incritos: " + candidatos)
}

function subscribeCandidato(){
  const nome = prompt("Qual o nome do candidato?")
  const indexVaga = prompt("Qual o indice da vaga? ")
  const confirmPrompt = confirm("Você está de acordo com essas alterações? \n" +
                          "\n Nome da vaga: " + vagas[indexVaga].nome +
                          "\n Descrição: " + vagas[indexVaga].descricao +
                          "\n Data limite: " + vagas[indexVaga].dataLimite )
  if(confirmPrompt){
    return vagas[indexVaga].candidatos.push(nome)
  }
}

function deleteVaga(){
  const indexVaga = parseInt(prompt("Qual o indice da vaga que deseja excluir?"))
  const vagaWithIndex = vagas[indexVaga]
  const candidatos = vagaWithIndex.candidatos.reduce((text, candidato) => {
    return text + " \n - " + candidato
  }, "")

  const confirmPromt = confirm("Você realmente deseja excluir esta vaga?  \n " + " Nome da vaga: " + vagaWithIndex.nome 
  + "\n Descrição: " + vagaWithIndex.descricao
  + "\n Data Limite: " + vagaWithIndex.dataLimite
  + "\n Candidatos: " + candidatos)

  if(confirmPromt){
    vagas.splice(vagaWithIndex,  1)
    alert("Vaga excluída!")
  }
}


function execute(){

  let optionChosen = ""

  do{
    optionChosen = showOption()

    switch (optionChosen) {
      case "1":
        showCandidates()

        optionChosen
      break;

      case "2":

        createNewVaga()

        optionChosen
      break;

      case "3":

        showVagaByIndex()

        optionChosen
      break;

      case "4":

        subscribeCandidato()

        optionChosen
      break;

      case "5":

        deleteVaga()

        optionChosen
      break;

      case "6":
        alert("Saindo...")
      break;

      default:
        alert("Opção inválida! Tente novamente")
        break;
    }
  }while(optionChosen !== "6")
}

execute()