let numberList = []
function addPlayer(){
  
  const positionInputValue = document.getElementById("position").value
  const nameInputValue = document.getElementById("name").value
  const numberInputValue = document.getElementById("number").value

  if(numberList.includes(numberInputValue)){
    alert("Este número de camiseta já existe")
    return 
  } else {
    numberList.push(numberInputValue)
  }

  if(positionInputValue == "" || nameInputValue == "" || numberInputValue == ""){
    alert("Algum campo não foi preenchido! Tente novamente.")
  }

  if(confirm("Você deseja realmente escalar o jogador: " + nameInputValue + " ?")){
    const p= document.getElementById("p-escalacao")
    p.innerText = ""

    const escalationList = document.getElementById("escalation-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-"+numberInputValue
    playerItem.innerText = positionInputValue + ": " + nameInputValue + "(" + numberInputValue   + ")"
    escalationList.appendChild(playerItem)
    
    
    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
  }

}

function removePlayer(){
  const numberRemoveValue = document.getElementById("numberRemove").value
  const playerRemove = document.getElementById("player-" + numberRemoveValue)


  if(confirm("Remover o jogador " + playerRemove.innerText + "?"))
    document.getElementById("escalation-list").removeChild(playerRemove)
    document.getElementById("numberRemove").value = ""
} 