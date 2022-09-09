//  TRUTHY AND FALSY VALUES

let isSunny = true;
// if (isSunny === true) {
//   console.log("Napolje je suncano vreme . Ponesite naocare.");
// } else if (isSunny === false) {
//   console.log("Napolju je oblacno vreme.");
//}

if (isSunny) {
  console.log("Napolje je suncano vreme . Ponesite naocare.");
} else if (!isSunny) {
  console.log("Napolju je oblacno vreme.");
}

// Sve FALSY vrednosti su :
// 1. false
// 2. 0
// 3. -0
// 4. 0n
// 5. ""
// 6. null
// 7. undefined
// 8. NaN

// Ispitati da li je vrednost koju unosi korisnik TRUTHY ili FALSY:
const vrednost = +prompt("Unesite neku vrednost");
function truthyOrFalsy() {
  if (vrednost) {
    return "Vrednost je truthy";
  } else {
    return "Vrednost je falsy";
  }
}

console.log(truthyOrFalsy());
