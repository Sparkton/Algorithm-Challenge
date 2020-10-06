function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    let sum = 0;
    const ls : number[] = [];
    for (let i = 0; i < inputArray.length - k + 1; i++){
        for (let j = 0; j < k; j++) {
            sum = sum + inputArray[j+i];
        }
        ls.push(sum);
        sum = 0;
    }
    sum = Math.max(...ls);
    return sum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));