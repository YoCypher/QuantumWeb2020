function add(){
    var nomeDependente = document.getElementById("idDependente").value;
    var cpfDependente = document.getElementById("idCpfDependente").value;

    document.getElementById("dependentes").innerHTML += 
    "<tbody><tr><td>"+nomeDependente+"</td>"
    +"<td>"+cpfDependente+"</td></tr><tbody>";
}
