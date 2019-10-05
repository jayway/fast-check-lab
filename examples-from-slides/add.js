const add = (a, b) => a + b;

const crappyAdd = (a, b) => {
  if (a < 10 && b < 10) {
    return a + b;
  }
  return 0;
};

module.exports = {
  add,
  crappyAdd
};
