const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const cadastrar = document.querySelector("#cadastrar");
const btnEnviar = document.querySelector("#btnEnviar");
const hoje = new Date();
const dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth()+1) + "-" + (hoje.getDate() < 10 ? "0" + hoje.getDate() : hoje.getDate());

// Criar uma nova data baseada na atual
const dataFutura = new Date(hoje);
dataFutura.setMonth(dataFutura.getMonth() + 6);

// Formatar as datas no formato "YYYY-MM-DD"
const formatarData = (data) => {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Adiciona 1 ao mês porque o índice começa em 0
  const dia = String(data.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
};

dataInicio.value = dataAtual;
dataFinal.value = formatarData(dataFutura);
nome.value = " Maurício Marques ";
cpf.value = "12345678900";
btnEnviar.addEventListener("click",  (event) => {
  event.preventDefault();
  const cadastro = document.querySelector("#cadastro");
  const cadastros = document.querySelector("#cadastros");
  const texto = cpf.value + ";" + nome.value.toUpperCase().trim() + ";" + dataInicio.value + ";" + dataFinal.value + ";1;" + cpf.value;
  cadastros.innerHTML = `
  ${texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()}
  `;
  // cadastro.innerHTML = `
  // ${cpf.value};
  // ${nome.value.toUpperCase()};${dataInicio.value};${dataFinal.value};1;${cpf.value}
  // `;
});

console.log("Data Atual: ", formatarData(hoje));
console.log("Data Futura (6 meses à frente): ", formatarData(dataFutura));

