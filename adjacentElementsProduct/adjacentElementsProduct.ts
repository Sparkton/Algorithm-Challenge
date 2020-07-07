function adjacentElementsProduct(inputArray: number[]): number {
    let n = 0;
    for(let i = 0;i <= inputArray.length-1;i++){
        let ctr = inputArray[i] * inputArray[i+1];
        if (ctr > n)
            n = ctr;
    }

    return n;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));