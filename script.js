var gastos = [];

var indiceSendoEditado = -1;

function adicionarGasto() {
  var descricao = document.getElementById("descricao").value;
  var valor = parseFloat(document.getElementById("valor").value);
  var categoria = document.getElementById("categoria").value;

  if (descricao == "" || isNaN(valor) || categoria == "") {
    alert("Preencha tudo");
    return;
  }

  if (indiceSendoEditado >= 0) {
    gastos[indiceSendoEditado] = { descricao: descricao, valor: valor, categoria: categoria };
    indiceSendoEditado = -1;
    document.getElementById("btn-adicionar").textContent = "Adicionar";
  } else {
    gastos.push({ descricao: descricao, valor: valor, categoria: categoria });
  }

  document.getElementById("descricao").value = "";
  document.getElementById("valor").value = "";
  document.getElementById("categoria").value = "";

  atualizarTela();
}