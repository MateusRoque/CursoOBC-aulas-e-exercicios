function register(element){
  const name = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if(password == passwordConfirmation){
    alert("Usuário " + name + " cadastrado.")
  } else {
    alert("Senha inválida!")
  }
}