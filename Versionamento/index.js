const btnSec = document.querySelector("#btnSec");
document.addEventListener("DOMContentLoaded", () => {
 //btnSec.click();
});

const boxSenha = document.querySelector("#offcanvasExample");

const btnOkSenha = document.querySelector("#btnOkSenha");
const btnClose = document.querySelector(".btn-close");

 const dropPassword = document.querySelector(".dropPassword");
// const dropPasswordH6 = document.querySelectorAll(".dropPassword h6");
 const dropPasswordH6 = dropPassword.querySelectorAll("h6");

 const childs = (e) => {
   console.log(dropPassword.children.length + " :dropPassword.children.length");
  
  // dropPasswordH6.forEach((item, index) => {
    
  // console.log(item);
  // });
  
   
  // if (dropPassword.children.length > 1) {
  // while (dropPassword.firstChild) {
  // dropPassword.removeChild(dropPassword.firstChild);
  //   }
  // } 
 };
 childs();

btnOkSenha.addEventListener("click", () => {
  
  const inputSec = document.querySelector("#inputSec").value;
  const dropPassword = document.querySelector(".dropPassword");
 const h6 = document.createElement("h6");
 
  // const dropPasswordH6 = document.querySelectorAll(".dropPassword h6");
  const dropPasswordH6 = dropPassword.querySelectorAll("h6");

 //console.log(inputSec);
 if (inputSec == "ultra10") {
   dropPassword.prependChild(h6);
   h6.innerHTML = "Senha correta!";
   setTimeout(function() {
    btnClose.click();
   h6.innerText = "";
     
   }, 5000);
 } else {
   dropPassword.appendChild(h6);
   h6.innerHTML = "Senha incorreta!";
   
   setTimeout(function() {
   //h6.innerText = "";
     return;
   }, 5000);
   
   
 }
    childs();
});

const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const cadastrar = document.querySelector("#cadastrar");
const btnEnviar = document.querySelector("#btnEnviar");
const btnClear = document.querySelector("#btnClear");
const invalido = document.querySelector("#invalido");
const lista = document.querySelector(".lista");
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
// verificar();
});
btnClear.addEventListener("click", event => {
 event.preventDefault();
 const cadastros = document.querySelector("#cadastros");
 const lista = document.querySelector(".lista");
 cadastros.innerHTML = `
 
 `;
 lista.innerHTML = `
 
 `;
// verificar();
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
  }, 5000);
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
  }, 5000);
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
  }, 5000);
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

function verificar() {
  const cadastro = document.querySelector("#cadastros");
  const cadastrado = cadastro.querySelectorAll("p");
  //const cadastrado = document.querySelectorAll("#cadastros p");
  
  const cpfValues = cpf.value.replace(/\D/g, "");
 const nomeValues = nome.value
  .toUpperCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .trim();
 const dataInicioValues = dataInicio.value;
 const dataFinalValues = dataFinal.value;

 let registros = {
  cpf: cpfValues,
  nome: nomeValues
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim(),
  inicio: dataInicioValues,
  fim: dataFinalValues
 };

 let cad = `${registros.cpf};${registros.nome};${registros.inicio};${registros.fim};1;${registros.cpf}`;
 
 console.log(cadastrado);
}

 nome.value = "Maurício Marques"; // Limpa o campo nome
  cpf.value = "02175203085"; // Limpa o campo CPF



