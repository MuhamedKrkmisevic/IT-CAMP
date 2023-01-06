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

// Node je runtime koji vrsi egzekuciju i kompajlovanje javascript koda
// Node ima mnostvo svojih modula,najpoznatiji su fs(fileSystem) i http modul.

// Klase su izrada modela podataka unutar aplikacije (web ili bilo koje druge).
// Svaka klasa mora da ima metodu constructor(){} , a ona vrsi funkciju
// glavne funkcije (metode) unutar klase
// Pomocu constructor metode se inicijalizuju glavni podaci unutar klase
// Inicijalizaacija promenljivih i dodela vrednosti njima
// vrsi se pomocu this metode (npr. this.name)
// metode su funkcije unutar klase koje takodje mogu vrsiti
// inicijalizaciju promenljivih i obradu podataka
// Svaka klasa mora imati constructor metodu

// cd - change directory je komanda u terminalu
// koja sluzi za navigiranje kroz foldere unutar sistema
// ls - je komanda koja sluzi za izlistavanje
// fajlova i foldera unutar foldera
// mkdir - make directory je komanda koja sluzi
// za kreiranje novog direktorija ili foldera

// D - Document
// O - Object
// M - Model
// I sluzi za manipulaciju elementima html-a i css-a
// kroz JS kod
