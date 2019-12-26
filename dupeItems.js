function duplicateCount(text) {
  let count = 0;
  const cntHash = {};
  let str = text.slice(0);

  for (let i = 0; i < str.length; i++) {
    let cntChar = cntHash[str[i]];
    if (cntChar) {
      if (cntChar === 1) count++;
      cntChar += 1;
    } else {
      cntHash[str[i]] = 1;
    }
  }

  return count;
}

// Test.assertEquals(duplicateCount(""), 0);
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