/*function mostrarResultado(mensagem, valido) {
  const cadastros = document.querySelector("#cadastros");
  const invalido = document.querySelector("#invalido");

  // Normaliza os valores de entrada
  const cpfValue = cpf.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const nomeValue = nome.value
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim(); // Remove acentos e espaços

  const dataInicioValue = dataInicio.value;
  const dataFinalValue = dataFinal.value;

  if (nomeValue === "" || nomeValue.startsWith(" ")) {
    // Verifica se o nome está vazio ou começa com espaço
    invalido.style = "display: block; color: black";
    invalido.innerHTML = "Nome inválido!";
    nome.value = ""; // Limpa o campo nome
    setTimeout(() => (invalido.style = "display: none"), 5000);
    return;
  }

  const texto = `${cpfValue};${nomeValue};${dataInicioValue};${dataFinalValue};1;${cpfValue}`;
  const itens = cadastros.querySelectorAll("p");

  // Verifica se o CPF ou nome já estão na lista
  let itemDuplicado = null; // Armazena o item duplicado, se encontrado

  itens.forEach((item) => {
    const itemTexto = item.textContent
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Normaliza texto existente na lista

    // Extrai o nome e CPF de cada item da lista
    const [cpfItem, nomeItem] = itemTexto.split(";");

    // Verifica duplicidade por CPF ou Nome
    if (cpfItem === cpfValue || nomeItem === nomeValue) {
      itemDuplicado = item; // Armazena o elemento duplicado
    }
  });

  if (itemDuplicado) {
    // Indica duplicidade
    console.log(`Item duplicado encontrado: ${itemDuplicado.textContent}`);
    itemDuplicado.style.color = "#28abab"; // Muda a cor temporariamente
    invalido.style = "display: block; color: black";
    invalido.innerHTML = cpfValue === itemDuplicado.textContent.split(";")[0] 
      ? "CPF já inserido!" 
      : "Nome já inserido!";
    setTimeout(() => {
      itemDuplicado.style.color = "#A44378"; // Retorna à cor padrão
      invalido.style = "display: none";
    }, 5000);

    // Interrompe a execução se já existe duplicidade
    cpf.value = ""; // Limpa o campo CPF
    nome.value = ""; // Limpa o campo nome
    nome.value = "Maurício Marques";
    cpf.value = "02175203085";
    return;
  }

  // Adiciona um novo registro se válido
  if (valido && nome.value.trim() !== "") {
    const el = document.createElement("p");
    el.innerHTML = texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    el.style.color = "#A44378"; // Adiciona cor padrão

    cadastros.appendChild(el);

    // Mensagem de sucesso
    invalido.style = "display: block; color: #28abab";
    invalido.innerHTML = "CPF e nome cadastrados com sucesso!";
    setTimeout(() => (invalido.style = "display: none"), 5000);

    // Limpa os campos após cadastro
    nome.value = "Maurício Marques";
    cpf.value = "02175203085";
  } else if (!valido) {
    // Exibe mensagem de CPF inválido
    invalido.style = "display: block; color: red";
    invalido.innerHTML = "CPF inválido!";
    setTimeout(() => (invalido.style = "display: none"), 5000);
  }
}*/

