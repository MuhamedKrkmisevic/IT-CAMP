// ispitsati rojeve od 1 do 10 , jedan ispod drugog
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// za resavanje ovog (i slicnih primera) je najjednostavnije koristiti petlju (brojac) --look--
// u java scriptu imamo 3 petlje preko kojih mozemo izvrsiti nekoliko linija koda na brzi nacin.

// 1. for petlja :
// u for petlji je svakako dozvoljeno koristiti if naredbu prema potrebi.
// for(statement1 ; statement2; statement3){
//     //blok koda koji se izvrsava u svakoj iteraciji
// }

//statement1 predstavlja definisanje promenljive koja predstavlja iterator
//statement2 predstavlja uslov , odnosno granicu do koje ce se izvrsavati iteracija
//statement3 predstavlja promenu vrednosti iteratora (to moze biti povecanje ili smanjenje).

// ispitsati rojeve od 1 do 10 , jedan ispod drugog:
// for (let x = 1; x < 11; x++) {
//   console.log(x);
// }
// //ispisati sve brojeve od 1 do 10 , osim broja 2 i broja 5.
// for (let i = 1; i < 11; i++)
//   if (i !== 2 && i !== 5) {
//     console.log(i);
//   }

// ako se nadje break rezervisana rec (keyword) unutar petlje to znaci da od tog trenutka
//petlja prestaje sa iteracijama odnosno zavrsava se

// Ako se nadje continue rezervisana rec (keyword) unutar petlje , to znaci da se ta iteracija
// preskace , tj. odmah se prelazi na sledecu iteraciju.
//2.nacin:
// for (let i = 0; i <= 10; i++) {
//   if (i === 2 || i === 5) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//ispisati parne brojeve od 1 do 20 na dva nacina.
for (let i = 1; i < 21; i++) {
  if (i % 2 !== 1) {
    console.log(i);
  }
}
