// reduceRight() - isto kao reduce, samo sto ucitavanje niza ide sa desne strane.

const niz = [1, 2, 33, 4, 5];
const suma = niz.reduce((prev, curr) => prev + curr);

// every() metoda ispituje da li je svaki element niza
// prosao test. Rezultat je boolean(true ili false).

const godine = [15, 14, 18, 18, 18, 16, 19, 17, 19];
const isEveryAdult = godine.every((element) => element >= 18);
console.log(isEveryAdult);
const adultArr = godine.filter((element) => element >= 18);
const isEveryAdult2 = adultArr.every((element) => element >= 18);
console.log(isEveryAdult2);
// some() metoda ispituje da li bar jedan element niza zadovoljava odredjeni uslov. Takodje je boolean

const isSomeAdult = godine.some((element) => element >= 18);
console.log(isSomeAdult);

// find() metoda nam vraca  prvi element koji ispunjava odredjeni uslov.

const grupa = [
  "talib",
  "abdurahman",
  "harun",
  "amine",
  "muusa",
  "ahmed",
  "Muhamed",
  "imran",
];
const firstAdult = grupa.find((element) => element.length > 5);
console.log(firstAdult);

// findIndex() metoda nam vraca index prvog elementa koji je
// ispunio uslov zadat unutar funkcije.

const firstAdult2 = grupa.findIndex((element) => element.length > 5);
console.log(firstAdult2);

// Array.From() metoda nam vraca niz iz bilo kojeg objekta koji je iterirajuci (koji ima length svojstvo)
// Ova metoda nam vraca niz gde je svaki element jedan karakter stringa koji pretvaramo u niz.
const recenica = "Ovo mora biti niz";
const MustBeArray = Array.from(recenica);
console.log(MustBeArray);
