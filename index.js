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
cpf.value = "12345678900";
btnEnviar.addEventListener("click", event => {
 event.preventDefault();
 const cadastro = document.querySelector("#cadastro");
 const cadastros = document.querySelector("#cadastros");
 const texto = cpf.value + ";" + nome.value.toUpperCase().trim() + ";" + dataInicio.value + ";" + dataFinal.value + ";1;" + cpf.value;
 cadastros.innerHTML = `
  ${texto
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim()}
  `;
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

function mostrarResultado(mensagem, valido) {
 const cadastros = document.querySelector("#cadastros");
 const texto = cpf.value + ";" + nome.value.toUpperCase().trim() + ";" + dataInicio.value + ";" + dataFinal.value + ";1;" + cpf.value;
 cadastros.innerHTML = `
  ${mensagem} <br>
  ${texto
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .trim()}
  `;
 /*const resultado = document.getElementById("resultado");*/
 const resultado = document.getElementById("cadastros");
 /*resultado.textContent = mensagem;
      resultado.textContent = mensagem + texto;
      */
 resultado.style.color = valido ? "green" : "red";
}

console.log("Data Atual: ", formatarData(hoje));
console.log("Data Futura (6 meses à frente): ", formatarData(dataFutura));
