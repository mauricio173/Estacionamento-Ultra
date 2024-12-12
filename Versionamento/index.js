const btnSec = document.querySelector("#btnSec");
  document.addEventListener("DOMContentLoaded", () => {
    //btnSec.click();
  });
  
const boxSenha = document.querySelector("#offcanvasExample");
const inputSec = document.querySelector("#inputSec");
const btnOkSenha = document.querySelector("#btnOkSenha");
const btnClose = document.querySelector(".btn-close");

btnOkSenha.addEventListener("click",  () => {
  if (inputSec.value == "ultra10") {
    
    btnClose.click();
  }
});

const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const cadastrar = document.querySelector("#cadastrar");
const btnEnviar = document.querySelector("#btnEnviar");
const invalido = document.querySelector("#invalido");
const hoje = new Date();
const dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + (hoje.getDate() < 10 ? "0" + hoje.getDate() : hoje.getDate());

// Criar uma nova data baseada na atual
const dataFutura = new Date(hoje);
dataFutura.setMonth(dataFutura.getMonth() + 6);

// Formatar as datas no formato "YYYY-MM-DD"
const formatarData = data => {
 const ano = data.getFullYear();
 const mes = String(data.getMonth() + 1).padStart(2, "0"); // Adiciona 1 ao mês porque o índice começa em 0
 const dia = String(data.getDate()).padStart(2, "0");
 return `${ano}-${mes}-${dia}`;
};

dataInicio.value = dataAtual;
dataFinal.value = formatarData(dataFutura);
// nome.value = " Maurício Marques ";
// cpf.value = "02175203085";
btnEnviar.addEventListener("click", event => {
 event.preventDefault();
 validarCPF();
});

function validarCPF() {
 const cpfInput = document.getElementById("cpf").value;

 // Remover formatação (pontos e traços)
 const cpf = cpfInput.replace(/\D/g, "");

 // Verificar se tem 11 dígitos
 if (cpf.length !== 11) {
  mostrarResultado("CPF inválido: deve conter 11 dígitos.", false);
   invalido.style = "display: block; color: black";

   invalido.innerHTML = `
   CPF inválido: deve conter 11 dígitos.
   `;
   
  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 4000);
  return false;
 }

 // Verificar se todos os dígitos são iguais (ex.: "111.111.111-11")
 if (/^(\d)\1{10}$/.test(cpf)) {
  mostrarResultado("CPF inválido: todos os dígitos são iguais.", false);
   invalido.style = "display: block; color: black";

   invalido.innerHTML = `
   CPF inválido: todos os dígitos são iguais.
   `;
   
  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 4000);
  return false;
 }

 // Calcular os dígitos verificadores
 if (!validarDigitosVerificadores(cpf)) {
  mostrarResultado("CPF inválido: dígitos verificadores incorretos.", false);
  invalido.style = "display: block; color: black";

   invalido.innerHTML = `
   CPF inválido: dígitos verificadores incorretos.
   `;
   
  setTimeout(function () {
   invalido.style = "display: none";
   cpf.value = "";
  }, 4000);
  return false;
 }

 mostrarResultado("CPF válido!", true);
 return false; // Evita recarregar a página
}

function validarDigitosVerificadores(cpf) {
 // Função para calcular o dígito verificador
 const calcularDigito = base => {
  let soma = 0;
  for (let i = 0; i < base.length; i++) {
   soma += parseInt(base[i]) * (base.length + 1 - i);
  }
  const resto = (soma * 10) % 11;
  return resto === 10 ? 0 : resto;
 };

 // Validar primeiro dígito
 const primeiroDigito = calcularDigito(cpf.slice(0, 9));
 if (primeiroDigito !== parseInt(cpf[9])) return false;

 // Validar segundo dígito
 const segundoDigito = calcularDigito(cpf.slice(0, 10));
 if (segundoDigito !== parseInt(cpf[10])) return false;

 return true;
}

const texArea = document.querySelector("#texArea");
nome.value = "Maurício Marques";
function mostrarResultado(mensagem, valido) {
 const cadastros = document.querySelector("#cadastros");
 
 const cpfValue = cpf.value.replace(/\D/g, "");
 const nomeValue = nome.value.toUpperCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "").trim();
 const dataInicioValue = dataInicio.value;
 const dataFinalValue = dataFinal.value;
 
 let registro = {
   cpf: cpfValue,
   nome: nomeValue.normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim(),
   inicio: dataInicioValue,
   fim: dataFinalValue
 };
 
 let cad = `${registro.cpf};${registro.nome};${registro.inicio};${registro.fim};1;${registro.cpf}`;

