//                  Operatori u JavaScript_u
// Operatori u javaScript_u se dele na sledece:
//  1. Aritmeticki operatori;
//  2. Operatori dodele vrednosti;
//  3. JavaScript string operatori;
//  4. Operatori poredjenja;
//  5. Logicki operatori;
//  6. Tipovni operatori.

//  1. Aritmeticki operatori;
//  + Sabiranje:
console.log(5 + 2);
//  - Oduzimanje:
console.log(5 - 2);
//  * Mnozenje:
console.log(5 * 2);
//  ** Stepenovanje
console.log(5 ** 2);
console.log(2 ** 3);
//  / Deljenje:
console.log(10 / 2);
// % Moduo:
console.log(5 % 2);
console.log(12 % 2);
console.log(13 % 5);
// ++ Povecanje za 1:
let x = 5;
x++;
console.log(x);
// -- Smanjenje za 1:
let y = 5;
y--;
console.log(y);

//  2. Operatori dodele vrednosti;
// = Jednakost
let a, b;
a = 10;
b = a;
console.log(a);
console.log(b);
// +=
let c = 15;
c += 5; // c = c + 5
console.log(c);
// -=
var d = 15;
d -= 5;
console.log(d);
// *=
var d = 15;
d *= 5;
console.log(d);
// /=
var d = 15;
d /= 5;
console.log(d);
// %=
var d = 15;
d %= 5;
console.log(d);
// **=
var d = 15;
d **= 5; // d = 15 ** 5
console.log(d);

//  3. JavaScript string operatori;
// Za spajanje stringova mozemo iskoristiti + operator.
// Ako izvrsimo dodavanje stringa nekom broju (broja nekom stringu) preko + operatora dobicemo string.
let m, n;
m = "Danas je bilo";
n = "lepo vreme.";
console.log(m + " " + n);
console.log(55 + m);

// Neke karakteristike vezane za +,-,*,/:
console.log(5 + "5");
console.log(5 - "4");
console.log(5 - "4asd4"); // uvek u slucaju nemogucnosti kovertovanja nekog stringa u broj, JavaScript nam vraca NaN.
console.log(5 * "4");
console.log(5 / "4");
console.log(5 / "danas");

// 4. Operatori poredjenja;

// == - Proverava jednakost
let r, t;
r = 56;
t = 56;
console.log(r == t);

// === - Proverava jednakost vrednosti i tipa
let prom1, prom2;
prom1 = 14;
prom2 = "14";
// console.log(prom1 == prom2); bolje je koristiti operator ===
console.log(prom1 === prom2);

//!= - Proverava nejednakost vrednosti
let prom3, prom4;
prom3 = 25;
prom4 = "25";
console.log(prom3 != prom4);

// !== - PRove
let prom5, prom6;
prom5 = 25;
prom6 = 25;
console.log(prom5 !== prom6);

let prom7, prom8;
prom7 = 26;
prom8 = "25";
console.log(prom7 !== prom8);

// > - Proverava da li je prva vrednost veca od druge

let prom9, prom10;
prom9 = 52;
prom10 = 25;
console.log(prom9 > prom10);

// < znaaaas

let prom11, prom12;
prom9 = 52;
prom10 = 25;
console.log(prom9 < prom10);

// ? - terinarni operatori

// 5. Logicki operatori;

// && - Logicko i
let var1, var2;
var1 = 40;
var2 = 17;
console.log(var1 > 20 && var2 > 20);
// || - Logicko ili
let var3, var4;
var3 = 40;
var4 = 17;
console.log(var3 > 20 || var4 > 20);

let var5 = 16.9;
let var6 = "Trenutno je 26stepeni";
var isSunny = false;
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof isSunny);

// instanceof - Ispituje da li je tip odredjene promenljive instanca od objekta npr.
let obj = {
  ime: "moje ime",
  prezime: "Moje prezime",
};

console.log(obj instanceof Object);
let brojGodina = prompt("unesi godine");

const ime = prompt("unesi ime");
// Neki string mozemo prevesti u number na sledeca dva nacina.
// 1. Nacin
brojGodina = +brojGodina;
console.log(typeof brojGodina);

// 2. Naci
brojGodina = Number(brojGodina);

// let brojGodina = Number(prompt("Unesite broj godina :"));
