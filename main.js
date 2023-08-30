//declarando variaveis
const form = document.getElementById('form-cadastro');
let contatos = [];
let numero = [];

let linhas = '';

//alterando o padrão do botão
form.addEventListener('submit', function(e) {
	e.preventDefault();

	adicionaLinha();
	atualizaagenda();
	atualizacontatos();
})

//toda vez que cadastrar um contato a função vai adicionar uma linha na tabela 
function adicionaLinha() {
	//chamando variaveis HTML atraves do id
	let inputNome = document.getElementById('nome');
	let inputTelefone = document.getElementById('telefone');
	// condição SE contato for repetido mostrar um msg senão pode cadastrar novo contato 
	if(contatos.includes(inputNome.value)) {
		alert(`O contato: ${inputNome.value} já foi cadastrado`); 
	} else { 
		contatos.push(inputNome.value);
		numero.push(parseInt(inputTelefone.value));

		let linha = '<tr>';
			linha += `<td>${inputNome.value}</td>`;
			linha += `<td>${inputTelefone.value}</td>`;
			linha += `</tr>`

		linhas += linha;
	}
	//limpar inputs apor o cadastro
	inputNome.value = '';
	inputTelefone.value = '';
}
//atualização da lista de agenda 
function atualizaagenda() {
	const corpoAgenda = document.querySelector('tbody');
	corpoAgenda.innerHTML = linhas;
}

function atualizacontatos() {
	let totalcont = calculatotal();

	document.getElementById('total-contatos').innerHTML = totalcont;
}

function calculatotal() {
	let somacontato = 0;
	
	for (let i = 0; i < linha.length; i++) {
		somacontato += linha[i];
	}
	
	return somacontato + linha.length;

}