const reverseString = function reverseString(string) {
  let reversedString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }

  return reversedString;
};

export default reverseString;
