const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    let erros = [];

    if (nome === "") {
        erros.push("O nome está vazio.");
    }

    if (!regexEmail.test(email)) {
        erros.push("O e-mail está incorreto.");
    }

    if (!regexTelefone.test(telefone)) {
        erros.push("O telefone está incorreto.");
    }

    if (erros.length > 0) {
        mensagem.innerHTML = erros.join("<br>");
        return;
    }

    mensagem.textContent = "Formulário enviado com sucesso!";
});