// const isPalindrom = (broj) => {
//   const stringBroj = broj.toString();
//   let obrnutiBroj = "";
//   for (let i = stringBroj.length - 1; i <= 0; i--) {
//     obrnutiBroj += stringBroj[i];
//   }
//   const obrnutiBroj1 = +obrnutiBroj;
//   if (obrnutiBroj1 === broj) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrom(11));

// const hightestPalindrom3 = () => {
//   let palidroms = "";
//   for (let i = 100; i <= 999; i++) {
//     for (let j = 100; j <= 999; j++) {
//       if (isPalindrom(i * j) && !palidroms.includes(i * j)) {
//         palidroms.push(i * j);
//       }
//     }
//   }
//   palidroms.sort((a, b) => b - a);
//   return palidroms;
// };
// console.log(hightestPalindrom3());

const niz = ["a", "b", "c", "d", "e"];
for (let i = 1; i <= 10; i++) {
  for (let j of niz) {
    console.log(i + j);
  }
}
