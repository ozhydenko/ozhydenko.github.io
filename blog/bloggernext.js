if (typeof(next_memory) == "undefined") next_memory = 0;
{
   var spans = document.getElementsByTagName("span");
   var number = 0;
   for(var i=0; i < spans.length; i++){
      var c = " " + spans[i].className + " ";
      if (c.indexOf("fullpost") != -1)number++;
   }
   if(number != next_memory)document.write("</span><span>");
   next_memory = number;
}
