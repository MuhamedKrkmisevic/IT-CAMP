// NASTAVAK METODA KOD STRINGOVA (2)

// Menjanje sadrzaja se moze izvrsiti koriscenjem replace () metode.

let recenica = "Nekad zelimo izmeniti sadrzaj nekim drugim.";

// Metoda prima dva argumenta . Prvi predstavlja rec koju zelimo da izmenimo , drugi movu rec
// koja ce se naci umesto stare.

let novaRecenica = recenica.replace("sadrzaj", "tekst");

console.log(novaRecenica);

let recenica2 =
  "Nekad da se na odredjenom mestu nadje sadrzaj koji nije isti sadrzaj koji je bio pre.";

//  novaRecenica2 ce zameniti samo prvu rec sadrzaja , recju teksta
let novaRecenica2 = recenica2.replace("sadrzaj", "tekst");

console.log(novaRecenica2);

// Koriscenjem Regular Ecpression mozemo dodatno definisati sta zelimo.
// novaRecenica3 ce zameniti svaku rec 'sadrzaj' recju 'tekst':
// Koristi se regular expression (g (Global Match))

let novaRecenica3 = recenica2.replace(/sadrzaj/g, "tekst");
console.log(novaRecenica3);

let recenica3 =
  "Nekad da se na odredjenom mestu nadje SADRZAJ koji nije isti sadrzaj koji je bio pre.";

let novaRecenica4 = recenica3.replace(/sadrzaj/g, "tekst");
console.log(novaRecenica4);

// JavaScript je case-sensitive programski jezik

// novaRecenica5 ce zameniti svaku rec 'sadrzaj' (bilo da je napisana velikkim ili malim slovima).
// recju 'tekst':
// Koristi se regular expression (i - insensitive)
// Menja se samo prva rec koja se poklapa.

let recenica4 =
  "Nekad zelimo da na odredjenom mestu nadje SAdrzAj koji nije isti koji je bio pre";
let novaRecenica5 = recenica4.replace(/sadrzaj/i, "teskt");

console.log(novaRecenica5);

//  Ako Hoceemo u istom momentu da zamenimo sve reci bez obzira na velika i mala slova
// mozem o iskorisiti vise regular expressions odjednom.

let novaRecenica6 = recenica4.replace(/sadrzaj/gi, "tekst");
console.log(novaRecenica6);

// Konertovanje stringa u velika slova:
// !    .toUpperCase()

let recenica5 =
  "Sta ako zelimo da cela recenica bude ispisana velikim slovima?";

console.log(recenica5.toUpperCase());

// Konvertovanje stringa u mala slova:
// .toLowerCase()

let recenica6 = "Sta ako zelimo da cela recenica  BUDE ISPISANA MALIM SLOVIMA?";
console.log(recenica6.toLowerCase());

// Jedan od nacina da spojimo dva stringa putem + operatora . Danas radimo drugi nacin :
// koriscenjem metode concat()

var sentence1 = "Ako predjemo prvi ciklus,";
var sentence2 =
  "nastavljamo sa ozbiljnijim bavljenjem JavaScript prograamskim jezikom.";

var sentence1And2 = sentence1.concat(sentence2);
console.log(sentence1And2);

// Putem concat(metode) mozemo spojiti vise stringova (ne samo dva).

sentence1And2 = sentence1.concat("  ", sentence2);
conseole.log(sentence1And2);

// Sve metode vezane za stringove nam vracaju novi string.
// One zapravo ne modifikuju postojeci

// Domaci zadatak
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu , zatim funkcija vraca ,
// datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisane velikim slovima , pola recenice malim
// 4. ako se u recenici nadje rec skola neka bude zamenjena recju fakultet.
// 5. neka bude ispisano prvih 10 karaktera unete recenice ,
// 6. neka bude ispisano poslednjih 10 karaktera unete recenice
