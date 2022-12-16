// JavaScript Maps //

// Mape sadrze key-value parove gde kljucevi mogu biti bilo koji tip podatka

// Mape pamte originalni redosled elemenata.

// Kreiranje mape:

const fruits = new Map([
  ["apples", 60],
  ["bananas", 150],
  ["strawberry", 320],
  ["mango", 440],
]);
console.log(fruits);

// Metode:

// set() - Setuje vrednosti za odredjeni kljuc u mapi
fruits.set("pear", 26);
console.log(fruits);

// get() - vraca vrednost za odredjeni kljuc
console.log(fruits.get("strawberry"));

// delete() - brise ceo element slanjem njegovog kljuca

fruits.delete("pear");
console.log(fruits);

// has() - vraca boolean u zavisnosti od toga da li kljuc postoji u mapi ili ne
console.log(fruits.has("mango"));

// forEach() - poziva callBack funckiju za svaki key-value par.
fruits.forEach((value, key) => console.log(value, key));

// entries() vraca iterator u obliku [key-value] parova.

console.log(fruits.entries());