function mostrarResultado(mensagem, valido) {
  const cadastros = document.querySelector("#cadastros");
  const invalido = document.querySelector("#invalido");

  // Normaliza os valores de entrada
  const cpfValue = cpf.value.replace(/\D/g, ""); // Remove caracteres não numéricos
  const nomeValue = nome.value
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim(); // Remove acentos e espaços

  const dataInicioValue = dataInicio.value;
  const dataFinalValue = dataFinal.value;

  if (nomeValue === "" || nomeValue.startsWith(" ")) {
    // Verifica se o nome está vazio ou começa com espaço
    invalido.style = "display: block; color: black";
    invalido.innerHTML = "Nome inválido!";
    nome.value = ""; // Limpa o campo nome
    setTimeout(() => (invalido.style = "display: none"), 5000);
    return;
  }

  const texto = `${cpfValue};${nomeValue};${dataInicioValue};${dataFinalValue};1;${cpfValue}`;
  const itens = cadastros.querySelectorAll("p");

  // Verifica se o CPF ou nome já estão na lista
  let itemDuplicado = null; // Armazena o item duplicado, se encontrado
  let ambosDuplicados = false; // Flag para CPF e Nome duplicados

  itens.forEach((item) => {
    const itemTexto = item.textContent
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // Normaliza texto existente na lista

    // Extrai o nome e CPF de cada item da lista
    const [cpfItem, nomeItem] = itemTexto.split(";");

    // Verifica duplicidade por CPF e Nome
    if (cpfItem === cpfValue && nomeItem === nomeValue) {
      itemDuplicado = item;
      ambosDuplicados = true; // Ambos CPF e Nome estão duplicados
    } else if (cpfItem === cpfValue || nomeItem === nomeValue) {
      itemDuplicado = item;
    }
  });

  if (itemDuplicado) {
    // Indica duplicidade
    console.log(`Item duplicado encontrado: ${itemDuplicado.textContent}`);
    itemDuplicado.style.color = "#28abab"; // Muda a cor temporariamente

    // Exibe a mensagem correta
    if (ambosDuplicados) {
      invalido.style = "display: block; color: black";
      invalido.innerHTML = "CPF e Nome já inseridos!";
    } else if (cpfValue === itemDuplicado.textContent.split(";")[0]) {
      invalido.style = "display: block; color: black";
      invalido.innerHTML = "CPF já inserido!";
    } else {
      invalido.style = "display: block; color: black";
      invalido.innerHTML = "Nome já inserido!";
    }

    setTimeout(() => {
      itemDuplicado.style.color = "#A44378"; // Retorna à cor padrão
      invalido.style = "display: none";
    }, 5000);

    // Interrompe a execução se já existe duplicidade
    cpf.value = ""; // Limpa o campo CPF
    nome.value = ""; // Limpa o campo nome
    nome.value = "Maurício Marques";
    cpf.value = "02175203085";
    return;
  }

  // Adiciona um novo registro se válido
  if (valido && nome.value.trim() !== "") {
    const el = document.createElement("p");
    el.innerHTML = texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
    el.style.color = "#A44378"; // Adiciona cor padrão

    cadastros.appendChild(el);

    // Mensagem de sucesso
    invalido.style = "display: block; color: #28abab";
    invalido.innerHTML = "CPF e nome cadastrados com sucesso!";
    setTimeout(() => (invalido.style = "display: none"), 5000);

    // Limpa os campos após cadastro
    nome.value = "Maurício Marques";
    cpf.value = "02175203085";
  } else if (!valido) {
    // Exibe mensagem de CPF inválido
    invalido.style = "display: block; color: red";
    invalido.innerHTML = "CPF inválido!";
    setTimeout(() => (invalido.style = "display: none"), 5000);
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
   }, 5000);
  }
 });

 if (cpfJaInserido) {
  const invalido = document.querySelector("#invalido");
  invalido.style = "display: block; color: black";
  invalido.innerHTML = "CPF já inserido e marcado.";
  setTimeout(function () {
   invalido.style = "display: none";
  }, 5000);
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
  }, 5000);
  
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
  }, 5000);
 }
}*/

// Adiciona evento de clique no container cadastros
document.querySelector("#cadastros").addEventListener("click", event => {
 // Verifica se o elemento clicado é um <p>
 if (event.target.tagName === "P") {
  // Copia o texto de todos os <p> do container
  const todosElementos = Array.from(document.querySelectorAll("#cadastros p"));
  const textoCompleto = todosElementos.map(el => el.innerText).join("\n");
lista.innerHTML = `

`;
  todosElementos.forEach((item, index) => {
    let p = document.createElement("p");
    p.textContent = item.innerText;
    // lista.appendChild(p);
    
   console.log(item.innerText);
  });

  navigator.clipboard
   .writeText(textoCompleto)
   .then(() => {
    invalido.style = "visibility: visible; font-size: 10px; color: #28abab";
    invalido.innerHTML = "Itens copiados com sucesso!";
    // lista.innerHTML = `
//     ${textoCompleto}
//     `;
    setTimeout(function () {
     invalido.style = "visibility: hidden";
    }, 5000);
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
