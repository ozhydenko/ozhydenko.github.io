var ApplyCode=function(library,code,text){
	try{
		eval((library+"\n"+code+"\n").replace(/(\/\/(^\n*)(\n))/g,""))
                return text
        }
	catch(error){
		return  error.name + ": " + error.message
	}
}

var ExecuteCodeEvent=function(self){
       var formobj=self.parentNode.parentNode
       formobj.destination.value=ApplyCode(formobj.library?formobj.library.value:"",formobj.code?formobj.code.value:"",formobj.source?formobj.source.value:"")
}

//document.texter.execute.onclick=function(){ExecuteCodeEvent(this)}
