const brojevi = [12, 20, 13, 27, 18, 43, 2];
// const nekiBrojevi = (arr) => {
//   const parniBrojevi = arr
//     .filter((element) => element % 2 === 0)
//     .map((element) => element * 2)
//     .reduce((prev, curr) => prev + curr);

//   return parniBrojevi;
// };
// console.log(nekiBrojevi(brojevi));
const nekiBrojevi = (arr) => {
  const parniBrojevi = arr
    .filter((element) => element % 2 === 0)
    .reduce((prev, curr) => prev + curr);

  return parniBrojevi;
};
console.log(nekiBrojevi(brojevi));

// 1. pomocu filter reduce i map metode
// pronaci parne brojeve pa ih pomnoziti
// sa dva i na kraj vratiti sumu

const nizBrojeva = [12, 20, 13, 27, 18, 43, 2];

const funkcija = (arr) => {
  const parni = arr
    .filter((value) => value % 2 === 0)
    .map((value) => value * 2)
    .reduce((prev, curr) => prev + curr);

  return parni;
};

console.log(funkcija(nizBrojeva));

// 2. za niz od 10 elemenata
// vratiti sumu parnih brojeva

const nizOd10El = [10, 25, 30, 45, 109, 290, 384, 465, 520, 650];

const funkcija1 = (arr) => {
  const parni = arr
    .filter((value) => value % 2 === 0)
    .reduce((prev, curr) => prev + curr);

  return parni;
};

console.log(funkcija1(nizOd10El));

// 3. u fibonacijevom nizu cije vrednosti ne prelaze 4 miliona pronaci sumu parnih elemenata
// fibonacijev niz je sastavljen na nacin da je element jednak zbiru prethodna dvaelemenata

const fibNiz = [1, 2];

const secondTask = (arr) => {
  let i = 2;
  while (fibNiz[i - 2] + fibNiz[i - 1] <= 4000000) {
    fibNiz.push(fibNiz[i - 2] + fibNiz[i - 1]);
    i++;
  }
  return fibNiz
    .filter((value) => value % 2 === 0)
    .reduce((prev, curr) => prev + curr);
};

console.log(secondTask(fibNiz));
