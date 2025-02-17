
// function selecionarFuncionarioECalcularHoras(funcionarios) {
//     let nomesFuncionarios = funcionarios.map(f => `${f.id} - ${f.nome}`).join("\n");
//     let idSelecionado = prompt(`Selecione um funcionário pelo ID:\n${nomesFuncionarios}`, 10);
    
//     if (!idSelecionado) return;

//     let funcionario = funcionarios.find(f => f.id == idSelecionado.trim());
// console.log(funcionario.id);
// console.log(funcionarios.length);
//     if (!funcionario) {
//         alert("Funcionário não encontrado!");
//         return;
//     }

//     let mesSelecionado = prompt("Digite o mês desejado (formato MM):", `01`);

//     if (!mesSelecionado || !/^\d{2}$/.test(mesSelecionado)) {
//         alert("Mês inválido!");
//         return;
//     }

//     let resultado = calcularHorasTrabalhadas(funcionario, mesSelecionado);
//     // console.log(`Horas trabalhadas por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasTrabalhadas}`);
//     // console.log(`Horas de intervalo por ${funcionario.nome} no mês ${mesSelecionado}: ${resultado.horasIntervalo}`);
//     console.log(resultado.mensagemSemIntervalo);
//     viewDomPonto(funcionario.nome, mesSelecionado, resultado.horasTrabalhadas, resultado.mensagemSemIntervalo);
// }
const btn_ponto_auto = document.querySelector("#btn_ponto_auto");
btn_ponto_auto.addEventListener("click",  () => {
// const pontosUltras = ()=>{
// 	return `10	mauricio	Not Set7	 2025-01-02     13:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     16:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     17:00:00	1
// 10	mauricio	Not Set7	 2025-01-02     21:20:00	1
// `;
// };
const pontoUltra = ()=>{
	return `
13	barbara souza	Not Set1	 2025-01-02     04:52:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     07:45:04	1
13	barbara souza	Not Set1	 2025-01-02     10:24:30	1
13	barbara souza	Not Set1	 2025-01-02     11:21:48	1
8	lurdes	Not Set1	 2025-01-02     11:39:39	1
10	mauricio	Not Set7	 2025-01-02     12:43:08	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     13:19:40	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     14:20:19	1
15	robson	Not Set6	 2025-01-02     14:31:11	1
11	marcia	Not Set1	 2025-01-02     14:34:50	1
8	lurdes	Not Set1	 2025-01-02     15:02:17	1
8	lurdes	Not Set1	 2025-01-02     16:00:17	1
10	mauricio	Not Set7	 2025-01-02     16:51:19	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-02     16:53:51	1
10	mauricio	Not Set7	 2025-01-02     17:47:19	1
15	robson	Not Set6	 2025-01-02     18:27:01	1
11	marcia	Not Set1	 2025-01-02     19:13:44	1
15	robson	Not Set6	 2025-01-02     19:29:48	1
8	lurdes	Not Set1	 2025-01-02     20:03:32	1
11	marcia	Not Set1	 2025-01-02     20:10:04	1
10	mauricio	Not Set7	 2025-01-02     21:03:50	1
15	robson	Not Set6	 2025-01-02     22:47:38	1
11	marcia	Not Set1	 2025-01-02     22:58:35	1
13	barbara souza	Not Set1	 2025-01-03     04:55:58	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     07:48:50	1
13	barbara souza	Not Set1	 2025-01-03     08:40:16	1
13	barbara souza	Not Set1	 2025-01-03     09:51:10	1
8	lurdes	Not Set1	 2025-01-03     11:40:03	1
12	nath	Not Set1	 2025-01-03     13:46:43	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     13:48:01	1
15	robson	Not Set6	 2025-01-03     14:38:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     14:45:56	1
11	marcia	Not Set1	 2025-01-03     14:58:55	1
8	lurdes	Not Set1	 2025-01-03     15:05:49	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-03     15:58:46	1
8	lurdes	Not Set1	 2025-01-03     16:05:13	1
10	mauricio	Not Set7	 2025-01-03     16:10:57	1
12	nath	Not Set1	 2025-01-03     17:16:08	1
15	robson	Not Set6	 2025-01-03     17:58:01	1
12	nath	Not Set1	 2025-01-03     18:14:24	1
15	robson	Not Set6	 2025-01-03     19:00:29	1
8	lurdes	Not Set1	 2025-01-03     20:02:03	1
10	mauricio	Not Set7	 2025-01-03     20:27:04	1
12	nath	Not Set1	 2025-01-03     21:58:32	1
15	robson	Not Set6	 2025-01-03     22:50:05	1
11	marcia	Not Set1	 2025-01-03     23:02:29	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     07:45:55	1
10	mauricio	Not Set7	 2025-01-04     07:45:58	1
12	nath	Not Set1	 2025-01-04     09:42:32	1
10	mauricio	Not Set7	 2025-01-04     10:43:23	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     10:46:41	1
10	mauricio	Not Set7	 2025-01-04     11:41:27	1
12	nath	Not Set1	 2025-01-04     11:45:10	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     12:00:19	1
12	nath	Not Set1	 2025-01-04     12:44:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-04     13:54:41	1
10	mauricio	Not Set7	 2025-01-04     14:41:37	1
12	nath	Not Set1	 2025-01-04     16:52:21	1
11	marcia	Not Set1	 2025-01-05     07:34:28	1
15	robson	Not Set6	 2025-01-05     07:59:22	1
15	robson	Not Set6	 2025-01-05     13:57:42	1
11	marcia	Not Set1	 2025-01-05     14:04:47	1
13	barbara souza	Not Set1	 2025-01-06     04:53:52	1
9	manuella meireles	Not Set1	 2025-01-06     07:45:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     07:47:51	1
13	barbara souza	Not Set1	 2025-01-06     10:15:02	1
13	barbara souza	Not Set1	 2025-01-06     11:22:06	1
8	lurdes	Not Set1	 2025-01-06     11:40:13	1
12	nath	Not Set1	 2025-01-06     12:49:51	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     12:50:04	1
13	barbara souza	Not Set1	 2025-01-06     13:25:14	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     13:52:02	1
9	manuella meireles	Not Set1	 2025-01-06     14:00:21	1
10	mauricio	Not Set7	 2025-01-06     14:17:42	1
15	robson	Not Set6	 2025-01-06     14:39:39	1
8	lurdes	Not Set1	 2025-01-06     15:01:00	1
6	alisson carvalho	Not Set1	 2025-01-06     15:05:37	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-06     15:52:46	1
8	lurdes	Not Set1	 2025-01-06     16:00:04	1
12	nath	Not Set1	 2025-01-06     16:41:43	1
15	robson	Not Set6	 2025-01-06     16:54:26	1
12	nath	Not Set1	 2025-01-06     17:35:50	1
10	mauricio	Not Set7	 2025-01-06     17:53:22	1
15	robson	Not Set6	 2025-01-06     18:01:35	1
6	alisson carvalho	Not Set1	 2025-01-06     18:37:39	1
10	mauricio	Not Set7	 2025-01-06     18:50:44	1
6	alisson carvalho	Not Set1	 2025-01-06     19:54:38	1
8	lurdes	Not Set1	 2025-01-06     20:06:25	1
10	mauricio	Not Set7	 2025-01-06     21:21:21	1
15	robson	Not Set6	 2025-01-06     21:47:24	1
6	alisson carvalho	Not Set1	 2025-01-06     22:57:52	1
12	nath	Not Set1	 2025-01-06     23:00:08	1
13	barbara souza	Not Set1	 2025-01-07     04:47:59	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     07:33:11	1
9	manuella meireles	Not Set1	 2025-01-07     07:57:57	1
13	barbara souza	Not Set1	 2025-01-07     09:43:31	1
13	barbara souza	Not Set1	 2025-01-07     10:58:03	1
8	lurdes	Not Set1	 2025-01-07     11:40:02	1
10	mauricio	Not Set7	 2025-01-07     12:55:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     12:56:51	1
12	nath	Not Set1	 2025-01-07     13:03:31	1
13	barbara souza	Not Set1	 2025-01-07     13:29:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     13:55:28	1
15	robson	Not Set6	 2025-01-07     14:12:30	1
8	lurdes	Not Set1	 2025-01-07     15:21:07	1
12	nath	Not Set1	 2025-01-07     15:48:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-07     16:02:16	1
8	lurdes	Not Set1	 2025-01-07     16:21:15	1
12	nath	Not Set1	 2025-01-07     16:34:37	1
15	robson	Not Set6	 2025-01-07     17:55:23	1
15	robson	Not Set6	 2025-01-07     18:58:33	1
8	lurdes	Not Set1	 2025-01-07     20:04:17	1
10	mauricio	Not Set7	 2025-01-07     20:45:37	1
15	robson	Not Set6	 2025-01-07     21:37:59	1
12	nath	Not Set1	 2025-01-07     22:59:01	1
13	barbara souza	Not Set1	 2025-01-08     04:48:44	1
9	manuella meireles	Not Set1	 2025-01-08     07:49:06	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     08:00:33	1
8	lurdes	Not Set1	 2025-01-08     11:40:59	1
12	nath	Not Set1	 2025-01-08     12:36:39	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     12:52:21	1
13	barbara souza	Not Set1	 2025-01-08     13:19:49	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     13:54:38	1
10	mauricio	Not Set7	 2025-01-08     14:07:41	1
8	lurdes	Not Set1	 2025-01-08     15:16:28	1
15	robson	Not Set6	 2025-01-08     15:19:34	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-08     15:45:13	1
8	lurdes	Not Set1	 2025-01-08     16:21:18	1
12	nath	Not Set1	 2025-01-08     17:26:15	1
12	nath	Not Set1	 2025-01-08     18:28:48	1
10	mauricio	Not Set7	 2025-01-08     18:32:38	1
10	mauricio	Not Set7	 2025-01-08     19:11:20	1
15	robson	Not Set6	 2025-01-08     19:20:23	1
8	lurdes	Not Set1	 2025-01-08     20:07:12	1
15	robson	Not Set6	 2025-01-08     20:10:24	1
10	mauricio	Not Set7	 2025-01-08     20:19:09	1
15	robson	Not Set6	 2025-01-08     22:46:46	1
12	nath	Not Set1	 2025-01-08     22:52:19	1
13	barbara souza	Not Set1	 2025-01-09     04:49:06	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     07:58:10	1
8	lurdes	Not Set1	 2025-01-09     11:41:12	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     12:57:07	1
10	mauricio	Not Set7	 2025-01-09     13:24:37	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     13:56:46	1
12	nath	Not Set1	 2025-01-09     14:04:37	1
9	manuella meireles	Not Set1	 2025-01-09     14:25:21	1
15	robson	Not Set6	 2025-01-09     14:42:59	1
16	moacir xavier	Not Set1	 2025-01-09     15:04:02	1
8	lurdes	Not Set1	 2025-01-09     15:05:24	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-09     15:54:23	1
8	lurdes	Not Set1	 2025-01-09     16:06:32	1
12	nath	Not Set1	 2025-01-09     16:23:33	1
10	mauricio	Not Set7	 2025-01-09     17:00:30	1
12	nath	Not Set1	 2025-01-09     17:21:00	1
16	moacir xavier	Not Set1	 2025-01-09     17:39:07	1
10	mauricio	Not Set7	 2025-01-09     17:49:36	1
16	moacir xavier	Not Set1	 2025-01-09     18:38:52	1
15	robson	Not Set6	 2025-01-09     18:47:55	1
15	robson	Not Set6	 2025-01-09     19:56:47	1
8	lurdes	Not Set1	 2025-01-09     20:00:14	1
10	mauricio	Not Set7	 2025-01-09     21:20:58	1
15	robson	Not Set6	 2025-01-09     22:48:38	1
16	moacir xavier	Not Set1	 2025-01-09     23:03:16	1
15	robson	Not Set6	 2025-01-10     07:58:27	1
8	lurdes	Not Set1	 2025-01-10     11:40:03	1
15	robson	Not Set6	 2025-01-10     11:57:42	1
15	robson	Not Set6	 2025-01-10     13:01:20	1
10	mauricio	Not Set7	 2025-01-10     13:05:01	1
12	nath	Not Set1	 2025-01-10     13:10:11	1
13	barbara souza	Not Set1	 2025-01-10     13:14:46	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     14:39:02	1
16	moacir xavier	Not Set1	 2025-01-10     14:43:39	1
8	lurdes	Not Set1	 2025-01-10     15:07:40	1
15	robson	Not Set6	 2025-01-10     16:00:05	1
8	lurdes	Not Set1	 2025-01-10     16:06:03	1
12	nath	Not Set1	 2025-01-10     16:40:14	1
10	mauricio	Not Set7	 2025-01-10     17:22:58	1
12	nath	Not Set1	 2025-01-10     17:39:44	1
10	mauricio	Not Set7	 2025-01-10     18:28:09	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     18:46:33	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     19:49:14	1
8	lurdes	Not Set1	 2025-01-10     20:03:38	1
16	moacir xavier	Not Set1	 2025-01-10     20:04:20	1
16	moacir xavier	Not Set1	 2025-01-10     21:07:24	1
10	mauricio	Not Set7	 2025-01-10     21:21:50	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-10     22:57:54	1
12	nath	Not Set1	 2025-01-10     23:00:25	1
16	moacir xavier	Not Set1	 2025-01-10     23:03:02	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     07:51:56	1
10	mauricio	Not Set7	 2025-01-11     08:02:03	1
8	lurdes	Not Set1	 2025-01-11     09:38:10	1
16	moacir xavier	Not Set1	 2025-01-11     09:41:57	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     11:27:21	1
10	mauricio	Not Set7	 2025-01-11     11:58:23	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     12:48:52	1
10	mauricio	Not Set7	 2025-01-11     12:56:07	1
16	moacir xavier	Not Set1	 2025-01-11     13:00:02	1
8	lurdes	Not Set1	 2025-01-11     13:40:41	1
16	moacir xavier	Not Set1	 2025-01-11     14:08:56	1
8	lurdes	Not Set1	 2025-01-11     14:40:34	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-11     14:57:37	1
10	mauricio	Not Set7	 2025-01-11     15:20:04	1
8	lurdes	Not Set1	 2025-01-11     17:02:26	1
16	moacir xavier	Not Set1	 2025-01-11     17:06:38	1
16	moacir xavier	Not Set1	 2025-01-12     07:54:54	1
15	robson	Not Set6	 2025-01-12     08:19:52	1
15	robson	Not Set6	 2025-01-12     14:00:02	1
13	barbara souza	Not Set1	 2025-01-12     14:04:33	1
13	barbara souza	Not Set1	 2025-01-13     04:48:54	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     07:50:16	1
9	manuella meireles	Not Set1	 2025-01-13     07:58:28	1
13	barbara souza	Not Set1	 2025-01-13     09:50:01	1
13	barbara souza	Not Set1	 2025-01-13     10:42:23	1
8	lurdes	Not Set1	 2025-01-13     11:40:07	1
10	mauricio	Not Set7	 2025-01-13     12:51:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     12:59:21	1
13	barbara souza	Not Set1	 2025-01-13     13:11:21	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     14:02:33	1
8	lurdes	Not Set1	 2025-01-13     15:00:16	1
12	nath	Not Set1	 2025-01-13     15:27:30	1
8	lurdes	Not Set1	 2025-01-13     16:00:15	1
10	mauricio	Not Set7	 2025-01-13     17:03:18	1
10	mauricio	Not Set7	 2025-01-13     18:02:14	1
12	nath	Not Set1	 2025-01-13     18:19:21	1
12	nath	Not Set1	 2025-01-13     19:18:25	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-13     19:52:32	1
10	mauricio	Not Set7	 2025-01-13     21:20:16	1
12	nath	Not Set1	 2025-01-13     22:57:27	1
8	lurdes	Not Set1	 2025-01-13     23:00:15	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     07:55:38	1
13	barbara souza	Not Set1	 2025-01-14     10:21:34	1
13	barbara souza	Not Set1	 2025-01-14     11:23:13	1
8	lurdes	Not Set1	 2025-01-14     11:40:04	1
10	mauricio	Not Set7	 2025-01-14     12:51:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     13:04:12	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     14:03:47	1
12	nath	Not Set1	 2025-01-14     14:26:32	1
17	lays	Not Set1	 2025-01-14     14:28:48	1
8	lurdes	Not Set1	 2025-01-14     15:00:17	1
8	lurdes	Not Set1	 2025-01-14     16:00:14	1
12	nath	Not Set1	 2025-01-14     16:20:07	1
12	nath	Not Set1	 2025-01-14     17:20:38	1
10	mauricio	Not Set7	 2025-01-14     17:41:31	1
10	mauricio	Not Set7	 2025-01-14     18:22:07	1
8	lurdes	Not Set1	 2025-01-14     19:43:49	1
17	lays	Not Set1	 2025-01-14     19:56:55	1
17	lays	Not Set1	 2025-01-14     20:55:03	1
10	mauricio	Not Set7	 2025-01-14     21:01:22	1
12	nath	Not Set1	 2025-01-14     22:54:00	1
17	lays	Not Set1	 2025-01-14     22:54:05	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-14     22:54:11	1
13	barbara souza	Not Set1	 2025-01-15     04:48:39	1
18	juliana	Not Set1	 2025-01-15     04:48:41	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     08:18:29	1
18	juliana	Not Set1	 2025-01-15     08:30:26	1
18	juliana	Not Set1	 2025-01-15     09:30:03	1
8	lurdes	Not Set1	 2025-01-15     11:40:04	1
10	mauricio	Not Set7	 2025-01-15     12:48:30	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     13:01:10	1
18	juliana	Not Set1	 2025-01-15     13:08:13	1
13	barbara souza	Not Set1	 2025-01-15     13:16:11	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     14:01:45	1
17	lays	Not Set1	 2025-01-15     14:32:56	1
12	nath	Not Set1	 2025-01-15     14:36:58	1
8	lurdes	Not Set1	 2025-01-15     15:13:12	1
8	lurdes	Not Set1	 2025-01-15     16:13:24	1
12	nath	Not Set1	 2025-01-15     16:41:50	1
12	nath	Not Set1	 2025-01-15     17:39:50	1
17	lays	Not Set1	 2025-01-15     19:06:54	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-15     19:50:01	1
17	lays	Not Set1	 2025-01-15     20:03:02	1
10	mauricio	Not Set7	 2025-01-15     20:03:46	1
12	nath	Not Set1	 2025-01-15     22:57:54	1
17	lays	Not Set1	 2025-01-15     22:58:05	1
18	juliana	Not Set1	 2025-01-16     04:56:57	1
9	manuella meireles	Not Set1	 2025-01-16     07:03:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     07:56:42	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     07:58:21	1
18	juliana	Not Set1	 2025-01-16     08:27:54	1
18	juliana	Not Set1	 2025-01-16     09:27:06	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     09:52:16	1
13	barbara souza	Not Set1	 2025-01-16     10:15:56	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     10:48:29	1
13	barbara souza	Not Set1	 2025-01-16     11:12:36	1
8	lurdes	Not Set1	 2025-01-16     11:40:26	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     11:50:40	1
10	mauricio	Not Set7	 2025-01-16     12:57:06	1
18	juliana	Not Set1	 2025-01-16     13:06:03	1
13	barbara souza	Not Set1	 2025-01-16     13:07:37	1
14	Rosangela Fagundes	Not Set1	 2025-01-16     14:22:58	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     14:28:01	1
12	nath	Not Set1	 2025-01-16     14:30:55	1
17	lays	Not Set1	 2025-01-16     14:35:20	1
8	lurdes	Not Set1	 2025-01-16     15:31:48	1
10	mauricio	Not Set7	 2025-01-16     15:42:59	1
8	lurdes	Not Set1	 2025-01-16     16:31:03	1
10	mauricio	Not Set7	 2025-01-16     16:40:24	1
12	nath	Not Set1	 2025-01-16     16:52:43	1
8	lurdes	Not Set1	 2025-01-16     17:23:09	1
9	manuella meireles	Not Set1	 2025-01-16     17:23:15	1
12	nath	Not Set1	 2025-01-16     17:52:57	1
17	lays	Not Set1	 2025-01-16     20:05:30	1
10	mauricio	Not Set7	 2025-01-16     20:09:43	1
17	lays	Not Set1	 2025-01-16     21:05:00	1
12	nath	Not Set1	 2025-01-16     22:55:56	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-16     22:56:56	1
17	lays	Not Set1	 2025-01-16     23:00:08	1
18	juliana	Not Set1	 2025-01-17     04:45:48	1
13	barbara souza	Not Set1	 2025-01-17     04:45:57	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     06:06:12	1
8	lurdes	Not Set1	 2025-01-17     08:03:23	1
9	manuella meireles	Not Set1	 2025-01-17     08:03:28	1
13	barbara souza	Not Set1	 2025-01-17     08:31:28	1
13	barbara souza	Not Set1	 2025-01-17     09:29:29	1
18	juliana	Not Set1	 2025-01-17     09:42:10	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     09:59:29	1
18	juliana	Not Set1	 2025-01-17     10:54:08	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     10:55:27	1
10	mauricio	Not Set7	 2025-01-17     12:56:47	1
18	juliana	Not Set1	 2025-01-17     13:11:22	1
8	lurdes	Not Set1	 2025-01-17     13:24:07	1
9	manuella meireles	Not Set1	 2025-01-17     14:03:07	1
14	Rosangela Fagundes	Not Set1	 2025-01-17     14:17:32	1
8	lurdes	Not Set1	 2025-01-17     14:23:50	1
12	nath	Not Set1	 2025-01-17     14:25:52	1
17	lays	Not Set1	 2025-01-17     14:28:18	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     14:34:07	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     16:29:26	1
12	nath	Not Set1	 2025-01-17     17:05:15	1
10	mauricio	Not Set7	 2025-01-17     17:08:22	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     17:29:02	1
10	mauricio	Not Set7	 2025-01-17     17:36:25	1
9	manuella meireles	Not Set1	 2025-01-17     17:38:20	1
8	lurdes	Not Set1	 2025-01-17     17:38:30	1
12	nath	Not Set1	 2025-01-17     18:11:47	1
17	lays	Not Set1	 2025-01-17     19:22:25	1
17	lays	Not Set1	 2025-01-17     20:22:52	1
10	mauricio	Not Set7	 2025-01-17     21:20:00	1
12	nath	Not Set1	 2025-01-17     22:59:01	1
17	lays	Not Set1	 2025-01-17     22:59:04	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-17     22:59:17	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     07:56:14	1
12	nath	Not Set1	 2025-01-18     07:56:58	1
17	lays	Not Set1	 2025-01-18     09:36:19	1
8	lurdes	Not Set1	 2025-01-18     09:39:02	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     11:59:38	1
12	nath	Not Set1	 2025-01-18     12:21:01	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     13:07:28	1
8	lurdes	Not Set1	 2025-01-18     13:16:00	1
12	nath	Not Set1	 2025-01-18     13:31:43	1
17	lays	Not Set1	 2025-01-18     14:00:56	1
8	lurdes	Not Set1	 2025-01-18     14:15:04	1
17	lays	Not Set1	 2025-01-18     15:02:40	1
12	nath	Not Set1	 2025-01-18     15:28:09	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-18     15:28:22	1
8	lurdes	Not Set1	 2025-01-18     16:57:22	1
9	manuella meireles	Not Set1	 2025-01-19     07:52:38	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     08:01:15	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     10:12:59	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     11:11:30	1
14	Rosangela Fagundes	Not Set1	 2025-01-19     13:59:04	1
13	barbara souza	Not Set1	 2025-01-20     04:52:53	1
18	juliana	Not Set1	 2025-01-20     05:21:21	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     06:08:29	1
18	juliana	Not Set1	 2025-01-20     06:58:47	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     09:59:17	1
9	manuella meireles	Not Set1	 2025-01-20     10:26:06	1
8	lurdes	Not Set1	 2025-01-20     10:30:58	1
14	Rosangela Fagundes	Not Set1	 2025-01-20     10:40:28	1
10	mauricio	Not Set7	 2025-01-20     12:38:26	1
12	nath	Not Set1	 2025-01-20     12:45:38	1
8	lurdes	Not Set1	 2025-01-20     12:59:16	1
8	lurdes	Not Set1	 2025-01-20     13:59:59	1
12	nath	Not Set1	 2025-01-20     14:05:09	1
17	lays	Not Set1	 2025-01-20     14:30:19	1
2	LEANDRO  LIMAS	Not Set1	 2025-01-20     14:41:43	1
12	nath	Not Set1	 2025-01-20   