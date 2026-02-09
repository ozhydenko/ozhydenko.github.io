const btn = [...document.querySelectorAll('button')].find(b => b.textContent.trim() === 'Editovat')

if(btn && btn.classList.contains("p-button-warning")){
 var GetTimeStr=function(minutes){ return (Math.floor(minutes/60) % 24) + ":" + String(Math.floor(minutes) % 60).padStart(2, '0') }

 for(var i=0;true;++i){
  var startinput=document.getElementById("inpStart"+i)
  if(!startinput)break
  var endinput=document.getElementById("inpEnd"+i)
  if(!endinput)break
  var breakfrominput=document.getElementById("inpBrkFrom"+i)
  if(!breakfrominput)break
  var breaktoinput=document.getElementById("inpBrkTo"+i)
  if(!breaktoinput)break
  var oooworkinput=document.getElementById("inpOooWork"+i)
  if(!oooworkinput)break
  var reasoninput=document.getElementById("inpReason"+i)
  if(!reasoninput)break

  if (startinput.classList.contains("white") && endinput.classList.contains("white") && breakfrominput.classList.contains("white") && breaktoinput.classList.contains("white") && oooworkinput.classList.contains("white") && startinput.value=="" && endinput.value=="" && breakfrominput.value=="" && breaktoinput.value=="" && oooworkinput.value=="" && reasoninput.value==""){

   var starttime=Math.floor((Math.random()*(3.5*60)+7.5*60)/5)*5

   startinput.value=GetTimeStr(starttime)
   startinput.dispatchEvent(new Event('input'))

   endinput.value=GetTimeStr(starttime+9*60)
   endinput.dispatchEvent(new Event('input'))      

   starttime+=Math.floor((Math.random()*(2*60)+3*60)/5)*5

   breakfrominput.value=GetTimeStr(starttime)
   breakfrominput.dispatchEvent(new Event('input'))

   breaktoinput.value=GetTimeStr(starttime+60)
   breaktoinput.dispatchEvent(new Event('input'))
  }
 }
 btn.click()
}
