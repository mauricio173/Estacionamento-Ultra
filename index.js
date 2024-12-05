const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const hoje = new Date();
const dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth()+1) + "-" + (hoje.getDate() < 10 ? "0" + hoje.getDate() : hoje.getDate());
const dataFutura = hoje.getFullYear() + "-" + (hoje.getMonth()+7) + "-" + (hoje.getDate() < 10 ? "0" + hoje.getDate() : hoje.getDate());

// Criar uma nova data baseada na atual
const dataFuturas = new Date(hoje);
dataFuturas.setMonth(dataFuturas.getMonth() + 6);

// Formatar as datas no formato "YYYY-MM-DD"
const formatarData = (data) => {
  const ano = data.getFullYear();
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Adiciona 1 ao mês porque o índice começa em 0
  const dia = String(data.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
};

console.log("Data Atual: ", formatarData(hoje));
console.log("Data Futura (6 meses à frente): ", formatarData(dataFuturas));

dataInicio.value = dataAtual;
dataFinal.value = dataFutura;

console.log(dataAtual);
console.log(dataFutura);