
// Array onde são armazenados os produtos em forma de objetos
const estoque = []

// Objeto com os métodos referentes ao registro de produtos no array de estoque[] e adição desses produtos na tabela
const productRegister = {
    // captura das entradas de dados
    prod: document.getElementById("produtoName"),
    prodID: document.getElementById("produtoId"),
    qtde: document.getElementById("produtoQtde"),
    desc: document.getElementById("produtoDescr"),
    tabela: document.getElementById("product-list"),

    // Método que cria um elemento no array com as props prod, prodID, qtde, desc e atribui a eles os dados capturados
    Adicionar() {
        if(this.prod.value == "" || this.qtde.value == "" || this.desc.value == "" || this.prodID.value == "") {
            alert("[Erro] O Sistema detectou que dos dados não foi inserido corretamente!")
        } else if (this.qtde.value <= 0) {
            alert("[Erro] A Quantidade do item não pode ser menor ou igual a 0!")
        } else {
                    estoque.push({
                        produto: this.prod.value,
                        quantidade: this.qtde.value,
                        descricao: this.desc.value,
                        id: this.prodID.value
                    })
    
                    this.AdicionarNaLista()
                    alert("Seu Produto foi cadastrado com sucesso!")
                    this.LimparInputs()      
            }

            
    },

    // Método que adiciona o elemento criado na tabela através do foreach() 
    AdicionarNaLista() {
        const list = document.getElementById("product-list")
        const item = document.createElement("tr")

        estoque.forEach(function(product){
            item.innerHTML = `
                <td>${ product.produto }</td>
                <td>${ product.quantidade }</td>
                <td>${ product.descricao }</td>
                <td>${ product.id }</td>
            `
            list.appendChild(item)
        })
    },

    // Método que limpa os inputs após o cadastro de um produto
    LimparInputs() {
        this.prod.value = ""
        this.qtde.value = ""
        this.desc.value = ""
        this.prodID.value = ""
    }
}

// Objeto com os métodos referente a consultas de produtos
const productConsult = {
    buscaDoUsuario: document.getElementById("buscaInserida"),
    saidaDaBusca: document.getElementById("busca-saida"),

    // Método que faz a busca pela prop id através do find()
    Buscar() {
        if(this.buscaDoUsuario.value == "" || this.buscaDoUsuario.value <= 0) {
            alert("Erro! O id inserido para a busca é inválido!")
        } else {
            const buscarProduto = estoque.find(function(item) {
                return item.id == productConsult.buscaDoUsuario.value   
            })
    
            this.saidaDaBusca.style.display = "block"
            this.saidaDaBusca.innerHTML = `
                <div class="busca-title">
                    <h2>Resultado da busca: </h2>
                    <button onclick="productConsult.FecharBusca()"><i class="far fa-times-circle"></i></button>
                </div>
                <table id="product-list" border="1px">
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Descrição</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bg-busca">${buscarProduto.produto}</td>
                            <td class="bg-busca">${buscarProduto.quantidade}</td>
                            <td class="bg-busca">${buscarProduto.descricao}</td>
                            <td class="bg-busca">${buscarProduto.id}</td>
                        </tr>
                    </tbody>
                </table>
            `
            this.buscaDoUsuario.value = ""
        }
        
    },

    // Método para fechar a janela de resultado da busca
    FecharBusca() {
        this.saidaDaBusca.style.display = "none"
    }
}

