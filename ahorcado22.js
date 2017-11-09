//variable
var letraUS = prompt ("Introduce una letra:");
var numero=Math.random() * (122 - 97) + 97;
var letra = String.fromCharCode(numero);
var condicion=true;
//condicion
while (condicion) {

if (letraUS==letra){
  alert("Acertaste")
  condicion=false
}else if (letraUS!=letra) {
  alert("Fallaste")
  prompt("Introduce otra letra que fallaste:")
};
}
document.write(letra);
