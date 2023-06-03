document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);
  
    if (!isNaN(campoA) && !isNaN(campoB)) {
      if (campoB > campoA) {
        exibirMensagem("Formulário válido!", "mensagem-sucesso");
      } else {
        exibirMensagem("Formulario invalido! O numero B deve ser maior que o número A.", "mensagem-erro");
      }
    } else {
      exibirMensagem("Por favor, preencha ambos os campos com números validos.", "mensagem-erro");
    }
  });
  
  function exibirMensagem(mensagem, classe) {
    var mensagemDiv = document.getElementById("mensagem");
    mensagemDiv.textContent = mensagem;
    mensagemDiv.className = "mensagem " + classe;
  }
  