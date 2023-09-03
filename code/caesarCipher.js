const shiftCharacter = function shiftCharacterWithCharCodeKeyTimes(
  key,
  charCode,
  charCodeStartingRange
) {
  const ALPHABET_LENGTH = 26;
  const CHARACTER_ALPHABETICAL_INDEX = charCode - charCodeStartingRange;
  const SHIFTED_CHARACTER_ALPHABETICAL_INDEX =
    (CHARACTER_ALPHABETICAL_INDEX + key) % ALPHABET_LENGTH;
  const SHIFTED_CHARACTER_CHAR_CODE =
    SHIFTED_CHARACTER_ALPHABETICAL_INDEX + charCodeStartingRange;
  const SHIFTED_CHARACTER = String.fromCharCode(SHIFTED_CHARACTER_CHAR_CODE);

  return SHIFTED_CHARACTER;
};

const caesarCipher = function shiftEachCaracterKeyTimes(string, key) {
  const UPPER_CASE_PATTERN = /[A-Z]/;
  const LOWER_CASE_PATTERN = /[a-z]/;
  const UPPER_CASE_CODE_STARTING_RANGE = "A".charCodeAt(0);
  const LOWER_CASE_CODE_STARTING_RANGE = "a".charCodeAt(0);
  let encryptedString = "";

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string.charAt(i);
    const currentCharCode = string.charCodeAt(i);
    let shiftedCharacter;

    if (
      !UPPER_CASE_PATTERN.test(currentCharacter) &&
      !LOWER_CASE_PATTERN.test(currentCharacter)
    ) {
      shiftedCharacter = currentCharacter;
    } else if (UPPER_CASE_PATTERN.test(currentCharacter)) {
      shiftedCharacter = shiftCharacter(
        key,
        currentCharCode,
        UPPER_CASE_CODE_STARTING_RANGE
      );
    } else if (LOWER_CASE_PATTERN.test(currentCharacter)) {
      shiftedCharacter = shiftCharacter(
        key,
        currentCharCode,
        LOWER_CASE_CODE_STARTING_RANGE
      );
    }

    encryptedString += shiftedCharacter;
  }

  return encryptedString;
};

export default caesarCipher;
