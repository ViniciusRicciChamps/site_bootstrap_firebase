


var botaoValidarForm = document.getElementById("botaoSubmitFormulario").addEventListener("click",
    function capturarValoresFormulario() {




        var primeiroNomeUsuarioFormulario = document.getElementById("primeiroNomeUsuarioFormulario").value;
        var sobrenomeUsuarioFormulario = document.getElementById("sobrenomeUsuarioFormulario").value;
        var usuarioFormulario = document.getElementById("usuarioFormulario").value;
        var emailFormulario = document.getElementById("emailFormulario").value;



        /* var enderecoFormulario = document.getElementById("enderecoFormulario").value;
         var estadoFormulario = document.getElementById("estadoFormulario").value;
         var cidadeFormulario = document.getElementById("cidadeFormulario").value;
         var numeroFormulario = document.getElementById("numeroFormulario").value;
             */
    })

var botaoCapturarCEP = document.getElementById("botaoCEP").addEventListener("click",
    function validarCEP() {

        var cepFormulario = document.getElementById("cepFormulario").value;
        if (cepFormulario.length < 8) {
            console.log("Erro");
        }
        else {

            pesquisarCep(cepFormulario);

        }

    })

const pesquisarCep = async (cepAPI) => {
    const cep = cepAPI;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url); // aguarde resolver
    const endereco = await dados.json();
    console.log(endereco);
    preencherForm(endereco);

    // retorna uma promessa, algo que pode acontecer ou não
    //fetch(url).then(responde => responde.json().then(console.log)); // o 'then' manda os dados de retorno 

}


const preencherForm = (endereco) => {
    document.getElementById("enderecoFormulario").value = endereco.logradouro;
    document.getElementById("cidadeFormulario").value = endereco.localidade;
    document.getElementById("estadoFormulario").value = endereco.uf;
}