const nome = document.querySelector("#nome");
const cpf = document.querySelector("#cpf");
const dataInicio = document.querySelector("#dataInicio");
const dataFinal = document.querySelector("#dataFinal");

function dataHorario() {
  const dataHoraAtual = new Date();
  const ano = dataHoraAtual.getFullYear();
  const mes = String(dataHoraAtual.getMonth() + 1).padStart(2, "0");
  const dia = String(dataHoraAtual.getDate()).padStart(2, "0");
  const horas = String(dataHoraAtual.getHours()).padStart(2, "0");
  const minutos = String(dataHoraAtual.getMinutes()).padStart(2, "0");
  const segundos = String(dataHoraAtual.getSeconds()).padStart(2, "0");
  const milisegundos = String(dataHoraAtual.getMilliseconds()).padStart(2, "0");
  const data = `${ano}-${mes}-${dia}`;
  const horario = `${horas}:${minutos}:${segundos}:${milisegundos}`;
  return {
  data: data,
  horario: horario
  };
}
const dataData = dataHorario.data;
const dataHora = dataHorario.horario;
let fim = "2024-05-12";
let inicio = "2024-05-11";
function difDias(fim, inicio) {
let fimItem = fim;
let inicioItem = inicio;
const DiffInMs = new Date(fimItem) - new Date(inicioItem);
const DiffInDays = DiffInMs / (1000 * 60 * 60 * 24);
console.log(DiffInDays);
}
difDias(fim, inicio);
console.log(difDias(fim, inicio));