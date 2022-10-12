const prviDatum = "24 May 1999";
const drugiDatum = "15 Sept 2004";

function datum() {
  const prviDatum1 = new Date(prviDatum);
  const drugiDatum1 = new Date(drugiDatum);
  const totalSec = (drugiDatum1 - prviDatum1) / 1000;
  const days = fsa(totalSec / 3600 / 24);

  return ` razilka izmedju ${prviDatum1} i ${drugiDatum1} je  ${days}`;
}
console.log(datum());
