const broj1 = Number(prompt("unesite prvi broj"));
const broj2 = Number(prompt("unesite drugi broj"));
if (broj1 || broj2) {
  console.log("Niste uneli korektne vrednosti za brojeve.");
} else if (broj1 === broj2) {
  console.log(
    "Povrsina kvadrata na osnovu unetih brojeva je : " + broj1 * broj2
  );
} else {
  console.log(
    "povrsina pravougaonika na osnovu unetih brojeva je: " + broj1 * broj2
  );
}
const x = Number(prompt("unesite prvi broj"));
const y = Number(prompt("unesite drugi broj"));

if (y !== 0) {
  console.log(x / y);
} else if (y === 0) {
  console.log("deljenje nije moguce");
}
