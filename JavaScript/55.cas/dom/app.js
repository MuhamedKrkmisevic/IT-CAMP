// CENTAR NIT
var nekiElement = document.getElementById("centarNit");
nekiElement.style.color = "red";
nekiElement.style.fontSize = "50px";

// Ime

var dobar = document.getElementById("ime"); // funkcija u js-u koja omogucava pristup elementu putem njegovog id-ja
dobar.style.color = "blue"; // style je nacin pristupa i izmene css-a elementa a color je atribut koji menjamo , moze biti bilo koji drugi
dobar.style.fontSize = "50px";

// Prezime

var prazan = document.getElementById("prezime");
prazan.innerText = prompt("Unesi nesto"); // innerText je nacin izmene ili popunjavanja texta unutar elementa
prezime.style.fontSize = "50px"; // promena velicine fonta kroz css

// Slika

var natureImg = document.getElementById("slika");
natureImg.style.borderRadius = "50%";
natureImg.style.width = "300px";
natureImg.style.height = "300px";
natureImg.addEventListener("click", () => {
  natureImg.style.display = "none";
  setTimeout(() => {
    natureImg.style.display = "block";
  }, 5000);
});

console.log(natureImg.getAttribute("src"));

// AddEventListener je funcikja koja se dodaje html elementu koji smo naznacili
// prati dogadjanja oko ili junutar naznacenog elementa
// i izvrsava funkciju koja mu je zadata
// prvi argument funkcije je event (sta treba korisnik da uradi)
// drugi argument je funkcija koju treba program da obavi

// getAttribute je funkcija koja uzima unete podatke atributa koji se nalaze
// unutar elementa koji smo naznacili
