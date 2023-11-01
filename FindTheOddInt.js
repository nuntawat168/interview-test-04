function isOdd(int) {
  return int % 2 !== 0;
}

function FindTheOddInt(array) {
  const map = {};
  let lastOddInt;

  for (let i of array) {
    if (i in map) {
      map[i] = map[i] + 1;
      if (isOdd(map[i])) {
        lastOddInt = i;
      }
    } else {
      map[i] = 1;
      lastOddInt = i;
    }
  }

  return lastOddInt;
}

console.log(FindTheOddInt([7]));
console.log(FindTheOddInt([0]));
console.log(FindTheOddInt([1, 1, 2]));
console.log(FindTheOddInt([0, 1, 0, 1, 0]));
