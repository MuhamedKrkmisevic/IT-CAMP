// split() metoda ce izvrsiti konverzaciju stringa u niz (Array).

var recenica = " Zelimo izvrsiti konverzaciju ove recenice u niz";
var recenica2 =
  "Ako bi se ,desilo da na pocetku, casa dodju svi na vreme, \
to bi bilo cudo, koje do tog trenutka nismo videli , mada \
je zadovoljavajuce, da svakom casu prisustvuje, vecina polaznika kursa";

// Izostavljajuci argument metode split ce se izvrsiti konverzija datog stringa u nz koji ima jedan element

var niz1 = recenica.split();
console.log(niz1);

// Ako je argument string "," onda cemo dati string pretvoriti u niz koji je podeljen na elemente koje razdvajaju zarezi.
var niz2 = recenica2.split(",");
console.log(niz2);

// Sledeci primer ce od svakog karaktera stringa praviti jedan element novonastalog niza
var niz3 = recenica.split("");
console.log(niz3);

// Postoje 4 JavaScript search metode:
// 1. indexOf ()
// indexOf() metoda nam vraca index pocetne reci koju trazimo

var recenica =
  " Turkey may be fmaous for its kebabs , but the popular dish is just the tip of the iceberg when";

let index1 = recenica.indexOf("kebabs");
console.log(index1);

// Ako trazimo indeks nepostojeceg stringa rezultat ce biti -1
let index2 = recenica.indexOf("pizza");
console.log(index2);

// 2. lastIndexOf()
// lastIndexOf() metoda nam vraca index poslednje ponavljajuce reci u stringu
let index4 = recenica.indexOf("the");
let index3 = recenica.lastIndexOf("the");
console.log(index3 + "\n" + index4);

let index5 = recenica.lastIndexOf("pizza");
console.log(index5);

// search() metoda nam vraca indeks trazenog stringa:
var recenica =
  " Turkey may be fmaous for its kebabs , but the popular dish is just the tip of the iceberg when";

var index8 = recenica.search("the");
console.log(index8);

// match() metoda nam vraca niz.

var matchingThe = recenica.match("the");
console.log(matchingThe);

// includes() nam vraca boolean :

var recenica = "Jos najvise jedan cas cemo raditi string metode.";
var index11 = recenica.includes("jedan");

iznos = float(input())
dinari = math.floor(iznos)
pare = round((iznos - math.floor(iznos))) * 100.0)
print(dinari)
print(pare)

const zadatak = function{
  let zapreminaFlase = prompt(Number("unesi zapreminu flase"))
  
  
}