document.getElementById("form-contato").addEventListener("submit", function(e) {
    e.preventDefault();  // Previne o envio real do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! \nObrigado por entrar em contato, " + nome);
        // Limpar o formulário após o envio
        document.getElementById("form-contato").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
