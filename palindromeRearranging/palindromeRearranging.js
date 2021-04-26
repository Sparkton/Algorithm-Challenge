function palindromeRearranging(inputString) {
  const chars = inputString.split("");
  const charCount = {};
  let oddCount = 0;

  console.log(chars);

  for (let char of chars) {
    if (charCount.hasOwnProperty(char)) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);

  for (let key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount > 1 ? false : true;
}

console.log(palindromeRearranging("aabb"));
console.log(palindromeRearranging("aaabb"));
