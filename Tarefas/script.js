// Variáveis
const menu_mobile_ul = document.querySelectorAll("#menu_mobile_ul li");
menu_mobile_ul.forEach((item, index) => {
  item.addEventListener("click", (event)=> {
    const btn_close_menu = document.querySelector("#btn_close_menu");
    btn_close_menu.click();
    
  });
  
});
// LocalStorage
const TasksGet = JSON.parse(localStorage.getItem("Tasks"));
let Tasks = TasksGet !== null ? TasksGet : [];

const CategoriaTaskGet = JSON.parse(localStorage.getItem("CategoriaTask"));
let CategoriaTask = CategoriaTaskGet !== null ? CategoriaTaskGet : [];

const diaSemana = new Array ("Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado");
 const mesAno = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

// Funções
function setarData() {
 let elementoData = document.querySelector(".js-data");
 let elemento_Data = document.querySelector(".js_data");
 let elemento_Datas = document.querySelector(".js_datas");
 let elementoDatas = document.querySelector(".js-datas");
 // const diaSemana = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado");
//  const mesAno = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");


 let data = new Date();

 const objData = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "numeric"
 };

 const objDatas = {
  year: "numeric",
  month: "numeric",
  day: "numeric"
 };

 elementoData.textContent = data.toLocaleTimeString("pt-BR", objData);
 //elemento_Data.textContent = data.toLocaleTimeString("pt-BR", objData);
 elemento_Data.textContent = `
 ${diaSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}
 `;
 elemento_Datas.textContent = `
 ${diaSemana[data.getDay()]}, ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}
 `;
// ${data.getMilliseconds() < 10 ? "0" + data.getMilliseconds() : "" + data.getMilliseconds()}
// elementoDatas.textContent = data.toLocaleTimeString("pt-BR", objDatas);
// elementoDatas.textContent = `
// ${diaSemana[data.getDay()]}, 
// ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())}/${(data.getMonth()+1) < 10 ? "0" + (data.getMonth()+1) : "" + (data.getMonth()+1)}/${data.getFullYear()} - ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()} # ${mesAno[data.getMonth()]}`;
 elementoDatas.textContent = `
 ${diaSemana[data.getDay()]}, 
 ${data.getDate() < 10 ? "0" + (data.getDate()) : "" + (data.getDate())} de ${mesAno[data.getMonth()]} de ${data.getFullYear()} às ${data.getHours() < 10 ? "0" + data.getHours() : "" + data.getHours()}:${data.getMinutes() < 10 ? "0" + data.getMinutes() : "" + data.getMinutes()}:${data.getSeconds() < 10 ? "0" + data.getSeconds() : "" + data.getSeconds()}`;
}
setarData();
setInterval(() => {
 setarData();
}, 1000);

function functionName(index) {
 /*
 index = 0;
 console.log(!Tasks[index].estado);
 const tbody_tarefas = document.querySelector("#tbody_tarefas");
console.log(tbody_tarefas.children.length);

  let fim = "2024-04-02";
	let inicio = "2024-04-01";
	const diffEmMs = new Date(fim) - new Date(inicio);
	const diffEmDays = diffEmMs / (1000 * 60 * 60 * 24);
	 return diffEmDays;
*/
 const categorias = document.querySelector(".categorias");
console.log(categorias);
 if (categorias.children.length >= 0) {
  categorias.innerHTML = `
  <div class="table-responsive"
    style="margin: 2rem 0 0;"
    >
    <table class="table table-md   align-middle text-center">
      <thead class="table-dark">
        <tr>
        <th>Nome</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Editar</th>
        <th>Apagar</th>
          
        </tr>
      </thead>
      <tbody id="tbody_categorias">
        
        
        
      </tbody>
    </table>
      
    </div>
  `;
  // original
  verCategoria();
  /*
  const categoriasTable = document.querySelector(".categorias div table tbody");
  
  console.log(categoriasTable.children.length);
    verCategoria();
  */
 } else {
  // Remover elementos filhos se existirem
  while (categorias.firstChild) {
   categorias.removeChild(categorias.firstChild);
  }
 }
}
//functionName();
document.querySelector("#btnTestes").addEventListener("click", functionName);

function novo() {
 let tbody_tarefass = document.querySelector("#tbody_tarefas_teste");

 tbody_tarefass.innerHTML = "";
 Tasks.forEach((item, index) => {
  let trs = document.createElement("tr");
  let tds = document.createElement("td");

  trs.innerHTML = `
   <td>${item.nome}</td>
   <td>${item.inicio}</td>
   <td>${item.fim}</td>
   <td>${item.estado}</td>
   <td>${item.status}</td>
   <td>${item.tempo}</td>
   <td>${item.categoria}</td>
   `;
  //trs.appendChild(tds);
  tbody_tarefass.appendChild(trs);
 });
}
// novo();

