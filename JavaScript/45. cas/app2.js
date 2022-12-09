const person = {
  firstName: "Imran",
  lastName: "hazirovic",
};
console.log(person);

// Svi objekti u JavaScriptu su povezani sa nekim Prototype objektom, tako da mozemo reci da svaki objekat ima prototip
// Prototype je objekat koji sadrzi svojstva i metode( properties and methods)

// 2 Nacina pravljenja sablona za objekte:

// 1. Constructor function (Konstruktor funkcija)

// function User(firstName, lastName, score) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.score = score;
// }

// const imran = new User("Imran", "Hazirovic", 4);
// console.log(imran);

// User.prototype.incrementscore = function () {
//   this.score += 1;
// };
// imran.incrementscore();
// console.log(imran);

// const vahid = new User("Vahid", "Gasanin", 2);
// console.log(vahid);
// vahid.incrementscore();
// console.log(vahid);

// Napraviti constructor function za objekte koji imaju ,
// marka, boja ,godinaProizvodnje,udaran.
// Nakon toga napraviti prototype funkciju za sve objekte napravljene preko
// tog konstruktora, koji pretvara udaran iz false u true.

function User2(marka, boja, godinaProizvodnje, udaran) {
  this.marka = marka;
  this.boja = boja;
  this.godinaProizvodnje = godinaProizvodnje;
  this.udaran = udaran;
}
User2.prototype.changeUdaran = function () {
  this.udaran = true;
};
const merc = new User2("GT63S", "Bela", "2023", false);
merc.changeUdaran();
console.log(merc);
