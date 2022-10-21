// // JavaScript Array Iteration //

// // Array Iteration metode prolaze kroz svaki element niza.

// // forEach() metoda - poziva funkciju za svaki element niza.

// niz = ["Imran", "Talib", "Abdurahman", "Ahmed", "Muhamed"];

// niz.forEach((element) => console.log(element)); // Menja for petlju za dati niz

// for (let element of niz) {
//   console.log(element);
// }

// niz.forEach((element, index, array) => console.log(element, index, array));

// map() metoda - kreira novi niz  tako sto se iterira niz na koji se primenjuje
// metoda .
// vazno je napomenuti da map() metoda ne menja originalni niz.
// const brojevi = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];
// const funkcija = (arr) => {
//   let brojevi2 = [];
//   for (let number of arr) {
//     brojevi2.push(number + 2);
//   }
//   return brojevi2;
// };
// console.log(funkcija(brojevi));
// niz = ["Imran", "Talib", "Abdurahman", "Ahmed", "Muhamed"];
// console.log(niz.map((element) => element + "_prezime"));
// let noviNiz = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];
// const noviNiz1 = noviNiz.map(function (element) {
//   if (element === Number.POSITIVE_INFINITY) {
//     element.push(element * element);
//   }
//   return noviNiz1;
// });
// console.log(noviNiz1);

const brojevi = [4, -6, 12, 31, -21, 13, 6, 202, 34.5];
const funkcija = (arr) => {
  let brojevi2 = [];
  for (let element of arr) {
    if (element > 0) {
      return element ** 2;
    } else {
      return element;
    }
  }
  return brojevi2;
};
console.log(funkcija(brojevi));
