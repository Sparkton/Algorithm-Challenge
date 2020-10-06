function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    const ls: number[] = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        ls.push(Math.abs(inputArray[i] - inputArray[i+1]))
    }
    return Math.max(...ls)
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));