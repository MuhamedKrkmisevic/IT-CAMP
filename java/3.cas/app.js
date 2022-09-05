// // let recenica =
// //   "Za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa.";
// // let rec = "Danas";

// // // Pristupanje karaktera ide preko indeksa.
// // // INDEKSIRANJE KRECE OD 0(NULE)
// // // Kad se radi o stringovima krecemo od nule pa sve do (ukupna duzina - 1).

// // // Pristupanje trecem slovu nase reci:

// // let treciKarakter = rec[2];
// // console.log(treciKarakter);

// // // Prevesti rec u sva velika slova
// // // Za ovaj zadatak se koristi metoda toUpperCase()
// // let nova_rec = rec.toUpperCase();
// // console.log(nova_rec);

// // // Za izracunavanje duzine stringa se koristi metoda length
// // let duzinaRecenice = recenica.length;
// // console.log(duzinaRecenice);
// // // Ispisati duzinu reci:
// // console.log(rec.length);

// // Ispisati recenicu tako da svaki karakter ide jedan ispod drugog.
// let recenica2 = "Danas je bilo promenljivo vreme.";

// for (let i = 0; i < recenica2.length; i++) {
//   console.log(recenica2[i]);
// }

// // Ispisati novu recenicu gde ce svaka rec pocinjati velikim slovom.
// recenica =
//   "za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa";

// let recenica3 = "";

// for (let i = 0; i < recenica.length; i++) {
//   if (i === 0) {
//     recenica3 += recenica[i].toUpperCase();
//   } else if (recenica[i - 1] === " ") {
//     recenica3 += recenica[i].toUpperCase();
//   } else {
//     recenica3 += recenica[i];
//   }
// }

// console.log(recenica3);

// // Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.
// recenica =
//   "za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa";

// //  Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

// let recenica4 = "";
// for (let i = 0; i <= recenica.length - 1; i++) {
//   if (recenica[i] === " ") {
//     continue;
//   } else {
//     recenica4 = recenica4 + recenica[i];
//   }
// }

// console.log(recenica4);

// recenica =
//   "Banana je omiljeno voce Talibovo. Banana nam stize iz Paname. I banane su jako zdrave.";
// let recenica5 = "";
// // Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ako se posle slova "a"
// //  nalazi slovo "n" pisace "d" umesto a.

// for (let i = 0; i <= recenica.length - 1; i++) {
//   if (recenica[i] === "a" && recenica[i + 1] === "n") {
//     recenica5 += "d";
//   } else if (recenica[i] === "a") {
//     recenica5 += "t";
//   } else {
//     recenica5 += recenica[i];
//   }
// }

// console.log(recenica5);

// let rec = "Danas";
// let treciKarakter = rec[2];
// let cetvrtiKarakter = rec[3];
// console.log(treciKarakter);

// console.log(cetvrtiKarakter);

// let pakas = "rifko";
// let nova_muda = pakas.toUpperCase();
// console.log(nova_muda);

// let recenica6 = "Danas je bilo promenljivo vreme.";

// for (let i = 0; i < recenica6.length; i++) {
//   console.log(recenica6[i]);
// }

// let mudan = "danas me je boleo kurac za sve ";
// for (let i = 0; i < mudan.length; i++) {
//   console.log(mudan[i]);
// }
// let mudan1 = "danas me je boleo kurac za sve ";
// let rilje = mudan1.toUpperCase();
// console.log(rilje);
// // for (let i = 0; i < rilje.length; i++) {
//   console.log(rilje[i]);
// }

// recenica = "danas duvamo travu sa nasim kumovima";

// let duvan = " ";

// for (let i = 0; i <= recenica.length; i++) {
//   if (i === 0) {
//     duvan += recenica[i].toUpperCase();
//   } else if (recenica[i - 1] === " ") {
//     duvan += recenica[i].toUpperCase();
//   } else {
//     duvan += recenica[i];
//   }
// }
// console.log(duvan);

// rekic = "familija nokic cojki kurac";

// let muriz = " ";

// for (let i = 0; i < rekic.length; i++) {
//   if (i === 0) {
//     muriz += rekic[i].toUpperCase();
//   } else if (rekic[i - 1] === " ") {
//     muriz += rekic[i].toUpperCase();
//   } else {
//     muriz += rekic[i];
//   }
// }
// console.log(muriz);

recenica = "za nedelju dana je test, gde zavrsavamo prvi ciklus murga";

// let recenica4 = " ";

for (let i = 0; i <= recenica.length - 1; i++) {
  if (recenica[i] === " ") {
    continue;
  } else {
    recenica4 = recenica4 + recenica[i];
  }
}

console.log(recenica4);

recenica = "Muhamed mrzi bicu!";
let recenica5 = " ";
for (let i = 0; i < recenica.length; i++)
  if (recenica[i] === "m" && recenica[i + 1] === "r") {
    recenica5 += "v";
  } else if (recenica[i] === "r") {
    recenica5 += "o";
  } else if (recenica[i] === "b") {
    recenica5 += "A";
  } else if (recenica[i] === "c") {
    recenica5 += "s";
  } else if (recenica[i] === "z") {
    recenica5 += "l";
  } else if (recenica[i] === "!") {
    recenica5 += " ♡";
  } else {
    recenica5 += recenica[i];
  }

console.log(recenica5);

recenica = "Muhamed mrzi bicu!";
// let recenica9 = " ";

// for (let i = 0; i <= recenica.length - 1; i++) {
//   if (recenica[i] === " ") {
//     continue;
//   } else {
//     recenica9 = recenica9 + recenica[i];
//   }
// }
// console.log(recenica9);

let recenica3 = " ";

for (let i = 0; i < recenica.length; i++) console.log(recenica[i]);
if (i === 0) {
  recenica3 += recenica[i].toUpperCase();
} else if (recenica[i - 1] === " ") {
  recenica3 += recenica[i].toUpperCase();
} else {
  recenica3 += recenica[i];
}

console.log(recenica3);

let obj = {
  ime: "Moje ime",
  prezime: "Moje prezime",
};

console.log(obj instanceof Object);
let n = Number(prompt("Unesite neki prirodan broj: "));
let suma = 0;
let brojDeljivih = 0;

if (isNaN(n) || n < 1) {
  console.log("Niste uneli prirodan broj.");
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      suma += i;
      brojDeljivih += 1;
    }
  }

  console.log(
    "Broj deljivih brojeva od 1 do " +
      n +
      " sa 5 je: " +
      brojDeljivih +
      ". " +
      "Suma deljivih brojeva sa 5 je: " +
      suma
  );
}
//
recenica =
  "za nedelju dana je test, gde zavrsavamo prvi ciklus od 3 ovog kursa";

//  Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

let recenica4 = "";
for (let i = 0; i <= recenica.length - 1; i++) {
  if (recenica[i] === " ") {
    continue;
  } else {
    recenica4 = recenica4 + recenica[i];
  }
}

console.log(recenica4);
