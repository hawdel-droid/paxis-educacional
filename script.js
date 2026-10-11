
const formLogin = document.getElementById("formLogin");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");
const mensagem = document.getElementById("mensagem");
const botaoEntrar = document.getElementById("botaoEntrar");
const preencherTeste = document.getElementById("preencherTeste");

// Conta fictícia para testar a interface.
// Não use este modelo como autenticação de produção.
const usuarioTeste = {
    nome: "Aluno Práxis",
    email: "aluno@praxis.edu.br",
    senha: "Praxis123!"
};

// Preenche os campos com as credenciais de teste.
preencherTeste.addEventListener("click", () => {
    campoEmail.value = usuarioTeste.email;
    campoSenha.value = usuarioTeste.senha;

    mensagem.textContent = "Conta de teste preenchida. Clique em Entrar.";
    mensagem.className = "mensagem-status";
});

// Mostrar ou ocultar a senha.
mostrarSenha.addEventListener("click", () => {
    const senhaVisivel = campoSenha.type === "text";

    campoSenha.type = senhaVisivel ? "password" : "text";
    mostrarSenha.textContent = senhaVisivel ? "Mostrar" : "Ocultar";
    mostrarSenha.setAttribute(
        "aria-label",
        senhaVisivel ? "Mostrar senha" : "Ocultar senha"
    );
});

// Verifica os dados enviados pelo formulário.
formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    mensagem.textContent = "";
    mensagem.className = "mensagem-status";

    const email = campoEmail.value.trim().toLowerCase();
    const senha = campoSenha.value;

    if (
        email === usuarioTeste.email &&
        senha === usuarioTeste.senha
    ) {
        // Sessão temporária apenas para a demonstração.
        sessionStorage.setItem("praxisLogado", "true");
        sessionStorage.setItem("praxisNome", usuarioTeste.nome);

        mensagem.textContent = "Login válido! Abrindo sua área...";
        mensagem.classList.add("sucesso");
        botaoEntrar.disabled = true;

        window.location.href = "dashboard.html";
    } else {
        mensagem.textContent =
            "E-mail ou senha incorretos. Verifique os dados e tente novamente.";
        mensagem.classList.add("erro");
    }
});
