const archive = require('./db.json')

let cont = 0
const books = archive["livros"].forEach( (book) => {
  cont += 1
  console.log("Livro " + cont + "\n" + book["titulo"])
})

console.log(books)