import caesarCipher from "../code/caesarCipher";

test("should stay the same", () => {
  expect(caesarCipher("I'm not encrypted", 0)).toBe("I'm not encrypted");
  expect(caesarCipher("Me neither", 26)).toBe("Me neither");
});

test("should be able to wrap from z to a", () => {
  expect(caesarCipher("zanzibar", 1)).toBe("aboajcbs");
});

test("should keep same case", () => {
  expect(caesarCipher("My Body Is Ready", 10)).toBe("Wi Lyni Sc Bokni");
});

test("should keep punctuations as is", () => {
  expect(
    caesarCipher("? You can't be serious !! I have to sit down a bit...", 20)
  ).toBe("? Sio wuh'n vy mylciom !! C bupy ni mcn xiqh u vcn...");
});
