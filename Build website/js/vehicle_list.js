


function bFunction(text) {
  //alert(text);

 var all_vehicles = document.getElementsByClassName("vehicle");

 if(text=="All vehicle") {
  for(v of all_vehicles) {v.classList.remove("hide");v.classList.add("reveal");}
 }
 else {
  var vehicles = document.getElementsByName(text);
  for(v of all_vehicles) {v.classList.remove("reveal");v.classList.add("hide");}
  for(v of vehicles) {v.classList.remove("hide");v.classList.add("reveal");}
}
 
}

