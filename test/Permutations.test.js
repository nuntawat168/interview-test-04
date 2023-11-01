const permutations = require("../src/Permutations");

test('Permutations of "a"', () => {
  const result = permutations("a");

  const expectedStrings = ["a"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "ab"', () => {
  const result = permutations("ab");

  const expectedStrings = ["ab", "ba"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "abc"', () => {
  expect(permutations("abc")).toEqual([
    "abc",
    "acb",
    "bac",
    "bca",
    "cba",
    "cab",
  ]);
});

test('Permutations of "aabb"', () => {
  const result = permutations("aabb");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "abba"', () => {
  const result = permutations("abba");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "bbaa"', () => {
  const result = permutations("bbaa");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "baba"', () => {
  const result = permutations("baba");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "baab"', () => {
  const result = permutations("baab");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "abab"', () => {
  const result = permutations("abab");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "abab"', () => {
  const result = permutations("abab");

  const expectedStrings = ["aabb", "abab", "abba", "baab", "baba", "bbaa"];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "1234"', () => {
  const result = permutations("1234");

  const expectedStrings = [
    "1234",
    "1243",
    "1324",
    "1342",
    "1432",
    "1423",
    "2134",
    "2143",
    "2314",
    "2341",
    "2431",
    "2413",
    "3214",
    "3241",
    "3124",
    "3142",
    "3412",
    "3421",
    "4231",
    "4213",
    "4321",
    "4312",
    "4132",
    "4123",
  ];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});

test('Permutations of "12345"', () => {
  const result = permutations("12345");

  const expectedStrings = [
    "12345",
    "12354",
    "12435",
    "12453",
    "12543",
    "12534",
    "13245",
    "13254",
    "13425",
    "13452",
    "13542",
    "13524",
    "14325",
    "14352",
    "14235",
    "14253",
    "14523",
    "14532",
    "15342",
    "15324",
    "15432",
    "15423",
    "15243",
    "15234",
    "21345",
    "21354",
    "21435",
    "21453",
    "21543",
    "21534",
    "23145",
    "23154",
    "23415",
    "23451",
    "23541",
    "23514",
    "24315",
    "24351",
    "24135",
    "24153",
    "24513",
    "24531",
    "25341",
    "25314",
    "25431",
    "25413",
    "25143",
    "25134",
    "32145",
    "32154",
    "32415",
    "32451",
    "32541",
    "32514",
    "31245",
    "31254",
    "31425",
    "31452",
    "31542",
    "31524",
    "34125",
    "34152",
    "34215",
    "34251",
    "34521",
    "34512",
    "35142",
    "35124",
    "35412",
    "35421",
    "35241",
    "35214",
    "42315",
    "42351",
    "42135",
    "42153",
    "42513",
    "42531",
    "43215",
    "43251",
    "43125",
    "43152",
    "43512",
    "43521",
    "41325",
    "41352",
    "41235",
    "41253",
    "41523",
    "41532",
    "45312",
    "45321",
    "45132",
    "45123",
    "45213",
    "45231",
    "52341",
    "52314",
    "52431",
    "52413",
    "52143",
    "52134",
    "53241",
    "53214",
    "53421",
    "53412",
    "53142",
    "53124",
    "54321",
    "54312",
    "54231",
    "54213",
    "54123",
    "54132",
    "51342",
    "51324",
    "51432",
    "51423",
    "51243",
    "51234",
  ];

  expectedStrings.forEach((expected) => {
    expect(result).toContain(expected);
  });

  expect(result.length).toEqual(expectedStrings.length);
});
