const zbir = function (arg1, arg2) {
  return arg1 + arg2;
};

// Postoje 2 nacina za eksportovanje modula:
// export zbir
// export default zbir
const br = 5;
export default zbir;
export { br };
// export default mozemo iskoristiti samo jednom u fajlu
