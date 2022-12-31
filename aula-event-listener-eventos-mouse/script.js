let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

function atulizarSubtotal(){
quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
valorSubtotal.innerText = subtotalInfo.valor.toFixed(2);
}

atualizarSubtotal()

//Capturar elementos do dom

let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let quantidadeProduto01 = document.getElementById("quantidade-produto-01");
let valorProduto = 11.66

//Declarar funções

function adicionarUm(){
  quantidadeProduto01.value = Number(quantidadeProduto01.value) + 1;
  subtotalInfo.quantidade += 1;
  subtotalInfo.valor = subtotalInfo.valor = valorProduto;

  atualizarSubtotal();
}

//Definir eventos

btnAdicionarProduto01.addEventListener("click", adicionarUm);