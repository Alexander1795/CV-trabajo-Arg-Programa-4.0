
const button = document.getElementById('btn');
console.log(button); // 👉️ button#btn

// ✅ Works
button.onclick = function click() {
  console.log('Button clicked');
  document.getElementById("demo").innerHTML = "Hola chiche"
 }