// console.log(registro);
// console.log(cad);

 const texto = `${cpfValue};${nomeValue};${dataInicioValue};${dataFinalValue};1;${cpfValue}`;
 
 if (nomeValue.trim() == "" || nomeValue.startsWith(" ")) {
   invalido.style = "display: block; color: black";

   invalido.innerHTML = `
   Nome Vazio!
   `;
   
   nome.value = "";
  setTimeout(function () {
   invalido.style = "display: none";
  }, 4000);
   return;
 }

 // Verifica se o CPF ou o nome já existem na lista
 const itens = cadastros.querySelectorAll("p");
 let itemJaInserido = false;
 

 itens.forEach(item => {
  const itemTexto = item.textContent
   .toUpperCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, ""); // Remove acentos e converte para maiúsculas
// console.log(itemTexto);
 
 const startIndex = 12; // Índice inicial para percorrer
const substring = itemTexto.slice(startIndex); // Pega a substring a partir do índice 12
const endIndex = substring.indexOf(";"); // Encontra a posição do próximo ";"

// Captura o texto até o próximo ";"
const resultado = endIndex !== -1 ? substring.slice(0, endIndex) : substring;

if (nomeValue == resultado) {

valido = false;
console.log("nomeValue == resultado: ", resultado);
return;
}
else if (nomeValue !== resultado) {
  valido = true;
console.log("!nomeValue == resultado: ", resultado);
} 
  // const nomes = nomeValue.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
// console.log(nomeValue + " : " + nomes);


  if (itemTexto.includes(cpfValue) || itemTexto.includes(nomes)) {
   console.log();
   itemJaInserido = true;
   item.style.color = "#28abab"; // Muda a cor para preto temporariamente
   if (itemTexto.includes(cpfValue)) {
    invalido.style = "display: block; color: black";
    invalido.innerHTML = "CPF já inserido.";
   }
   
   if (itemTexto.includes(nomes)) {
    invalido.style = "display: block; color: black";
    invalido.innerHTML = "Nome já inserido.";
   }
   setTimeout(function () {
    invalido.style = "display: none; color: black";
    item.style.color = "#A44378"; // Retorna a cor para verde
   }, 4000);
  }
 });

 if (itemJaInserido) {


  setTimeout(function () {
   invalido.style = "display: none";
  }, 4000);
  cpf.value = ""; // Limpa o campo CPF
  nome.value = ""; // Limpa o campo nome
  return;
 }

 // Adiciona um novo CPF válido na lista
 if (valido && nome.value.trim() !== "") {
   const nomeCad = nome.value
   .toUpperCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "");
  const el = document.createElement("p");
  el.innerHTML = texto
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim();
  el.style.color = "#A44378"; // roxo CPF válido
  
  invalido.style = "visibility: visible; font-size: 10px; color: #28abab"; // verde
  invalido.innerHTML = "CPF e nome cadastrados com sucesso!";
  setTimeout(function () {
   invalido.style = "visibility: hidden;";
  }, 3500);

  cadastros.appendChild(el);

  nome.value = "Maurício Marques"; // Limpa o campo nome
  cpf.value = ""; // Limpa o campo CPF
 }

 // Exibe mensagem de CPF inválido
 if (!valido) {
  const invalido = document.querySelector("#invalido");
  invalido.style = "visibility: visible; font-size: 10px; color: red";
  invalido.innerHTML = "CPF inválido";
  setTimeout(function () {
   invalido.style = "visibility: hidden";
  }, 4000);
 }
}

/*function mostrarResultado(mensagem, valido) {
 const cadastros = document.querySelector("#cadastros");
 const cpfValue = cpf.value.replace(/\D/g, "");
 const nomeValue = nome.value.toUpperCase().trim();
 const dataInicioValue = dataInicio.value;
 const dataFinalValue = dataFinal.value;

 const texto = `${cpfValue};${nomeValue};${dataInicioValue};${dataFinalValue};1;${cpfValue}`;

 // Verifica se o CPF já existe na lista
 const itens = cadastros.querySelectorAll("p");
 let cpfJaInserido = false;
 itens.forEach(item => {
  if (item.textContent.startsWith(cpfValue)) {
   cpfJaInserido = true;
   item.style.color = "black"; // Muda a cor para preto temporariamente

   setTimeout(function () {
    item.style.color = "#28abab"; // Retorna a cor para verde
   }, 4000);
  }
 });

 if (cpfJaInserido) {
  const invalido = document.querySelector("#invalido");
  invalido.style = "display: block; color: black";
  invalido.innerHTML = "CPF já inserido e marcado.";
  setTimeout(function () {
   invalido.style = "display: none";
  }, 4000);
  cpf.value = ""; // Limpa o campo CPF
  return;
 }

 // Adiciona um novo CPF válido na lista
 console.log(nome.value.startsWith(" "));
 if (valido && nome.value.trim() !== "") {
  const invalido = document.querySelector("#invalido");
  invalido.style = "display: none";
  const el = document.createElement("p");
  el.innerHTML = texto
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim();
  el.style.color = " #A44378"; // CPF válido em verde
  
 
  invalido.style = "display: block; color: #28abab";
  invalido.innerHTML = "CPF cadastrado com sucesso";
  setTimeout(function () {
   invalido.style = "display: none";
  }, 4000);
  
  cadastros.appendChild(el);

  nome.value = ""; // Limpa o campo nome
  cpf.value = ""; // Limpa o campo CPF
 }

 // Exibe mensagem de CPF inválido
 if (!valido) {
  const invalido = document.querySelector("#invalido");
  invalido.style = "display: block; color: red";
  invalido.innerHTML = "CPF inválido";
  setTimeout(function () {
   invalido.style = "display: none";
  }, 4000);
 }
}*/

// Adiciona evento de clique no container cadastros
document.querySelector("#cadastros").addEventListener("click", event => {
 // Verifica se o elemento clicado é um <p>
 if (event.target.tagName === "P") {
  // Copia o texto de todos os <p> do container
  const todosElementos = Array.from(document.querySelectorAll("#cadastros p"));
  const textoCompleto = todosElementos.map(el => el.innerText).join("\n");

  todosElementos.forEach((item, index) => {
   console.log(item.innerText);
  });

  navigator.clipboard
   .writeText(textoCompleto)
   .then(() => {
    invalido.style = "visibility: visible; font-size: 10px; color: #28abab";
    invalido.innerHTML = "CPF cadastrado com sucesso";
    setTimeout(function () {
     invalido.style = "visibility: hidden";
    }, 4000);
    /* 
       console.log("Texto copiado para a área de transferência:\n" + textoCompleto);
       */
    /*    todosElementos.forEach((item, index) => {
     const p = document.createElement("p");
     p.innerText = item.textContent;
     texArea.appendChild(p);
     console.log(texArea);
    });*/
   })
   .catch(err => {
    console.error("Erro ao copiar texto: ", err);
   });
 }
});

