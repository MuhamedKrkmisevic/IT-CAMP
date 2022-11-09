// callBack funkcija predstavlja funkciju koja se nadje
// kao argument neke druge funkcije ili metode

// let talib = "TAlib";
// function main(func) {
//   console.log("ovo je kod koji se izvrsava unutar glavne funkcije.");
//   func(talib);
// }

// // callback funkcija

// function callBack(arg1) {
//   console.log(`Pozdrav ljudi, ja sam novi clan grupe, moje ime je  ${arg1} `);
// }
// main(callBack);

// Napraviti glavnu funkciju koja ispituje poruku da se radi o glavnoj funkciji, ali ispod toga
//neka se izvrsi pozivanje callback funkcije koja ima
//zadatak da izracuna aritmeticku sredinu 3 broja koji predstavljaju argumente te callback funkcije.

function main(func) {
  console.log("ovo je kod koji se izvrsava unutar glavne funkcije.");
  func(4, 14, 24);
}

// callback funkcija

function callBack(arg1, arg2, arg3) {
  let ukupni = ((arg1 + arg2 + arg3) / 3).toFixed(2);
  console.log(`Aritmeticka sredina datih brojeva je ${ukupni}`);
}
main(callBack);
