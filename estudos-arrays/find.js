
const estoque = [
    {produto: "Mouse", quantidade: 3},
    {produto: "Placa de Vídeo", quantidade: 12},
    {produto: "Headset", quantidade: 16},
    {produto: "Mousepad", quantidade: 10},
    {produto: "Pendrive 16GB", quantidade: 22},
    {produto: "Teclado Gamer", quantidade: 15}
]

const BuscarProduto = estoque.find(function(item) {
    return item.produto == "Placa de Vídeo"
    
})

console.log(BuscarProduto)