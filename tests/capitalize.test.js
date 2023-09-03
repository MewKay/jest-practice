import capitalize from "../code/capitalize";

test("Upper case first letter", () => {
  expect(capitalize("capitalize")).toBe("Capitalize");
});

test("No upper case with number", () => {
  expect(capitalize("21jumpstreet")).toBe("21jumpstreet");
});

test("Yet another string to upper case first letter", () => {
  expect(capitalize("retry")).toBe("Retry");
});
