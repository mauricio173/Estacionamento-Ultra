const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");
const hoje = new Date();
const dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth()+1) + "-" + (hoje.getDate() < 10 ? "0" + hoje.getDate() : hoje.getDate());
dataInicio.value = dataAtual;

console.log(dataAtual);