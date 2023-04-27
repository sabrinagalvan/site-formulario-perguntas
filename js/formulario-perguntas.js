function exibirMensagemDados() {
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var linguagem = document.getElementById("linguagem").value;

    var mensagem = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + ".";
    alert(mensagem);
}

function exibirMensagemGostariaDeEstudar() {
    var gostariaDeEstudar = document.querySelector('input[name="gostariaDeEstudar"]:checked').value;

    if (gostariaDeEstudar === "sim") {
        alert("Que legal!");
    } else {
        alert("Que pena!");
    }
}