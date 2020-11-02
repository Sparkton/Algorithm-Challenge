function largestNumber(n: number): number {
    let no: string = '';
    while(n > 0) {
        no = no + '9';
        n--;
    }
    return no;
}

console.log(largestNumber(6));