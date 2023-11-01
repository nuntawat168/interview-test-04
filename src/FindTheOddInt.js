function isOdd(int) {
  return int % 2 !== 0;
}

function findTheOddInt(array) {
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

module.exports = findTheOddInt;
