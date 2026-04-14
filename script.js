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

function editarGasto(indice) {
  indiceSendoEditado = indice;
  document.getElementById("descricao").value = gastos[indice].descricao;
  document.getElementById("valor").value = gastos[indice].valor;
  document.getElementById("categoria").value = gastos[indice].categoria;
  document.getElementById("btn-adicionar").textContent = "Salvar edição";
}

function removerGasto(indice) {
  gastos.splice(indice, 1);
  atualizarTela();
}
function atualizarTela() {
  var tbody = document.getElementById("lista-gastos");
  tbody.innerHTML = "";

  var total = 0;

  for (var i = 0; i < gastos.length; i++) {
    var gasto = gastos[i];
    total = total + gasto.valor;

    var classeValor = gasto.valor > 100 ? "valor-alto" : "";
    var alerta = gasto.valor > 100 ? " ⚠️" : "";

    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + gasto.descricao + "</td>" +
      "<td>" + gasto.categoria + "</td>" +
      "<td class='" + classeValor + "'>R$ " + gasto.valor.toFixed(2) + alerta + "</td>" +
      "<td>" +
        "<button class='btn-editar' onclick='editarGasto(" + i + ")'>Editar</button> " +
        "<button class='btn-remover' onclick='removerGasto(" + i + ")'>Remover</button>" +
      "</td>";

    tbody.appendChild(tr);
  }

  document.getElementById("total").textContent = "R$ " + total.toFixed(2);
}
