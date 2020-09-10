function isEmpty(str) {//Verifica se uma string é vazia!
    return (0 === str.length);
}

var botaoSubmit = document.getElementById('submeter');
var dentista = document.getElementById('idDentista');
var botaoReset = document.getElementById('limpar');
var data = document.getElementById('idDataConsulta'), valor = document.getElementById('idValorConsulta');

botaoReset.addEventListener('click', () => {
    dentista.value = "";
    data.value = "";
    valor.value = "";
});

botaoSubmit.addEventListener('click', () => {
    if(isEmpty(nomeFuncionario.value) || isEmpty(cpfFuncionario.value) || isEmpty(emailFuncionario.value)|| 
    isEmpty(salarioFuncionario.value) || isEmpty(cargoFuncionario.value))
        alert("Há campos vazios!");
    else 
        alert("Funcionário Cadastrado!");
});

function validarFuncionario(){
    var nomeFuncionario = cadFuncionario.nomeFuncionario.value;
    var cpfFuncionario = cadFuncionario.cpfFuncionario.value;
    var emailFuncionario = cadFuncionario.emailFuncionario.value;
    var salarioFuncionario = cadFuncionario.salarioFuncionario.value;
    var cargoFuncionario = cadFuncionario.cargoFuncionario.value;
}


// <input type="submit" value="" onClick="return validarFuncionario()">