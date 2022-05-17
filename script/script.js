

var botao_enviar = document.getElementById("botao_entrar").addEventListener("click", function () {
    var input_email = document.getElementById("id_email").value;
    var input_senha = document.getElementById("id_senha").value;
    validarLogin(input_email, input_senha);
});


function validarLogin(login, senha) {
    if (login == "" || senha == "") {
        window.alert("Preencher os campos Login e Senha");
    }
    else {
        verificar_Senha_Login(login, senha);
    }
}
function verificar_Senha_Login(login, senha) {
    if (login == "vini@email.com" && senha == "12345") {
        window.alert("Login feito com sucesso");
    }
    else {
        window.alert("Email ou senha invalidos");
    }
}