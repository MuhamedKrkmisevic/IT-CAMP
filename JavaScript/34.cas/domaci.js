let godine = [1, 29, 25, 67, 3, 4, 56, 57, 90];
const duzina = godine.length;
const zbir = godine.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log(zbir / duzina);

function milToKm() {
  niz1 = [1, 29, 25, 67, 3, 4, 56, 57, 90];
  return niz1.map((element) => element * 1.609);
}
console.log(milToKm());
