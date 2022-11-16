// call(), apply(), bind() su fukncije koje koristimo u slucajevima
// kada zelimo da se neka funkcija primeni na objekat koji je izvan
// date funkcije.
// Prodjimo svaku od njih kroz sledeci primer

const person = {
  firstName: "Muhamed",
  lastName: "Krkmisevic",
  dateOfBirth: new Date(2005, 5, 13),
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

const person2 = {
  firstName: "Muusa",
  lastName: "Zecirovic",
  dateOfBirth: new Date(2006, 8, 12),
};
console.log(person2);

// Sintaksa za koriscenje ovih funkcija je:
// PRVO IDE POZIVANJE FUNKCIJE, PA ONDA KAO ARGUMENTI
// FUNKCIJE IDU:
// 1. OBJEKAT ZA KOJI ZELIMO DA SE PRIMENI DATA METODA;
// 2. EVELNTUALNE ARGUMENTE FUNKCIJE(ako funckija po definiciji zahteva).

person.fullName.call(person2);

const restoran = {
  hrana: "pizza",
  gosti: "zadovoljni",
  lokacija: "uzi centar grada",
};

function poruka(grad, drzava) {
  return `Vecerasnji specijalitet naseg restorana je ${this.hrana}. i sa 
    ponosom mozemo reci da su gosti ${this.gosti} . Nas restoran se nalazi u ${this.lokacija} u ${grad} ,${drzava}`;
}
const restoran2 = {
  hrana: "supa",
  gosti: "zgrozeni",
  lokacija: "Mur",
};
person.fullName.call(person2);
console.log(poruka.call(restoran, "Beograd", "Srbija"));
console.log(poruka.call(restoran2, "Novi Pazar", "Srbija"));

// apply() je vrlo slicna , s tim sto se argumenti funkcije stavljaju unutar niza.
console.log(poruka.apply(restoran, ["novi Pazar", "srbija"]));

// bind() funkcionise na nacin da prvo dodelimo datu funkciju sa objektom nekoj
// promenljivoj i onda tu promenljivu(funkciju) pozovemo sa potrebnim argumentima

const bindFunction = poruka.bind(restoran2);
console.log(bindFunction("Sarajevo", "Bosna i Hercegovina"));
