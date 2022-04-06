const MathM = {
  add: (x, y) => x + y,
  substract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => {
    if (y != 0) {
      x / y;
    } else {
      console.log("No se puede dividir entre 0");
    }
  },
};

module.exports = MathM;
