const niz = [-9, -78, 4, 17, -22, -5, 7, 6, 10, 18];
// const firstTask = (arr) => {
//   const filtered = arr.filter((element) => element > 2);
//   const mapped = filtered.map((element) => {
//     // uslov ? stvar za izvrsavanje : stvar koja se inace izvrsava
//     return element < 8 ? (element * 4) / 2 : element * 7;
//   });
//   return mapped;
// };
// console.log(firstTask(niz));

// const firstTaskS = (arr) => {
//   const lessThan10 = arr
//     .filter((element) => element > 2)
//     .map((element) => {
//       return element < 8 ? (element * 4) / 2 : element * 7;
//     })
//     .filter((element) => element < 10);
//   return lessThan10;
// };
// console.log(firstTaskS(niz));

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];
const secondTask = (arr1, arr2) => {
  const newArr = arr1.concat(arr2);
  const newArr2 = newArr.filter((element) => element % 2 === 0);
  newArr.unshift(10, 20);
  return newArr + newArr2;
};
console.log(secondTask(DATA1, DATA2));
