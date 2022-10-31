// 2. Zadatak NAPRAVITI FUNKCIJU
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog
// niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

// const firstTask = (arr) => {
//   const DATA1 = [2, 26, 38, 75, 11, 29];
//   const DATA2 = ["a", "b", "c", "d", "e"];
//   const concated = DATA1.concat((DATA2) => {
//     // uslov ? stvar za izvrsavanje : stvar koja se inace izvrsava
//     return element % 2 === 0 ? concated : concated.unshift(10, 20);
//   });
//   return concated;
// };
// console.log(firstTask(DATA2));
// const sumAdult = (arr) => {
//   const DATA1 = [2, 26, 38, 75, 11, 29];
//   const DATA2 = ["a", "b", "c", "d", "e"];
//   {
//     return DATA1 + DATA2;
//   }if()
// };
// console.log(sumAdult());

const firstTask = (arr) => {
  const DATA1 = [2, 26, 38, 75, 11, 29];
  const DATA2 = ["a", "b", "c", "d", "e"];
  const filtered = arr.filter((element) => element % 2 === 0);
  const mapped = filtered.map((element) => {
    // uslov ? stvar za izvrsavanje : stvar koja se inace izvrsava
    return DATA1(element % 2 === 0)
      ? DATA1 + DATA2 / 2
      : mapped.unshift(10, 20);
  });
  return mapped;
};
console.log(firstTask(DATA1, DATA2));
