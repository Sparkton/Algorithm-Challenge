function allLongestStrings(inputArray: string[]): string[] {
    let len = 0;
    const newArr = [];

    inputArray.forEach((word: string) =>{
        len = len < word.length ? word.length : len;
    });

    inputArray.forEach((word: string) =>{
        if(word.length === len)
            newArr.push(word)
    });

    return newArr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "afsd"]));