// 1. Zadatak:
// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
const numbers = [2, 5, 10, 3, 4, 8];

const kvadrati = numbers.map((element) => Math.pow(element, 2));
console.log(kvadrati);

// 2. Zadatak
// Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

const koreni = numbers.map((element) => +Math.sqrt(element).toFixed(2));
console.log(koreni);

// 4. Zadatak
// Kvadrirati one brojeve koje imaju index 0,3,5.

const numbers2 = [-8, -7, -12, 0, 5, 23, 61];

// 1. nacin
const squareSpecial = numbers2.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else {
    return element;
  }
});
console.log(squareSpecial);

// 2. nacin
const squareSpecial2 = numbers2.map((element, index) => {
  return index === 0 || index === 3 || index === 5 ? element ** 2 : element;
});
console.log(squareSpecial2);

// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi
// pocinjati velikim slovima.

// 2. Pomocu for petlje napraviti novi niz, koji ce sadrzati samo godine
// vece od 17.

niz1 = ["muhamed", "imran", "abdurahman", "harun"];
niz2 = niz1.map((element) => {
  return `${element[0].toUpperCase()}${element.slice(1, element.length)}`;
});
console.log(niz2);

// 2. Zadatak:
// 1. Nacin
const godine = [15, 14, 18, 18, 18, 17, 19, 19];

const punoletni = [];
for (let godina of godine) {
  if (godina > 17) {
    punoletni.push(godina);
  }
}

// 2. Nacin

// Na ovaj nacin nije moguce odraditi adekvatno zadatak jer
// map() metoda nam vraca novi niz sa istom duzinom kao originalni i
// otuda dobijamo undefined elemente.

// const punoletni2 = godine.map((element) => {
//   if (element > 17) {
//     return element;
//   }
// });
// console.log(punoletni2);
