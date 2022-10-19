// JavaScript sortiranje nizova //
// sort() metoda - vrsi sortiranje niza abecedno.

const grupa = [
  "Talib",
  "Ahmed",
  "Mejra",
  "Muusa",
  "Amina",
  "Amina",
  "Abdurahman",
];
grupa.sort();
console.log(grupa);

// Za obrnuto sortiranje se koristi metoda reverse()
grupa.reverse();
console.log(grupa);
// reverse() okrece niz od poslednjeg ka prvom elementu.
// Ako zelimo da elementi budu poredjani (Z-A), onda treba primeniti
// sort() metodu, pa onda reverse() metodu.

let brojevi = [-56, 85, 61, -32, 78, 104];

// sort() metoda ne radi dobar posao kod brojeva, samim tim moramo kao argument
// staviti neku funkciju koja ce nam poredjati brojeve od najmanjeg ka najvecem,
// ili obratno.
// brojevi.sort();
console.log(brojevi);

// fora:
brojevi.sort(function (a, b) {
  // Anonymous function
  return a - b;
});

console.log(brojevi);

// Sortiranje niza od veceg ka manjem broju ide na slican nacin:
brojevi.sort((a, b) => b - a);
console.log(brojevi);

// Random sortiranje niza:
function random() {
  return 0.5 - Math.random();
}
brojevi.sort(random);
console.log(brojevi);

// Postoji nekoliko nacina da dobijemo najveci (najmanji) element niza.
// 1. Sortiranjem niza, zatim pristupamo najvecem, odnosno najmanjem elementu.
brojevi = [85, 61, 104, -32, -56, 78];
// Dobijanje minimuma:
function minimum(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

console.log(minimum(brojevi));

// Dobijanje maximuma:
function maximum(arr) {
  arr.sort((a, b) => b - a);
  return arr[0];
}

console.log(maximum(brojevi));

// 2. Primenom Math.max.apply() (Math.min.apply()):
// Dobijanje minimuma:
let minimum2 = Math.min.apply(null, brojevi);
console.log(minimum2);

// Dobijanje maximuma:
let maximum2 = Math.max.apply(null, brojevi);
console.log(maximum2);

// 3. Pravljenje funkcije koja nam vraca minimum (maximum):

const min = (arr) => {
  let minimum = Number.POSITIVE_INFINITY;
  for (number of arr) {
    if (number < minimum) {
      minimum = number;
    }
  }
  return minimum;
};
console.log(min(brojevi));

// Domaci:
// 1. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
// 2. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
// 3. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)

const firstTask = (arr) => {
  const parni = [];
  for (let broj of arr) {
    if (broj % 2 === 0 && !isNaN(broj)) {
      parni.push(broj);
    }
  }
  return parni;
};

console.log(firstTask([-66, -67, -93, -22, -35, 2, 4, 5, 7, 9, 88]));

const secondTask = (arr) => {
  const neparni = [];
  for (let broj of arr) {
    if (broj % 2 !== 0 && !isNaN(broj)) {
      neparni.push(broj);
    }
  }
  return neparni;
};

console.log(secondTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));

const thirdTask = (arr) => {
  const pozitivni = [];
  for (let broj of arr) {
    if (broj > 0 && !isNaN(broj)) {
      pozitivni.push(broj);
    }
  }
  return pozitivni;
};

console.log(thirdTask([-66, -67, -93, -22, -35, 2, "dfd", 4, 5, 7, 9, 88]));
