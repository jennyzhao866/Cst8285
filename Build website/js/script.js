
window.onload = function (e) {
  alert('a');


}

function listFunction() {

  document.getElementById("sedan").style.display = 'block';

  document.getElementById("suv").style.display = 'block';

  document.getElementById("coupe").style.display = 'block';

}
function sedanFunction() {
  
  document.getElementById("sedan").style.display = 'block';
  
  document.getElementById("suv").style.display = 'none';
  document.getElementById("coupe").style.display = 'none';

  // if (x.style.display === "none") {
  //   x.style.display = "block";
  //   alert ('block');
  // } else {
  //   x.style.display = "hiden";
  //   alert ('hiden');
  // }
}

function suvFunction() {



  document.getElementById("suv").style.display = 'block';

  document.getElementById("coupe").style.display = 'none';

  document.getElementById("sedan").style.display = 'none';
}
