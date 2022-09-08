const treciZadatak2 = (recenica) => {
  let recenica3 = "";
  for (i = 0; i <= recenica.length; i++) {
    if (
      recenica[i] === "a" ||
      recenica[i] === "e" ||
      recenica[i] === "i" ||
      recenica[i] === "o" ||
      recenica[i] === "u"
    ) {
      recenica3 += recenica[i].toUpperCase();
    } else if (i === recenica.length) {
      recenica3 += ".";
    } else {
      recenica3 += recenica[i];
    }
  }
  return recenica3;
};

console.log(treciZadatak2("Danas je bio jedan od najboljih dana"));

const myArrowFunc = (recenica) => {
  let recenica8 = "";
  for (let i = 0; i <= recenica.length; i++) {
    if (
      recenica[i] === "a" ||
      recenica[i] === "e" ||
      recenica[i] === "i" ||
      recenica[i] === "o" ||
      recenica[i] === "u"
    ) {
      recenica8 += recenica[i].toUpperCase();
    } else if (i === recenica.length) {
      recenica8 += ".";
    } else {
      recenica8 += recenica[i];
    }
  }
  return recenica8;
};

console.log(myArrowFunc("Danas je bio mnogo jak dan"));
