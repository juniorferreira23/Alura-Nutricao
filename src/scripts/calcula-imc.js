var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = ValidaAltura(altura);

  if (!pesoEhValido) {
    tdImc.textContent = "Peso inválido";
    paciente.classList.add("dados-invalidos");
  }
  if (!alturaEhValida) {
    tdImc.textContent = "Altura inválido";
    paciente.classList.add("dados-invalidos");
  }
  if (pesoEhValido && alturaEhValida) {
    tdImc.textContent = calculaImc(peso, altura);
  }
}

function calculaImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso <= 452) {
    return true;
  }
}

function ValidaAltura(altura) {
  if (altura >= 0.62 && altura <= 2.52) {
    return true;
  }
}
