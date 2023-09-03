import Calculator from "../code/calculator";

test("calculator object should contains add, substract, divide and multiply functions", () => {
  expect(Calculator()).toHaveProprety("add");
  expect(Calculator()).toHaveProprety("substract");
  expect(Calculator()).toHaveProprety("divide");
  expect(Calculator()).toHaveProprety("multiply");
});

test("fifteen plus seventeen should equals thirty two", () => {
  expect(Calculator().add(15, 17)).toBe(32);
});

test("ten minus six should equals four", () => {
  expect(Calculator().substract(10, 6)).toBe(4);
});

test("one hundred and twenty divided by sixty should equals two", () => {
  expect(Calculator().divide(120, 60)).toBe(2);
});

test("fifteen times three should equals fourty four", () => {
  expect(Calculator().multiply(15, 3)).toBe(45);
});
