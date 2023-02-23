const form = document.getElementById('form-agenda')
const imgDeletar = '<img src="./images/deletar.png" alt="Deletar">'
const nomes = [] //Cria um array para os nomes
const numeros = [] //Cria um array para os números

var linhas = '' //var para adicionar uma linha a mais a cada nota/atividade adicionada

form.addEventListener('submit', function(e) { //Cria um 'evento' para quando utilizarmos o form
    e.preventDefault() //Faz com que a página não atualize sozinha a cada submit

    adicionaLinha() //Função para adicionar a linha através do formulário
    atualizaTabela() //Função para atualizar a tabela adicionando as linhas novas
    atualizaMediaFinal() //Função para atualizar a média final

})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-contato')

    if (nomes.includes(inputNome.value)) {
        alert(`O contato de ${inputNome.value} já foi inserida.`)

    } else{

    nomes.push(inputNome.value)
    numeros.push(parseFloat(inputNumero.value))

    var linha = '<tr>' //Cria uma linha nova
    linha += `<td>${inputNome.value}</td>` //Adiciona o novo nome da atividade na coluna
    linha += `<td>${inputNumero.value}</td>` //Adiciona a nova nota da atividade na coluna
    linha += `<th><button class="deletar" onclick="removerElemento(event.target)"><img src="./images/deletar.png" alt=""></button></th>`
    linha += '</tr>'
    
    linhas += linha

    inputNome.value = '' //Limpa os campos do formulário após o adicionar
    inputNumero.value = '' //Limpa os campos do formulário após o adicionar
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody') //const para facilitar o a seleção da 'tbody'
    corpoTabela.innerHTML = linhas //Comando pada ADICIONAR as linhas dentro da estrutura HTML
}

function removerElemento(elementoClicado) {
    elementoClicado.closest("tr").remove();
    }

function formatarTelefone(input) {
    var numero = input.value.replace(/\D/g, '');
    numero = numero.substring(0, 11);
    if (numero.length > 0) {
        if (numero.length === 11) {
        numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 7) + '-' + numero.substring(7);
        } else if (numero.length === 10) {
        numero = '(' + numero.substring(0, 2) + ') ' + numero.substring(2, 6) + '-' + numero.substring(6);
        }
    }
    input.value = numero;
    }