// JSON - JavaScript object notation

// najcesce se koristi prilikom slanja podataka sa servera do web stranice.

// Sintaksa vrlo slicna objektu u JavaScriptu:

// Objekat u JavaScriptu:
// const person = {
//   ime: "Muhamed",
//   prezime: "Krkmisevic",
//   godine: "17",
// };
// console.log(person);

// JSON

//   const person2 = {
//     "ime": "Muhamed",
//     "prezime": "Krkmisevic",
//     "godine": "17",
//   };
//   console.log(person2);

// Objekti su promenljivi ! (mutable)

const person = {
  JMBG: 1306005783971,
  firstname: "Muhamed",
  lastname: "Krkmisevic",
};
console.log(person);

// Bilo koja promena na x objekat ce takodje promeniti person objekat.
// Ovo vazi za neprimitivne tipoe podataka , tj. novoj promenljivoj x
//dodeljujemo referencu na objekat person (a ne vrednost)
// Identicko izjednacavanje.
const x = person;
console.log(x);
x.firstname = "Ahmed";
console.log(x);

// Brisanje svojstva iz objekta se vrsi preko delete keyword-a:
delete person.JMBG;
console.log(person);

// delete brise i name i value

// Vrednost u objektu moze biti:
// neki drugi objekat,
// niz,
// metoda(funkcija),....

//JSON.stringify() metoda nam sluzi za prevodjenje objekta u JSON, nakon toga JSON formata u string.

const stringobj = JSON.stringify(person);
console.log(stringobj);
// JSON.parse() nam vraca ako moze objekat iz poslatog argumenta
console.log(JSON.parse(person));

// Domaci zadatak

// Unutar postojeceg objekta dodati nova svojstva
// 1. Trenutna brzina
// 2. Maksimalna brzina 260
// 3. povecanje brzine (metoda koja uzima jedan argument)
// 4. smanjenje brzine (metoda koja uzima jedan argument)
