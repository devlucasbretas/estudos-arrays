/*
const numeros = [2, 3, 5, 6, 20, 12, 10]

const numerosPares = numeros.filter(function(numero){
    if (numero % 2 == 0) {
        return true
    } else {
        return false 
    }
})

console.log(numerosPares)
*/

const idades = [10, 14, 15, 45, 23, 17, 29, 19, 18, 5, 53, 33, 26, 9]

const menoresDeIdade = idades.filter(function(idade) {
    if(idade <= 17) {
        return true
    } else {
        return false
    }
})

const maioresDeIdade = idades.filter(function(idade) {
    if(idade >= 18) {
        return true
    } else {
        return false
    }
})

console.log(`Os Menores de idade possuem as idades: ${menoresDeIdade}`)

console.log(`Os Maiores de idade possuem as idades: ${maioresDeIdade}`)

// saida => 
// Os Menores de idade possuem as idades: 10,14,15,17,5,9
// Os Maiores de idade possuem as idades: 45,23,29,19,18,53,33,26

// -----------------------------------------------------------------------------------------------------------------------------------

