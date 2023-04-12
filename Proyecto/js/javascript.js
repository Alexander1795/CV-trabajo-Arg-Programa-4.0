
const button = document.getElementById('btn');
console.log(button); // iniciacion de button#btn


button.onclick = function click() {
  console.log('Button clicked');
  document.getElementById("demo").innerHTML = "Gran motivacion para seguir perfeccionando habilidades y crecer porfesionalmente sin miedo a equivocarme con un alto grado de responsabilidad"
}