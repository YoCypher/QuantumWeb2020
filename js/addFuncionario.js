function add(){
    var nomeFunc = document.getElementById("idFuncionario").value;
    var cpfFunc = document.getElementById("idCpf").value;
    var emailFunc = document.getElementById("idEmail").value;
    var salarioFunc = document.getElementById("idSalario").value;
    var cargoFunc = document.getElementById("idCargo").value;

    document.getElementById("funcionarios").innerHTML += 
    "<tbody><tr><td>"+nomeFunc+"</td>"
     +"<td>"+cpfFunc+"</td>"
     +"<td>"+emailFunc+"</td>"
     +"<td>"+salarioFunc+"</td>"
     +"<td>"+cargoFunc+"</td></tr></tbody>";
}
