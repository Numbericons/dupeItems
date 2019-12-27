function duplicateCount(text) {
  let count = 0;
  const cntHash = {};
  let str = text.slice(0).toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (cntHash[str[i]]) {
      if (cntHash[str[i]] === 1) count++;
      cntHash[str[i]] += 1;
    } else {
      cntHash[str[i]] = 1;
    }
  }
  return count;
}
// let res = duplicateCount("") //0
// Test.assertEquals(duplicateCount("abcde"), 0);
// Test.assertEquals(duplicateCount("aabbcde"), 2);
// Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
let res = duplicateCount("Indivisibility");
console.log(`Result is ${res} and should be 1`);
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
