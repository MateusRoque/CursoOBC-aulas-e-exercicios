let vagas = []


function showOption(){
  const option = prompt("O que deseja fazer? \n [1] Listar vagas disponíveis \n [2] Criar uma nova vaga \n [3] Visualizar uma vaga \n [4] Inscrever um candidato em uma vaga \n [5] Excluir uma vaga \n [6] Sair")

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




do{
  const option = showOption()
  console.log(vagas)
  switch (option) {
    case "1":
      alert("op 1")
      //A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
      showCandidates()

    break;
    case "2":
      alert("op 2")
      createNewVaga()
      //A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
    break;
    case "3":
      alert("op 3")
      //A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
    break;
    case "4":
      alert("op 4")
      //A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
    break;
    case "5":
      alert("op 5")
      //A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
    break;
    case "6":
      alert("Saindo...")
    break;

    default:
      alert("Opção inválida! Tente novamente")
      break;
  }
}while(option !== "6")