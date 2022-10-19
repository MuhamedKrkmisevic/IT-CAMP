// // preko delete keyword ili rezervisane reci mozemo izbrisati neki element niza.

// // const voce = ["jagoda", "banana", "mandarina", "ananas"];
// // let voce = ["jagoda", "banana", "mandarina", "ananas"];
// // ovaj nacin brisanja elementa u nizu nam ostavlja prazna mesta.
// // delete voce[2];

// // console.log(voce);
// // Preporucuje se koriscenje pop() metode ili push()

// // Spajanje nizova :
// // Za spajanje nizova se koristi concat()
// // concat() metoda pravi novi niz koji je sadrzan od elemenata onih nizova koji se spajaju.

// let voce = ["jagoda", "banana", "mandarina", "ananas"];
// let povrce = ["krastavica", "krompir", "luk"];

// // splice() metoda se koristi za dodavanje novih elemenata u nizu
// // splice() metoda uzima najmanje dva argumenta :
// // prvi argument predstavlja indeks na kojem ce da se vrse neke promene
// // (indeks elementa od kog ce biti izbrisano nekoliko elemenata, i od kog
// // ce se eventualno dodati nekoliko novih elemenata )
// // 2. argument predstavlja broj koliko se zapravo brise elemenata na
// // poziciji definisanoj na prvom argumentu
// // voce = ["jagoda", "banana", "mandarina", "ananas"];
// voce.splice(0, 4, "rumun", "srbin");
// console.log(voce);

const niz = [
  "imran",
  "Muhamed",
  "abdurahman",
  "amina2",
  "amina2",
  "mejra",
  "talib",
];

// niz.splice(3, 3);
// console.log(niz);

// niz.splice(0, 3);
// niz2 = niz.splice(0, 3);
// console.log(niz2);

niz.splice(3, 2, "harun", "muusa");
console.log(niz);
