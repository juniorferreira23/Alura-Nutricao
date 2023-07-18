var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault(); //Evita eventos padrão

  //Pegando os dados
  var form = document.querySelector("form");
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  //limpando ul de mensagens de erro
  var ul = document.querySelector("#mensagens-erro");
  ul.textContent = "";

  //validação dos dados
  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    let ul = document.querySelector("#mensagens-erro");
    ul.textContent = "";
    erros.forEach(function (erro) {
      //Laço de repetição for de outra maneira
      let li = document.createElement("li");
      li.classList.add("input-invalido");
      li.textContent = erro;
      ul.appendChild(li);
    });
    return; //Caso não tenha erros ele sai da função e condição sem concluir colocando o paciente na tabela
  }

  adicionandoPacienteNaTabela(paciente);

  form.reset(); //Reseta os campos do formulário
});

function validaPaciente(paciente) {
  let erros = [];

  if (paciente.nome.length == 0) {
    erros.push("Nome em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("Peso em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("Altura em branco");
  }
  if (paciente.gordura.length == 0) {
    erros.push("Gordura em branco");
  }
  if (!validaPeso(paciente.peso)) {
    erros.push("Peso inválido");
  }
  if (!ValidaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }

  return erros;
}

function montaTr(paciente) {
  let trPaciente = document.createElement("tr");
  trPaciente.classList.add("paciente");

  trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
  trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
  trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
  trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
  trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

  return trPaciente;
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function adicionandoPacienteNaTabela(paciente) {
  var tabelaDePacientes = document.querySelector("#tabela-pacientes");
  tabelaDePacientes.appendChild(montaTr(paciente));
}
