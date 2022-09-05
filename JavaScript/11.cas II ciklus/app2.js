//  Funkcije

//  Funkcije predstavljaju blok koda koji se izvrsava samo prilikom pozivanja

// Nacini zapisivanja funkcija :
// Koriscenjem keyword (rezervisane reci) function

let prom = 25;

function nazivFunkcije() {
  return prom;
}

console.log(nazivFunkcije());

// Drugi primer

function zbirTriIPet() {
  return 3 + 5;
}

console.log(zbirTriIPet());

// Treci primer

// Prilikom definisanja funkcije u zagradu stavljamo (prema potrebi) parametre koje funkcija koristi unutar sebe

function zbirDvaBroja(prviBroj, drugiBroj) {
  return prviBroj + drugiBroj;
}

// Prilikom pozivanja funkcije u zagradi stavljamo argumente na osnovu kojih se funkcija izvrsava

console.log(zbirDvaBroja(5, 14));
