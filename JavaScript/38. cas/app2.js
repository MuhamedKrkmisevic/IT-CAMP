// OBJEKTI SU GLAVNA STVAR U JAVASCRIPTU.
// Objekti su promenljiva koje mogu sadrzati vise vrednosti .
// oni se zapisuju u name:value paru . Jedan takav par se zove svojstvo.

const car = {
  marka: "BMW",
  godiste: 2004,
};
console.log(car);

// Svojstvima objekta mozemo da pristupimo na 2 nacina :
// 1.
console.log(car.marka);
// 2.
console.log(car["marka"]);

// Objekti takodje mogu sadrzati metode.
// Metode su sadrzane unutar objekta kao definicija funkcije .

const person = {
  ime: "Muhamed",
  prezime: "Krkmisevic",
  godine: "17",
};
console.log(person);

// This predstavlja referencu na neki objekat.
// This nije promenljiva , vec keyword(rezervisana rec) u javaScriptu.
// Vrednost this-a se ne moze promeniti

// Napraviti objekat student koji ce da ima vrednosti (po zelji), svojstava:
// ime prezime broj indeksa ocene (niz svih ocena koje student ima u trenutnoj
//godini ), prosek ocena ( funckija koja na osnovu niza ocene vraca prosek datih ocena)
