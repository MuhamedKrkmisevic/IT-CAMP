// reduce() metoda vrsi takodje iteraciju kroz svaki element, s tim sto
// ona kao rezultat daje jedan broj.
// Najcesca primena reduce() metode je kada zelimo sumu elemenata niza.

const korpa = [1600, 900, 1400, 220, 1490];

const zbir = korpa.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(zbir);

// U slucaju da kupujemo online i placa se postarina od 500rsd
// reduce() metoda dozvoljava initialValue , i ona se upisuje nakon funkcije.
// Zapravo , kao drugi (opcioni) argument reduce() metode.
// niz.reduce(function(){}, initial value)

// const onlineZbir = korpa.reduce((prev, curr) => prev + curr, 500);
// console.log(onlineZbir);

const godine = [18, 14, 19, 18, 17, 15, 20, 13];
// Npraviti funkciju koja vraca zbir godina koje su vece od 17
const sumAdult = (godine) => {
  const godine1 = godine
    .filter((element) => element > 17)
    .reduce((prev, curr) => prev + curr);
  return godine1;
};
console.log(sumAdult(godine));

function sumAdult2nd(arr) {
  const zbir = arr.reduce((prev, curr) => {
    if (curr >= 18) {
      return prev + curr;
    } else {
      return prev;
    }
  });
  return zbir;
}
console.log(sumAdult2nd(godine));
