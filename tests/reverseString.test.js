import reverseString from "../code/reverseString";

test("should reverse string", () => {
  expect(reverseString("Reverso")).toBe("osreveR");
});

test("should pass no matter what", () => {
  expect(reverseString("kayak")).toBe("kayak");
});

test("should reverse string yet again", () => {
  expect(reverseString("Lorem Ipsum Dolor Sit Amet")).toBe(
    "temA tiS roloD muspI meroL"
  );
});
