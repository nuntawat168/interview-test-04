String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

function swap(strings, index1, index2) {
  let tmpStrings = strings;
  tmpStrings = tmpStrings.replaceAt(index1, strings[index2]);
  tmpStrings = tmpStrings.replaceAt(index2, strings[index1]);
  return tmpStrings;
}

function permutations(strings) {
  const result = [];

  function recusPermutaions(strings, startIndex, endIndex) {
    if (startIndex === endIndex) {
      result.push(strings);
    }
    for (let i = startIndex; i <= endIndex; i++) {
      const swapStrings = swap(strings, startIndex, i);
      recusPermutaions(swapStrings, startIndex + 1, endIndex);
    }
  }

  recusPermutaions(strings, 0, strings.length - 1);

  return result.filter((string, index) => result.lastIndexOf(string) === index);
}

module.exports = permutations;
