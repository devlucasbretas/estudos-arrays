
const numeros = [2, 4, 5, 6, 7, 6, 5]

let soma = 0 

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];   
}

/*
console.log(`Utilizando Loop For() ${soma}`)

// Refatorado para reduce() ----------------------------

const somaArray = numeros.reduce(function (acumulador, valorArray) {
    return acumulador + valorArray
}, 0)


console.log(`Refatorado com Reduce()  ${somaArray}`)
console.log()

*/

// Exemplo utilizando objetos ------------------------------

const pessoas = [
    { 
        nome: "Lucas",
        idade: "24"
    },
    { 
        nome: "Sabrina",
        idade: "20"
    },
    { 
        nome: "Lisandra",
        idade: "23"
    },
    { 
        nome: "Bruno",
        idade: "14"
    },
    { 
        nome: "Sérgio",
        idade: "13"
    },
    { 
        nome: "Pedro",
        idade: "4"
    },
  
]

const identifier = pessoas.reduce(function(acumulador, valorArray) {
    
    const propMaiorOuMenor = valorArray.idade >= 18 ? "maiores" : "menores";

    acumulador[propMaiorOuMenor].push(valorArray)

    return acumulador
}, { maiores: [], menores: []})

console.log(identifier)