// function task() {
//   const duzina = recenica.length;

//   for (let i = 0; i < duzina / 2; i++) {
//     if (recenica[i] !== recenica[duzina - 1 - i]) {
//       return "Dati tekst nije palindrom , cccc :( ";
//     }
//   }
//   return "Dati tekst jeste palindrom , svaka cast :D !";
// }

// const recenica = prompt("Unesi tekst: ");

// console.log(task());
const isPalindrom = function () {
  let recenica = prompt("unesite vas tekst");
  let duzina = recenica.length;
  let obrnutaRecenica = "";

  for (i = duzina - 1; i >= 0; i--) {
    obrnutaRecenica += recenica[i];
  }
  if (obrnutaRecenica === recenica) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrom());