function datas() {
 let dataInicioValue = document.querySelector("#input_data_inicio");
 let dataFimValue = document.querySelector("#input_data_fim");

 dataInicioValue.value = obterDataReg();
 dataFimValue.value = obterDataReg();
 dataInicioValue.classList.add("is-valid");
 dataFimValue.classList.add("is-valid");
}
datas();

function difDatas(fim, inicio) {
 const input_data_inicio = document.querySelector("#input_data_inicio").value;
 const input_data_fim = document.querySelector("#input_data_fim").value;
 fim = input_data_fim;
 inicio = input_data_inicio;
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

 return diffInDays;
}
function difData(fim, inicio) {
 const input_data_inicio = document.querySelector("#input_data_inicioo").value;
 const input_data_fim = document.querySelector("#input_data_fimm").value;
 fim = input_data_fim;
 inicio = input_data_inicio;
 const diffInMs = new Date(fim) - new Date(inicio);
 const diffInDaysss = diffInMs / (1000 * 60 * 60 * 24);

 return diffInDaysss;
}

function editarCategoria(index) {
 event.preventDefault();
 const input_categoriaEdt = document.querySelector("#input_categoriaEdt").value.trim();

 const categoria = CategoriaTask[index];
 const tarefa = Tasks[index];

 const modalBodyCategoria = document.querySelector("#modal-body-edt-categoria");
 modalBodyCategoria.innerHTML = "";
 CategoriaTask.forEach((item, i) => {
  modalBodyCategoria.innerHTML = `
              <form class="row g-3 needs-validation" novalidate>
      <h1 id="">
        Editar Categoria ${categoria}
      </h1>
    
     <!--Nome da Categoria-->
     <div class="col-md-4 div_categorias">
      <label for="input_categoriaEdt" class="form-label"> Nome da Categoria: </label>
      <input
       type="text"
       class="form-control"
       list="datalistCategorias"
       id="input_categoriaEdt"
       value="${categoria}"
       required
      />
      <datalist id="datalistCategorias">
       <option>...</option>
      </datalist>
     <!--  <div class="valid-feedback">CORRETO</div> -->
      <div class="invalid-feedback">Digite um nome para a categoria</div>
     </div>
     

     <!--Botoes-->
     <div class="col-12" style="margin: 2rem 0 0;">
      <button id="btn_edt_categoria" class="btn btn-success" type="submit" onclick="editedCat(${index}, event)" data-bs-dismiss="modal" aria-label="Close">ENVIAR</button>
     </div>
    </form>
  `;
 });

 const categoriass = document.querySelector(".categorias");

 verCategoria();
 datalistCategorias();
 // validarFormulario();
}

function editedCat(index, event) {
 event.preventDefault();
 const input_categoriaEdt = document.querySelector("#input_categoriaEdt").value.trim();

 // Verificar se o campo de categoria não está vazio
 if (input_categoriaEdt === "") {
  datalistCategorias();
  return;
 }

 // Verifica se a categoria já existe no array (ignorando maiúsculas e minúsculas)
 const catIndex = CategoriaTask.findIndex(cat => cat.toLowerCase() === input_categoriaEdt.toLowerCase());
 if (catIndex > -1 && catIndex !== index) {
  // Adicionado condição para verificar se o índice é diferente do índice atual
  // A categoria já existe no array e não é a categoria atual, portanto, não fazemos nada
  console.log("Categoria já existe");
  return;
 }

 // Armazena a categoria antiga para referência
 const categoriaAntiga = CategoriaTask[index];

 // Atualiza o valor da categoria no array
 CategoriaTask[index] = input_categoriaEdt;

 // Tasks.forEach((item, i) => {
 //   if (item.categoria === categoriaAntiga) {
 //     item.categoriaEditada = input_categoriaEdt;
 //     item.categoria = item.categoriaEditada;
 // localStorage.setItem("Tasks", JSON.stringify(Tasks));
 //   }
 // });
 Tasks.forEach((item, i) => {
  if (item.categoria === categoriaAntiga) {
   item.categoriaEditada = categoriaAntiga;
   item.categoria = input_categoriaEdt;
   localStorage.setItem("Tasks", JSON.stringify(Tasks));
  }
 });
 // verTarefas();
 // Atualiza o localStorage com o novo array CategoriaTask
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));

 // Atualiza a lista de categorias exibida

 verCategoriaTable();
 verCategoriaTable();

 // Atualiza a lista de tarefas exibida
 verTarefas();

 // Atualiza a lista de opções no datalist
 datalistCategorias();
}

