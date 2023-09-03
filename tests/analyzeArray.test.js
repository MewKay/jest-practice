import analyzeArray from "../code/analyzeArray";

test("should contains properties average, min, max and length", () => {
  expect(analyzeArray()).toHaveProperty("average");
  expect(analyzeArray()).toHaveProperty("min");
  expect(analyzeArray()).toHaveProperty("max");
  expect(analyzeArray()).toHaveProperty("length");
});

test("should give the average number from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe(4);
});

test("should give the lowest number from array", () => {
  expect(analyzeArray([3, 65, 2, 48, 10, 4])).toBe(2);
});

test("should give the highest number from array", () => {
  expect(analyzeArray([1, 54, 999, 2, 65])).toBe(999);
});

test("should give the length of the array", () => {
  expect(analyzeArray([1, 7, 5, 12, 3])).toBe(5);
});
