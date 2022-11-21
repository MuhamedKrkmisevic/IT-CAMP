const abdurahman = "Abdurahman";
const selmanovic = "Selmanovic";
const godine = 14;
const skola = "Bratstvo";

const person = {
  abdurahman: abdurahman,
  selmanovic: selmanovic,
  godine: godine,
  skola: skola,
};

console.log(person);

// Ako imamo isti name i value:
const person2 = {
  abdurahman,
  selmanovic,
  godine,
  skola,
};
console.log(person2);
// Destructuring:

const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
};
console.log(automobil.model);
const { marka, model } = automobil; // Destructuring
console.log(marka, model);
