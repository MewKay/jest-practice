const getAverage = function getAverageValueFromArray(array) {
  const sortedArray = [...array].sort((a, b) => a - b);
  const middleIndex = Math.floor(array.length / 2);
  const averageValue = sortedArray[middleIndex];
  return averageValue;
};

const getMin = function getAverageValueFromArray(array) {
  let minValue = array[0];

  array.forEach(
    (element) => (minValue = minValue < element ? minValue : element)
  );

  return minValue;
};

const getMax = function getAverageValueFromArray(array) {
  let maxValue = array[0];

  array.forEach(
    (element) => (maxValue = maxValue > element ? maxValue : element)
  );

  return maxValue;
};

const analyzeArray = function analyzeArray(array) {
  const averageValue = getAverage(array);
  const minValue = getMin(array);
  const maxValue = getMax(array);
  const lengthValue = array.length;

  return {
    average: averageValue,
    min: minValue,
    max: maxValue,
    length: lengthValue,
  };
};

export default analyzeArray;
