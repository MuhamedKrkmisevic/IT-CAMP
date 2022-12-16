// var myFunc = function (a, b) {
//   return a * b;
// };

// function myFunc() {
//   let broj = 4;
//   let predmet = "Stolice";
//   return `U prostoru imamo ${broj} ${predmet}`;
// }

// console.log(myFunc());

// Poznata je cinjenica da kada se izvrsi funkcija , sve njene lokalne
// promenljive pokupi "garbage" kolektor i one prestaju da postoje u memoriji.
// To nije slucaj ako postoji funkcija koja zahteva koriscenje promenljivih iz
// domena druge funkcije

// function myFunc() {
//   let broj = 4;
//   let predmet = "stolica";
//   function mySecondFunc(arg) {
//     return console.log(arg + broj);
//   }
//   mySecondFunc(10);
//   return `To je bio primer closure u JavaScript-u`;
// }
// console.log(myFunc());

// Closure je funkcija koja zahteva koriscenje promenljivih iz domena druge funckije.

function mySecondFunc() {
  console.log("Pocetak glavne funkcije.");
  let nesto = "kako ";
  function mojaDruga(arg) {
    return console.log(nesto + arg);
  }
  mojaDruga("ste");
  return `to je pozdrav`;
}
console.log(mySecondFunc());

function mojaFunkcija() {
  console.log("Pocetak glavne funkcije.");
  function mojaSporedna() {
    console.log("Ovo je radnja sporedne funkcije");
    return 5;
  }
  return mojaSporedna;
}
console.log(mojaFunkcija()());

// Setovi predstavljaju kolekciju unikatnih vrednosti .
// Svaka vrednost se pojavljuje samo jednom.

// Kreiranje seta :

const letters = new Set(["a", "b", "c", "d", "a"]);

console.log(letters);

// Metode:
// add() - dodaje novi element u setu

letters.add("m");
// delete() - brise specifican element u setu.
letters.delete("m");
console.log(letters);
// has() - vraca boolean da li se neka vrednost nalazi u setu
console.log(letters.has("a"));

// letters.forEach() - poziva callBack funkciju na svaki element

letters.forEach((element) => console.log(element));

// values()
console.log(letters.values());

// Napraviti funkciju koja iz datog niza vraca novi niz,brisuci duplikate originalnom.

function nizToSet() {
  const niz = [1, 2, 3, 4, 12, 1, 2, 3, 4, 5];
  const niz2 = new Set(niz);

  return [...niz2];
}
console.log(nizToSet());
