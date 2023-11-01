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

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
console.log(countSmileys([";D", ":-(", ":-)", ";~)"]));
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));
console.log(
  countSmileys([
    ":)",
    ":D",
    ";)",
    ";D",
    ":-)",
    ":-D",
    ":~)",
    ":~D",
    ";-)",
    ";-D",
    ";~)",
    ";~D",
  ])
);
