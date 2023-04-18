const btAdicionar = document.querySelector('#bt-adicionar')
const btExcluir = document.querySelector('#bt-excluir')
const textAreaAdd = document.querySelector('#textarea-add')
const textAreaEdit = document.querySelector('#textarea-edit')

const itens = JSON.parse(localStorage.getItem("itemList")) || []

console.log(itens)

itens.forEach((elemento) => {
    adicionarElemento(elemento.nota)
})

btAdicionar.addEventListener('click', (evento) => {
    evento.preventDefault()

    if(textAreaAdd.value !== "") {

        const novoItem = {
            "nota": textAreaAdd.value
        }

        adicionarElemento(novoItem)

        itens.push(novoItem)

        localStorage.setItem("itemList", JSON.stringify(itens))
    
        textAreaAdd.value = ""
    }
})
/*
btExcluir.addEventListener('click', function() {
    console.log("Botão excluir pressionado")
    console.log(textAreaEdit.value)
}) */

function adicionarElemento(item) {
    const itemLista = document.createElement('li')
    itemLista.classList.add('item-lista')

    itemLista.innerHTML = `
        <textarea name="" id="textarea-edit" class="textarea">${item}</textarea>
        <div class="button-grid">
            <button class="button-style" id="bt-excluir">
                <abbr title="Salvar nota">
                    <i class="fa-solid fa-trash-can"></i>
                </abbr>
            </button>
        </div>`

    const ulItens = document.querySelector('#ul-itens')
    ulItens.appendChild(itemLista)
}