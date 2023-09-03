import analyzeArray from "../code/analyzeArray";

test("should contains properties average, min, max and length", () => {
  const analyzedArray = analyzeArray([2, 5, 89, 6]);

  expect(analyzedArray).toHaveProperty("average");
  expect(analyzedArray).toHaveProperty("min");
  expect(analyzedArray).toHaveProperty("max");
  expect(analyzedArray).toHaveProperty("length");
});

test("should give the average number from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("should give the lowest number from array", () => {
  expect(analyzeArray([3, 65, 2, 48, 10, 4]).min).toBe(2);
});

test("should give the highest number from array", () => {
  expect(analyzeArray([1, 54, 999, 2, 65]).max).toBe(999);
});

test("should give the length of the array", () => {
  expect(analyzeArray([1, 7, 5, 12, 3]).length).toBe(5);
});
