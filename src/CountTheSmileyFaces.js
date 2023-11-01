function countSmileys(array) {
  const smileyFaces = {
    ":)": true,
    ":D": true,
    ";)": true,
    ";D": true,
    ":-)": true,
    ":-D": true,
    ":~)": true,
    ":~D": true,
    ";-)": true,
    ";-D": true,
    ";~)": true,
    ";~D": true,
  };

  let count = 0;
  for (let i of array) {
    if (i in smileyFaces) {
      count++;
    }
  }
  return count;
}

module.exports = countSmileys;
