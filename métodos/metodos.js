let pessoa = {
  nome: "Mateus",
  idade: 18,
  dizerOla(){
    console.log("Olá, "+ this.nome +"!")
  }
}

pessoa.dizerOla()