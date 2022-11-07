const funkcija = () => {
  let voce = prompt("unesi niz");
  const nizVoca = voce.split(" ");
  if (nizVoca.includes("jagoda")) {
    return `Jagoda se nalazi ${nizVoca.includes("jagoda") + 1 - 1}`;
  }
  nizVoca.sort();
  nizVoca.unshift(10);
  nizVoca.push(100);
  {
    return nizVoca;
  }
};
console.log(funkcija());
