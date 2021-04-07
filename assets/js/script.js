
var age = prompt("Quanti hanni hai?");
document.getElementById('eta').innerHTML = "Ciao. Hai " + age + " anni ";

var distance = prompt("Quanti chilometri devi percorrere?");
document.getElementById('distanza').innerHTML = " e vuoi percorrere " + distance + "km.";

var firstPrice = parseInt(distance) * 0.21;

var finalPrice;
if(age < 18){
  finalPrice = firstPrice / 100 * 80;
}
else if(age >= 65){
  finalPrice = firstPrice / 100 * 60;
}
else{
  finalPrice = firstPrice;
}
console.log(finalPrice);
document.getElementById('prezzo').innerHTML = "Secondo i nostri calcoli, devi pagare " + Math.round((finalPrice + Number.EPSILON) * 100) / 100 + "€";