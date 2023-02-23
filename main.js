const form = document.getElementById('form-agenda')
const imgDeletar = '<img src="./images/deletar.png" alt="Deletar">'
const nomes = [] //Cria um array para os nomes
const numeros = [] //Cria um array para os números
var linhas = '' //var para adicionar uma linha a mais a cada nota/atividade adicionada

form.addEventListener('submit', function(e) { //Cria um 'evento' para quando utilizarmos o form
    e.preventDefault() //Faz com que a página não atualize sozinha a cada submit

    adicionaLinha() //Função para adicionar a linha através do formulário
    atualizaTabela() //Função para atualizar a tabela adicionando as linhas novas
})



function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato')
    const inputNumero = document.getElementById('numero-contato')

    if (nomes.includes(inputNome.value)) {
        alert(`O contato de ${inputNome.value} já foi inserida.`)

    } else{

    nomes.push(inputNome.value)
    numeros.push(inputNumero.value)

    var linha = `<tr id='${inputNome.value}'><td>${inputNome.value}</td><td>${inputNumero.value}</td><td><button class="deletar" onclick="removerElemento(event.target)"><img src="./images/deletar.png" alt=""></button></td></tr>`
    
    linhas += linha

    inputNome.value = '' //Limpa os campos do formulário após o adicionar
    inputNumero.value = '' //Limpa os campos do formulário após o adicionar

    console.log(linhas)
    console.log(linha)
    console.log(nomes)
    console.log(numeros)

    }
}



function atualizaTabela() {
    const corpoTabela = document.getElementById('tabela-corpo') //const para facilitar o a seleção da 'tbody'
    corpoTabela.insertAdjacentHTML("beforeend", linhas) //Comando pada ADICIONAR as linhas dentro da estrutura HTML
    linhas = ""
}


function removerElemento(elementoClicado) {

    elementoClicado.closest("tr").remove();
    
    // Encontre o nome que deseja remover
    var nome = elementoClicado.closest("tr").querySelector("td:nth-child(1)").textContent;
    var num = elementoClicado.closest("tr").querySelector("td:nth-child(2)").textContent;

    // Encontre o índice do nome na array
    var indice_nome = nomes.indexOf(nome);
    var indice_num = numeros.indexOf(num);


    // Remova o nome da array
    nomes.splice(indice_nome, 1);
    numeros.splice(indice_num, 1);

    console.log(linhas)
    console.log(nomes)
    console.log(numeros)

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