const fc = require("fast-check");
const { add, crappyAdd } = require("./add.js");

xdescribe("no framework", () => {
  it("1 + 1 equals 2", () => {
    const result = add(1, 1);
    expect(result).toEqual(2);
  });

  it.each([[1, 1, 2], [1, 2, 3], [100, 1, 101]])(
    ".add(%i, %i)",
    (a, b, expected) => {
      const result = crappyAdd(a, b);
      expect(result).toEqual(expected);
    }
  );

  for (let i = 0; i < 100; i += 1) {
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const expected = a + b;
    it(`${a} + ${b} equals`, () => {
      const result = add(a, b);
      expect(result).toEqual(expected);
    });
  }

  for (let i = 0; i < 100; i += 1) {
    it(`When I add two numbers, the result should not depend on parameter order`, () => {
      const a = Math.floor(Math.random() * 100);
      const b = Math.floor(Math.random() * 100);
      const aPlusB = add(a, b);
      const bPlusA = add(b, a);
      expect(aPlusB).toEqual(bPlusA);
    });
  }

  for (let i = 0; i < 100; i += 1) {
    it(`Adding 1 twice is the same as adding 2`, () => {
      const x = Math.floor(Math.random() * 100);
      const result1 = add(add(x, 1), 1);
      const result2 = add(x, 2);
      expect(result1).toEqual(result2);
    });
  }

  for (let i = 0; i < 100; i += 1) {
    it(`Adding zero is the same as doing nothing`, () => {
      const x = Math.floor(Math.random() * 100);
      const result1 = add(x, 0);
      const result2 = x;
      expect(result1).toEqual(result2);
    });
  }
});

describe("Fast-check", () => {
  it(`When I add two numbers, the result should 
  not depend on parameter order`, () => {
    fc.assert(
      fc.property(fc.integer(), fc.integer(), (a, b) => {
        const result1 = add(a, b);
        const result2 = add(b, a);
        expect(result1).toEqual(result2);
      })
    );
  });

  it("Adding 1 twice is the same as adding 2", () => {
    fc.assert(
      fc.property(fc.integer(), x => {
        const result1 = add(add(x, 1), 1);
        const result2 = add(x, 2);
        expect(result1).toEqual(result2);
      })
    );
  });

  it("Adding zero is the same as doing nothing", () => {
    fc.assert(
      fc.property(fc.integer(), x => {
        const result1 = add(x, 0);
        const result2 = x;
        expect(result1).toEqual(result2);
      })
    );
  });
});
