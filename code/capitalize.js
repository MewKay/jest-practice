const capitalize = function makeFirstLetterToUpperCase(string) {
  const stringFirstLetter = string.charAt(0).toUpperCase();
  const stringRest = string.slice(-string.length + 1);
  const newString = stringFirstLetter.concat("", stringRest);
  return newString;
};

export default capitalize;
