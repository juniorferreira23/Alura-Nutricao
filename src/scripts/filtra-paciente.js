var campoFiltro = document.querySelector("#filtro");

campoFiltro.addEventListener("input", function () {
  let textfiltro = this.value;

  let pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes)
  
  pacientes.forEach(function (paciente) {
    let nome = paciente.querySelector(".info-nome").textContent;

    let expressao = new RegExp(textfiltro, "i");
    console.log(expressao)

    if (!expressao.test(nome)) {
      paciente.classList.add("invisivel");
    } else {
      paciente.classList.remove("invisivel");
    }
  });
});
