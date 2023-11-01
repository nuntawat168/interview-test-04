function factorialize(num) {
  if (num < 0) return false;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

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

// function recusPermutaions(strings, startIndex, endIndex) {
//   if (startIndex === endIndex) {
//     console.log(strings);
//     return strings;
//   }
//   for (let i = startIndex; i <= endIndex; i++) {
//     const swapStrings = swap(strings, startIndex, i);
//     recusPermutaions(swapStrings, startIndex + 1, endIndex);
//   }
// }

function permutations(strings) {
  const result = [];

  //   result.push(recusPermutaions(strings, 0, strings.length - 1));
  function recusPermutaions(strings, startIndex, endIndex) {
    if (startIndex === endIndex) {
      // console.log(strings);
      //   return strings;
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

console.log(permutations("a"));
console.log(permutations("ab"));
console.log(permutations("abc"));
console.log(permutations("aabb"));
console.log(permutations("abba"));
console.log(permutations("bbaa"));
console.log(permutations("baba"));
console.log(permutations("baab"));
console.log(permutations("abab"));
console.log(permutations("1234"));
console.log(permutations("12345"));
