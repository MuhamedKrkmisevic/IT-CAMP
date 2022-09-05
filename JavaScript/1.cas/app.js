document.getElementById("paragraf").innerHTML =
  "Ovo je paragraf od strane java scripta";

//   ispisati u konzoli recenicu:
console.log("Danas je bilo pretoplo .Cekamo septembar za nesto svezije vreme.");

// tipovi podataka u javascriptu:
//Za proveru tipa varijable (promenljive) u JavaScript
// postoje:
// 1 primitivni( primitive)
// 2 neprimitivni(none primitive)

// 1.1 String - Niz-karaktera koji se upisuje unutar navodnika.
//              On moze biti zapisan unutar obicnih ili duplih navodnika(nije bitno)
//              Stringovi mogu biti bilo koji karakteri A-Z, 0-9
//     Zapisivanje stringa:
// ("Danas je toplo");
// ("Danas je padala kisa ");
// `Danas je padao sneg.`; // Template literals
// String("Danas je duvao jak vetar.");

// 1.2 Number - Predstavlja broj u JavaScript-u.
//             On moze biti zapisan sa decimalom ili bez nje
//             JavaScript ne razlikuje tipove kod brojeva, vec su svi brojevi Number tipa.
//    Zapisivanje brojeva:

// 1.3 BigInt - Ovaj tip podatka nam sluzi za skladistenje brojeva cija vrednost prelazi granicu
//             Number tipa podatka
//    Zapisivanje velikih brojeva
// console.logtypeof
BigInt(919329831893281);

// 1.4 Boolean - Prestavlja logicki entitet i on moze imati dve vrednosti:7
//               1. true;
//               2. false.
//               Najveca primena ovog tipa podatka se nalazi u kondicionalima,
//               tj. u slucajevima ispitivanja da li je odredjeni uslov zadovoljen ili ne.
//     Zapisivanje Boolean-a:
// Boolean("Odredjeni uslov")  => kao izlaz dobijamo true ili false
// 1.6 null - Tip podatka null se javlja za nepostojecu ili nepromenljivu koja
//            nije validna .

// 1.7 Symbol - To je novi tip podatka u JavaScript-u.
//              koristi se za anonimne i jedinstvene vrednosti.

Symbol("Kako je bilo vreme?");

// 2. Ne primitivni tipovi podataka (non-primitive data types).
//    Primitivni tipovi podataka se koriste za skladistenje promenljivih (varijabli)
//    koje imaju jednu vrednost.
//    dok za promenljive koje sadrze vise vrednosti (ili kompleksne vrednosti)
//    koristimo Ne primitivne tipove podataka.

// Primeri ne primitivnih tipova podataka:

// 2.1  Arrayz (nizovi) - Nizovi se koriste za skladistenje vise podataka
//                        unutar jedne promenljive.
//                        nizovi u javascript-u imaju mogucnost skladistenja
//                        elemenata razlicitih tipova podataka.

// Zapisivanje nizova:
["Talib", "Muhamed", "Ahmed", "Mervan"][
  // Niz brojeva
  (15, 17, 18, 19, 18)
][
  // Niz koji u sebi sadrzi razlicite tipove podataka
  ("Talib", 15, false, "Ahmed", 19, true)
];
// 2.Nacin zapisivanja nizova ( nepreporucljiv nacin)
new Array(["Talib", 15, false]);

// 2.2 Objects - Objekti su Glavna stvar u programskom jeziku javascript-a.
//               Objekti sluze za skladistenje nekih podataka , i oni se zapisuju
//               po principu ime,vrednost(name,value) par.
//               OBjekti takodje mogu sadrzati razlicite tipove podataka.
//     Zapisivanje objekata :
// {
//   marka:"BMW",
//   godinaproizvodnje :2006,
//   boja: "crna",
//   kubikaza: "2000cc"
// }
// 2.Nacin zapisivanja objekata(Nepreporucljiv nacin)
new Object({ punoletnost: false, ime: "Ahmed", starost: 19 });
// 2.3 Set -  Setovi su slicni nizovima , sa razlikom kod zapisivanja
//            i izmedju ostalih, najbitnija karakteristika kod setova je
//            da oni ne mogu imati duplikate.
//     Zapisivanje setova :
new Set(["Jabuka", "sljiva", "kruska", "jagoda"]);

// 2.4 Maps - Mape predstavljaju ne primitivni tip podatka , koji je vrlo slican objektu .
//            Ali zapisivanje se izvrsava na nesto drugaciji nacin
//     Zapisivanje mape :
new Map(["Jabuka", 300], ["sljiva", 300], ["kruska", 300], ["jagoda", 1]);

// Treba imati na umu da svi tipovi podataka koji nisu primitivni tipovi podataka
// imaju object tip kada ispitujemo preko funkcije typeof.