function datalistCategorias() {
 const listCategorias = document.querySelector("#datalistCategorias");
 listCategorias.innerHTML = "";

 CategoriaTask.forEach((item, index) => {
  const option = document.createElement("option");

  option.innerHTML = `
     ${item}
     `;
  listCategorias.appendChild(option); // Adiciona a opção à lista de categorias
 });

 // Atualiza o localStorage com o novo array CategoriaTask
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));
}

datalistCategorias();


function verCategoriaTable() {
 const categorias = document.querySelector(".categorias");
// console.log(categorias.children.length);

 if (categorias.children.length === 0) {
  categorias.innerHTML = `
  <div class="table-responsive"
    style="margin: 2rem 0 0;"
    >
    <table class="table table-md align-middle text-center">
      <thead class="table-dark">
        <tr>
        <th colspan="4">Nome</th>
        <!--
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        -->
        <th>Editar</th>
        <th>Apagar</th>
          
        </tr>
      </thead>
      <tbody id="tbody_categorias">
        
        
        
      </tbody>
    </table>
      
    </div>
  `;
  verCategoria();
 } else {
  // Remover elementos filhos se existirem
  while (categorias.firstChild) {
   categorias.removeChild(categorias.firstChild);
  }
 }
 const filtro = document.querySelector(".filtro");
 filtro.style="display: none"
 
}

