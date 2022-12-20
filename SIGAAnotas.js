// Este programa foi feito por Olexandr Zhydenko para usar em SIGAA
// Se encontrar algum problema favor me enviar um email para olexandr.zhydenko@ufabc.edu.br


function CarregarNotas(){
 var Stripdiactricandcase=function(s){return s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toUpperCase()}

 var listo=document.getElementsByName("notas")[0].value.split("\n")
 var lista=listo.map(Stripdiactricandcase)
 
 for(var alunoObj,a=0;alunoObj=J('#linha_'+a)[0];++a){
 
  var alunoNome=Stripdiactricandcase(alunoObj.cells[2].innerText)
  var alunoRA=alunoObj.cells[1].innerText.replace(/[^\d]/g,"")

  var l=-1
  if(alunoNome||alunoRA)
  for(var i=lista.length;i-->0;){
   if(lista[i].search(alunoRA)>=0||lista[i].search(alunoNome)>=0){
    if(l<0)l=i
    else{l=-1; break}
   }
  }
  if(l>=0){
   var alunoinf=lista[l].replace(/[\t; ]+/g," ").split(" ")

   var faltas=0
   var nota=-1                        
   for(var i=alunoinf.length;i-->0;){
    var f=+alunoinf[i]
    if(f){
     if(alunoRA==f)break
     if(f>faltas)faltas=f
    }else if(alunoinf[i].length==1){
     var n="OFDCBA".search(alunoinf[i])
     if(n>-1){nota=n; break}
    }
   }
   
   var el=getEl(alunoObj)
   el.getChildrenByClassName("faltas")[0].dom.value=faltas
   el.getChildrenByClassName("comboConceito")[0].dom.value=nota
   situacaoConceito([alunoObj],false)
   listo.splice(l, 1)
  }

 }

 document.getElementsByName("notas")[0].value=lista.join("\n")

}

var MyInterfaceDiv=document.getElementsByClassName("descricaoOperacao")
if(MyInterfaceDiv.length)MyInterfaceDiv[0].innerHTML='<form name="manualinput"><input type="button" onClick="CarregarNotas()" value="Carregar notas e faltas"><textarea type="text" style="width:100%;" rows=30 name="notas"></textarea></form>'
