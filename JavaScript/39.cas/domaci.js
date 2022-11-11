const main = {
  ime: "Muhamed",
  prezime: "Krkmisevic",
  brojInkeds: 12303320130,
  ocene: [7, 8, 9, 10, 6],
  prosekOcena: function () {
    const brojOcena = this.ocene.length;
    const suma = this.ocene.reduce((prev, curr) => prev + curr);
    let prosek = suma / brojOcena;
    return `Prosek ocena ${this.ime}a ${this.prezime}a je ${prosek}`;
  },
};
console.log(main.ime);
console.log(main.prosekOcena());

// function callBack(nizOcena, niz2, niz3, niz4, niz5) {
//   let ukupni = ((nizOcena + niz2 + niz3 + niz4 + niz5) / 3).toFixed(2);
//   console.log(`Aritmeticka sredina datih brojeva je ${ukupni}`);
// }
// console.log(callBack(nizOcena, niz2, niz3, niz4, niz5));