function verCategoria() {
 // console.log(categorias.children.length);
// const categorias = document.querySelector(".categorias");
 const tbody_categorias = document.querySelector("#tbody_categorias");
 tbody_categorias.innerHTML = "";
 CategoriaTask.forEach((item, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="" colspan="4">${item}</td>
          <!--
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          -->
          <td onclick="editarCategoria(${index})" data-bs-toggle="modal" data-bs-target="#modal_edt_categoria">EDITAR</td>
          <td onclick="delCategoriaIndex(${index})" data-bs-toggle="modal" data-bs-target="#modal_apagar_categoria">APAGAR</td>
    `;
  tbody_categorias.appendChild(tr);
 });
}

//verCategoriaTable();

function delCategoria(index, nome) {
 // console.log(CategoriaTask[index]);
 Tasks.forEach((item, i) => {
  if (item.categoria == CategoriaTask[index]) {
   // item.categoria = CategoriaTask[index];
   item.categoria = "";
   item.categoriaRemovida = CategoriaTask[index];
   localStorage.setItem("Tasks", JSON.stringify(Tasks));
   verTarefas();
   // console.log(CategoriaTask[index]);
  }
 });
 // Remover o objeto do array 'Tasks' no índice fornecido

 CategoriaTask.splice(index, 1);
 // console.log("Categoria removida:", CategoriaTask[index]);
 //     console.log("Novo array de categorias:", CategoriaTask);
 localStorage.setItem("CategoriaTask", JSON.stringify(CategoriaTask));

 const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 // if (categorias.children.length >= 0) {
//   categorias.innerHTML = `
//   <div class="table-responsive"
//     style="margin: 2rem 0 0;"
//     >
//     <table class="table table-md   align-middle text-center">
//       <thead class="table-dark">
//         <tr>
//         <th>Nome</th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th></th>
//         <th>Editar</th>
//         <th>Apagar</th>
//           
//         </tr>
//       </thead>
//       <tbody id="tbody_categorias">
//         
//         
//         
//       </tbody>
//     </table>
//       
//     </div>
//   `;
//   verCategoria();
//  } else {
//   // Remover elementos filhos se existirem
//   while (categorias.firstChild) {
//    categorias.removeChild(categorias.firstChild);
//   }
//  }

 datalistCategorias();
 verTarefas();
}

function delCategoriaIndex(index) {
  const modalBody = document.querySelector("#modal-body-apagar-categoria");
  const modalFooter = document.querySelector("#modal-footer-apagar-categoria");
  modalBody.innerHTML = `
  <div class="alert alert-danger text-danger" role="alert">
  <span class="badge text-dark" style="padding: 0; margin: 0 0 16px;">
    *essa ação não pode ser desfeita!
    </span>
    <br>
   
    Tem certeza que deseja remover a categoria
    <br>
  <span class="text-dark">
    " ${CategoriaTask[index]} "
  </span> da sua lista de categorias ? 
    
  </div>
  `;
  modalFooter.innerHTML = `
  
  <button type="button" class="btn btn-primary" onclick="delCategoria(${index}, '${CategoriaTask[index]}')" data-bs-dismiss="modal">
    SIM
  </button>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="verCategoriaTable()">
    NÃO 
  </button>
  `;
  
 // Remover o objeto do array 'Tasks' no índice fornecido
// Tasks.splice(index, 1);
 //   console.log("Tarefa removida:", Tasks[index]);
 //     console.log("Novo array de tarefas:", Tasks);
// localStorage.setItem("Tasks", JSON.stringify(Tasks));
// datalistCategorias();
// verTarefas();
}

function clickBtnFiltro() {
 const clickFiltro = document.querySelector(".clickFiltro");
 clickFiltro.click();
}

function tabelas() {
 const tarefas = document.querySelector(".tarefas");
 tarefas.innerHTML = "";
 if (tarefas.children.length === 0) {
  tarefas.innerHTML = `
      <div class="container-md align-middle text-center text-white justify-content-center" style="margin: 2rem 0 .5rem;">
      <h1 style="margin: 2rem 0 .5rem;">
       
    LISTA DE TAREFAS 
    
      </h1>
    </div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal_add_tarefa"
      style="margin: 1rem 0 .5rem;">
       + Tarefa
     </button>
     
      <button type="button" onclick="verCategoriaTable()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem; ">
       Categorias
     </button>
     <!--
      <button type="button" onclick="verTarefasFiltradas()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem 0; ">
       Filtrar
     </button>
     -->
     
      <button type="button" data-bs-toggle="modal" data-bs-target="#modal_filtro_tarefa" class="btn btn-success clickFiltro" 
      style="margin: 1rem 1rem .5rem 0; " onclick="fecharTarefasFiltradas()">
       Filtrar
     </button>
     
    <div class="table-responsive table-wrapper"
    style="overflow-y: auto; height: 358px;"
    
    >
     
    <table class="table table-md table-striped table-bordered align-middle text-center"
    style="margin: 0;">
      <thead id="thead_tarefas" class="table-dark"
      style="position: sticky;
        top: 0; z-index: 1;">
        <tr>
        <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
        <th>Editar</th>
        <th>Apagar</th>
        </tr>
      </thead>
      <tbody id="tbody_tarefas">

        
        
      </tbody>
    </table>
      
    </div>
  `;
 } else {
  // Remover elementos filhos se existirem
  while (tarefas.firstChild) {
   tarefas.removeChild(tarefas.firstChild);
  }
 }
}

function tabelasFiltro() {
 const filtro = document.querySelector(".filtro");
 filtro.innerHTML = "";
 if (filtro.children.length === 0) {
  filtro.innerHTML = `
      <div class="container-md align-middle text-center text-white justify-content-center" style="margin: 2rem 0 .5rem;">
      <h1 style="margin: 2rem 0 .5rem;">
       
    LISTA DE TAREFAS 
    
      </h1>
    </div>
      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal_add_tarefa"
      style="margin: 1rem 0 .5rem;  ">
       Adicionar Tarefa
     </button>
     
      <button type="button" onclick="verCategoriaTable()" class="btn btn-success" 
      style="margin: 1rem 1rem .5rem; ">
       Ver Categorias
     </button>
     
    <div class="table-responsive table-wrapper"
    style=" overflow-y: auto;"
    
    >
     
    <table class="table table-md table-striped table-bordered align-middle text-center"
    style="margin: 0;">
      <thead class="table-dark"
      style="position: sticky;
        top: 0; z-index: 1;">
        <tr>
        <th>Nome</th>
        <th>Início</th>
        <th>Fim</th>
        <th>Estado</th>
        <th>Prazo</th>
        <th>Tempo</th>
        <th>Categoria</th>
        <th>Opções</th>
          
        </tr>
      </thead>
      <tbody id="tbody_tarefas">

        
      </tbody>
    </table>
      
    </div>
  `;
 } else {
  // Remover elementos filhos se existirem
  while (filtro.firstChild) {
   filtro.removeChild(filtro.firstChild);
  }
 }
}

function delTarefa(index) {
 // Remover o objeto do array 'Tasks' no índice fornecido
 Tasks.splice(index, 1);
 //   console.log("Tarefa removida:", Tasks[index]);
 //     console.log("Novo array de tarefas:", Tasks);
 localStorage.setItem("Tasks", JSON.stringify(Tasks));
 datalistCategorias();
 verTarefas();
}

function delTarefaIndex(index) {
  const modalBody = document.querySelector("#modal-body-apagar-tarefa");
  const modalFooter = document.querySelector("#modal-footer-apagar-tarefa");
  modalBody.innerHTML = `
  <div class="alert alert-danger text-danger" role="alert">
  <span class="badge text-dark" style="padding: 0; margin: 0 0 16px;">
    *essa ação não pode ser desfeita!
    </span>
    <br>
   
    Tem certeza que deseja remover a tarefa
    <br>
  <span class="text-dark">
    " ${Tasks[index].nome} "
  </span> da sua lista de tarefas ? 
    
  </div>
  `;
  modalFooter.innerHTML = `
  
  <button type="button" class="btn btn-primary" onclick="delTarefa(${index})" data-bs-dismiss="modal">
    SIM
  </button>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
    NÃO 
  </button>
  `;
  const categorias = document.querySelector(".categorias");
categorias.innerHTML = "";
 // Remover o objeto do array 'Tas