const findTheOddInt = require("../src/FindTheOddInt");

test("Find the odd int in [7]", () => {
  expect(findTheOddInt([7])).toBe(7);
});

test("Find the odd int in [0]", () => {
  expect(findTheOddInt([0])).toBe(0);
});

test("Find the odd int in [1, 1, 2]", () => {
  expect(findTheOddInt([1, 1, 2])).toBe(2);
});

test("Find the odd int in [0, 1, 0, 1, 0]", () => {
  expect(findTheOddInt([0, 1, 0, 1, 0])).toBe(0);
});
