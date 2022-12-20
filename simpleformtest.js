// Este programa foi feito por Olexandr Zhydenko para usar em SIGAA
// Se encontrar algum problema favor me enviar um email para olexandr.zhydenko@ufabc.edu.br

String.prototype.stripdiactricandcase=function(){return this.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toUpperCase()}

function CarregarNotas(){
 
 document.getElementsByName("notas")[0].value="!"

}

var MyInterfaceDiv=document.getElementsByClassName("descricaoOperacao")
if(MyInterfaceDiv.length)MyInterfaceDiv[0].innerHTML='<form name="manualinput"><input type="button" onClick="CarregarNotas()" value="Carregar notas e faltas"><textarea type="text" style="width:100%;" rows=30 name="notas"></textarea></form>'
