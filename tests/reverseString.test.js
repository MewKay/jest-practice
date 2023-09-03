import reverseString from "../code/reverseString";

test("should reverse string", () => {
  expect("Reverso").toBe("osreveR");
});

test("should pass no matter what", () => {
  expect("kayak").toBe("kayak");
});

test("should reverse string yet again", () => {
  expect("Lorem Ipsum Dolor Sit Amet").toBe("temA tiS roloD muspI meroL");
});
