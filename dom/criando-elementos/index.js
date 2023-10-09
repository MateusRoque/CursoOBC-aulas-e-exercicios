function addInput(){
  // const ul = document.getElementById("inputs")

  // const newElement = document.createElement('li')
  // newElement.className = "list-item"
  // newElement.innerText = "Novo elemento: "

  // const newInput = document.createElement('input')
  // newInput.type = 'text'
  // newInput.name = 'input'

  // newElement.appendChild(newInput)
  // ul.appendChild(newElement)

  const ul = document.getElementById("inputs")

  const newLi = document.createElement("li")
  newLi.className = 'li-item'
  newLi.innerText = 'Testando input'

  const newInput = document.createElement(' ')
  newInput.type = 'text'
  newInput.className = 'input-item'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)

}