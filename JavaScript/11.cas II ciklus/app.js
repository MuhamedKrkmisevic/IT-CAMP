let prom = 5;

let prom2 = "5";

console.log(typeof prom2);

console.log(prom == prom2);

console.log(prom === prom2);

console.log(prom);
console.log(prom2);

recenica =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let recenica5 = "";
for (let i = 0; i <= recenica.length; i++) {
  if (
    recenica[i] === "a" ||
    recenica[i] === "e" ||
    recenica[i] === "i" ||
    recenica[i] === "o" ||
    recenica[i] === "u"
  ) {
    recenica5 += recenica[i].toUpperCase();
  } else if (i === recenica.length) {
    recenica5 += ".";
  } else {
    recenica5 += recenica[i];
  }
}
console.log(recenica5);
