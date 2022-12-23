// Promise je JavaScript obk=jekat koji predstavlja mesto za rezultate
// asinhone funkcije sve dok traje izvrsavanje asinhrone operacije.

// const imatiCas = new Promise((resolve, reject) => {
//   const response = 210;
//   if (response === 200) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// imatiCas
//   .then(() => console.log("odrzana je rec. imali smo cas"))
//   .catch(() => console.log("nismo imali cas"))
//   .finally(() => console.log("ovo ce se izvrsiti uvek"));

// Ispisati poruku da li je dobijen niz ili nije
const isArray = new Promise((resolve, reject) => {
  const response = "Ronaldo dobar covek";
  if (response === Array) {
    resolve();
  } else {
    reject();
  }
});
isArray
  .then(() => console.log("ovo je array"))
  .catch(() => console.log("nije array"))
  .finally(() => console.log("ronaldo je goat, al je i ljep od coveka"));

// domaci

// Napraviti promise koji proverava da li je neki objekat ispunio
// uslove da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then funkcija vraca poruku vi ste punoletni
// U slucaju da osoba nije punoletna catch funkcija vraca niste punoletni
