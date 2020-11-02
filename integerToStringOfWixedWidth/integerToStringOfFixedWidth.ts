function integerToStringOfFixedWidth(number: number, width: number): string {
    let str: string = '';
    let str1: string = number.toString();
    if(str1.length < width) {
        let ctr = width - str1.length;
        console.log(ctr)
        while(ctr != 0) {
            str = str.concat('0');
            ctr--;
        }
        return str.concat(str1);
    } else {
        return str1.slice(-width);
    }
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
