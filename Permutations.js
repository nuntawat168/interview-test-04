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

function permutations(strings) {
  const result = [strings];
  let lastShuffle = strings;
  let shuffleIndex = 0;
  for (let i = 1; i < factorialize(strings.length); i++) {
    let tmpLastShuffle = lastShuffle;
    tmpLastShuffle = tmpLastShuffle.replaceAt(
      shuffleIndex,
      lastShuffle[shuffleIndex + 1]
    );
    tmpLastShuffle = tmpLastShuffle.replaceAt(
      shuffleIndex + 1,
      lastShuffle[shuffleIndex]
    );

    // console.log(tmpLastShuffle);
    result.push(tmpLastShuffle);
    lastShuffle = tmpLastShuffle;
    if (shuffleIndex === strings.length - 2) {
      shuffleIndex = 0;
    } else {
      shuffleIndex++;
    }
  }
  console.log(result);
  return result.filter((string, index) => result.lastIndexOf(string) === index);
  return result;
}

console.log(permutations("a"));
// console.log(permutations("ab"));
// console.log(permutations("abc"));
console.log(permutations("aabb"));
console.log(permutations("abba"));
console.log(permutations("bbaa"));
console.log(permutations("baba"));
console.log(permutations("baab"));
console.log(permutations("abab"));

console.log(permutations("1234"));
