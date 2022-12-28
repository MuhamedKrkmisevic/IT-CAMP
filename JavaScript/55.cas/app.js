const randomObj = {
  name: "Elmaz",
  SName: "Niksic",
  city: "Novi Pazar",
  age: 26,
};

// destrukturizacija objekata - object destruction
// Razlaganje delova objekata na zasebne promenljive

// const { name, SName, city, age } = randomObj;
// console.log(name);
const newObj = {
  ...randomObj,
  age: 47,
};
console.log(newObj);

newObj.age === 27 ? console.log(newObj) : console.log("error");

// =   - imicijalizacija (dodela) vrednosti promenljivoj

// ==  - provera tacnosti

// === - provera tacnosti i tipa podatka

// Class based components su komponente bazirane na klasama i metodama

// += povecava i dodaje vrednost
// ++ increment (dodaje za 1)
