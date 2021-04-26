function properNounCorrection(noun: string): string {
  const firstChar = noun[0].toUpperCase();
  console.log(firstChar);

  const restOfWord = noun.slice(1, noun.length).toLowerCase();
  console.log(restOfWord);

  // return firstChar + restOfWord;
  return firstChar.concat(restOfWord);
}

console.log(properNounCorrection("pARiS"));
console.log(properNounCorrection("John"));
