let vagas = []
let option = ""

do{
  option = prompt("O que deseja fazer? \n [1] Listar vagas disponíveis \n [2] Criar uma nova vaga \n [3] Visualizar uma vaga \n [4] Inscrever um candidato em uma vaga \n [5] Excluir uma vaga \n [6] Sair")

  switch (option) {
    case "1":
      alert("op 1")
    break;
    case "2":
      alert("op 2")
    break;
    case "3":
      alert("op 3")

    break;
    case "4":
      alert("op 4")

    break;
    case "5":
      alert("op 5")

    break;
    case "6":
      alert("Saindo...")
    break;

    default:
      alert("Opção inválida! Tente novamente")
      break;
  }
}while(option !== "6")