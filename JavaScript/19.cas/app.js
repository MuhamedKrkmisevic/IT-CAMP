// // function index() {
// //   let recenica = prompt("unesi tekst !");
// //   let zadnjiIndeks = recenica.lastIndexOf(" ");
// //   return `Mesto zadnjeg indeksa je ${zadnjiIndeks}`;
// // }
// // console.log(index());

// function prvaRec() {
//   let recenica = prompt("Unesi neki tekst");
//   let prva = recenica.indexOf(" ");
//   let recenica2 = "";
//   for (i = 0; i < prva; i++) {
//     recenica2 += recenica[i];
//   }
//   if (prva == -1) {
//     return `Duzina prvog stringa je ${recenica.length}`;
//   }
//   duzina = recenica2.length;
//   return `Duzina prvog stringa je ${duzina}`;
// }
// console.log(prvaRec());

const isPalindrom = function () {
  let A = prompt("unesite vas tekst");
  let B = prompt("unesi tekst");
  let duzina = A.length;
  let prvaRec = A.indexOf;
  let zadnjaRec = A.lastIndexOf(" ");
  for (i = 0; i < prvispace; i++) {
    prvaRec += A[i];
  }
  for (i = zadnjaRec + 1; i < B.length; i++) {
    zadnjaRec += B[i];
  }
  return `${prvaRec}${zadnjaRec}`;
};
console.log(isPalindrom());
