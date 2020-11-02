function longestDigitsPrefix(inputString: string): string {
    let first: number = 0;
    let last: number = 0;
    let arr: string = '';
    //console.log(Number.isNaN(parseInt(inputString[2])));
    while(last <= inputString.length) {
        if(Number.isNaN(parseInt(inputString[last]))) {
            arr = arr.length < inputString.substring(first, last).length ? inputString.substring(first, last) : arr;
            first = last+1;
            last++;
        } else {
            last++;
        }
    }
    return arr;
}

console.log(longestDigitsPrefix('12345aa1234aa'));