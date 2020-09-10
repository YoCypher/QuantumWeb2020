function add(){
    var procedimento = document.getElementById("idProcedimento").value;
    var descricao = document.getElementById("idDescricao").value;
    var valorProcedimento = document.getElementById("idValorProcedimento").value;
    alert("Procedimento: " + procedimento + "\nDescrição:" + descricao + "\nValor:" + valorProcedimento);
    /*
    var services = document.forms[0];
    var text = " ";
    var i;
    var total = 0;
    
        for(i = 0; i < services.length; i++){
             if(services[i].checked){
                if(services[i].value == "Processing - 1 micro - $ 1,00 per hour"){
                    total += 1;
                }   
                else if(services[i].value == "Storage - 10 GB HD - $ 0,5 per hour"){
                    total += 0.5;
                }
                else if(services[i].value == "Processing - 1 medium - $ 2,00 per hour"){
                    total += 2;
                }
                else if(services[i].value == "Storage - 1 TB HD - $ 1,00 per hour"){
                    total += 1;
                }
                else if(services[i].value == "Processing - 1 large - $ 10,00 per hour"){
                    total += 10;
                }
                else {
                    total += 5;    
                } 
                 text = text + services[i].value + " ";
            }
        }
    document.getElementById("myTable").innerHTML += 
    "<tr><td>"+name+"</td>"
    +"<td>"+email+"</td>"
    +"<td>"+date+"</td>"
    +"<td>"+text+"</td>"
    +"<td>"+total+"</td></tr>";
*/
}