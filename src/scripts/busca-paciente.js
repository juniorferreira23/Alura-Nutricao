var botaoBusca = document.querySelector("#buscar-paciente");
const API = "" //url api

botaoBusca.addEventListener("click", function () {
  let xhl = new XMLHttpRequest();

  xhl.open("GET", API);

  xhl.addEventListener("load", function () {
    let resposta = xhl.responseText;
    let pacientes = JSON.parse(resposta);

    pacientes.forEach(function (paciente) {
      adicionandoPacienteNaTabela(paciente);
    });
  });
  xhl.send();
});
