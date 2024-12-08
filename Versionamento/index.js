const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const cadastrar = document.querySelector("#cadastrar");
const btnEnviar = document.querySelector("#btnEnviar");
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
nome.value = " Maurício Marques ";
cpf.value = "02175203085";
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
  return false;
 }

 // Verificar se todos os dígitos são iguais (ex.: "111.111.111-11")
 if (/^(\d)\1{10}$/.test(cpf)) {
  mostrarResultado("CPF inválido: todos os dígitos são iguais.", false);
  return false;
 }

 // Calcular os dígitos verificadores
 if (!validarDigitosVerificadores(cpf)) {
  mostrarResultado("CPF inválido: dígitos verificadores incorretos.", false);
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

function mostrarResultado(mensagem, valido) {
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
    item.style.color = "green"; // Retorna a cor para verde
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
  
 
  invalido.style = "display: block; color: green";
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
}

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


