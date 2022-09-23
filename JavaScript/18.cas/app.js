// function nekaRecenica() {
//   let recenica = prompt("Unesite neku recenicu!");
//   let brojEmova = 0;
//   let duzina = recenica.length;

//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] === "m" || recenica[i] === "M") {
//       brojEmova++;
//     }
//   }
//   return `Broj slova M se pojavljuje ${brojEmova} puta.`;
// }

// console.log(nekaRecenica());

// function nekeCifre() {
//   let recenica = prompt("Unesite neku recenicu.");
//   let brojac = 0;
//   let duzina = recenica.length;

//   for (let i = 0; i < duzina; i++) {
//     if (
//       recenica[i] === "1" ||
//       recenica[i] === "2" ||
//       recenica[i] === "3" ||
//       recenica[i] === "4" ||
//       recenica[i] === "5" ||
//       recenica[i] === "6" ||
//       recenica[i] === "7" ||
//       recenica[i] === "8" ||
//       recenica[i] === "9" ||
//       recenica[i] === "0"
//     ) {
//       brojac++;
//     }
//   }
//   return `Broj cifara je ${brojac} `;
// }
// console.log(nekeCifre());

// function nekeSlova() {
//   let recenica = prompt("Unesite neku recenicu.");
//   let brojac = 0;
//   let duzina = recenica.length;

//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
//       brojac++;
//     }
//   }
//   return `Broj slova je ${brojac} `;
// }
// console.log(nekeSlova());

function nekaSlova() {
  let recenica = prompt("Unesite neku recenicu.");
  let brojac = 0;
  let brojac2 = 0;
  let duzina = recenica.length;

  for (let i = 0; i < duzina; i++) {
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
      brojac++;
    } else if (
      recenica[i] === recenica[i].toUpperCase() &&
      recenica[i] !== " "
    ) {
      brojac2++;
    }
  }
  if (brojac > brojac2) {
    return `U recenici ima vise malih slova. `;
  } else if (brojac2 > brojac) {
    return `U recenici ima vise velikih slova .`;
  }
}
console.log(nekaSlova());
