const countSmileys = require("../src/CountTheSmileyFaces");

test('Count smiley faces in [":)", ";(", ";}", ":-D"]', () => {
  expect(countSmileys([":)", ";(", ";}", ":-D"])).toBe(2);
});

test('Count smiley faces in [";D", ":-(", ":-)", ";~)"]', () => {
  expect(countSmileys([";D", ":-(", ":-)", ";~)"])).toBe(3);
});

test('Count smiley faces in [";D", ":-(", ":-)", ";~)"]', () => {
  expect(countSmileys([";]", ":[", ";*", ":$", ";-D"])).toBe(1);
});

test('Count smiley faces in [":)",":D",";)",";D",":-)",":-D",":~)",":~D",";-)",";-D",";~)",";~D",]', () => {
  expect(
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
  ).toBe(12);
});

test("Count smiley faces in []", () => {
  expect(countSmileys([])).toBe(0);
});
