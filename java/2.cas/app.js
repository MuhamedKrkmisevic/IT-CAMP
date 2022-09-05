for (let i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}
// let n = Number(prompt("Unesite neki prirodan broj: "));
// let suma = 0;
// let brojDeljivih = 0;

// if (isNaN(n) || n < 1) {
//   console.log("Niste uneli prirodan broj.");
// } else {
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0) {
//       suma += i;
//       brojDeljivih += 1;
//     }
//   }

//   console.log(
//     "Broj deljivih brojeva od 1 do " +
//       n +
//       " sa 5 je: " +
//       brojDeljivih +
//       ". " +
//       "Suma deljivih brojeva sa 5 je: " +
//       suma
//   );
// }
// for (let i = 99; i >= -99; i--) {
//   if (i % 4 === 0) {
//     console.log(i + 14);
//   }
// }
// let brojBrojeva = 0;
// let zbirBrojeva = 0;

// for (let i = 3; i < 18; i++) {
//   if (i % 3 === 0) {
//     brojBrojeva += 1;
//     zbirBrojeva += i;
//   }
// }
// aritSredina = zbirBrojeva / brojBrojeva;

// console.log("Aritmeticka sredina brojeva je: " + aritSredina);

// let n = Number(prompt("Unesite neki prirodan broj: "));
// let suma = 0;
// let brojDeljivih = 0;

// if (isNaN(n) || n < 1) {
//   console.log("Niste uneli prirodan broj.");
// } else {
//   for (let i = 1; i <= n; i++) {
//     if (i % 5 === 0) {
//       suma += i;
//       brojDeljivih += 1;
//     }
//   }

//   console.log(
//     "Broj deljivih brojeva od 1 do " +
//       n +
//       " sa 5 je: " +
//       brojDeljivih +
//       ". " +
//       "Suma deljivih brojeva sa 5 je: " +
//       suma
//   );
// }
// let n = Number(prompt("unesite neki broj"));
// let suma = 0;
// let brojDeljivih = 0;

// if (isNaN(n) || n < 1) {
//   console.log("Niste uneli pr broj");
// } else {
//   for (let i = 1; i <= n; i++) {
//     if (i % 4 === 0) {
//       suma += 1;
//       brojDeljivih += n;
//     }
//   }

//   console.log(
//     "Broj deljivih brojeva od 1 do " +
//       n +
//       " sa 5 je :" +
//       brojDeljivih +
//       " Suma deljivih brojeva sa 5 je :" +
//       suma
//   );
// }

let zbirBrojeva = 0;
let brojBrojeva = 0;

for (let i = 1; i < 30; i++) {
  if (i % 5 === 0) brojBrojeva += 1;
  zbirBrojeva += i;
}
aritSredina = zbirBrojeva / brojBrojeva;
console.log(" Aritmeticka sredina je :" + aritSredina);
