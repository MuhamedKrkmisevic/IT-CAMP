// STRINGOVI

// STRINGOVI predstavljaju immutable promenljive ( promenljive koje ne mozemo da menjamo ).
// Ali obicno pri nekoj potrebi da izmenimo string cemo definisati novu promenljivu i dodeliti
// joj karaktere prema postojecoj ( obicno koriscenjem for petlje. )

// 1. Za pronalazenje duzine stringa se koristi metoda length
let recenica = "Danas je promenljivo vreme.";
const duzina = recenica.length;
console.log(duzina);

// Prilikom pisanja stringa mozemo naici na problem ako zelimo da se unutar stringa nadju navodnici.

let recenica2 =
  "Medicinska skola u Novom Pazaru se zove 'Dva heroja' naziv je dobila po herojima koji su izgubili svoje zivote prilikom spasavanja bebe.";
let recenica3 =
  'Medicinska skola u Novom Pazaru se zove "Dva heroja" naziv je dobila po herojima koji su izgubili svoje zivote prilikom spasavanja bebe.';
