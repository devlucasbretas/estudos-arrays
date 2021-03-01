
// sintaxe básica da funcção Map
const numeros = [2, 3, 6, 5, 10]

const novoArray = numeros.map(function(number) {
    return number + number
})

console.log(numeros)
console.log(novoArray)

// ---------------------------------------------------------


// sintaxe com arrow function => { }
const arrayNum = [1, 2, 3, 4, 5, 6]

const arrayNumDobro = arrayNum.map(numero => numero + numero)

console.log(arrayNumDobro)

// ----------------------------------------------------------

// retorna os items do array nomes com  toas as letras minusculas
const nomes = ["Lucas", "Sabrina", "Pedro", "Hugo"]

const nomesMin = nomes.map(function(nome) {
    return nome.toLowerCase()
})

console.log(nomesMin)
