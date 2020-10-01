function arrayChange(inputArray: number[]): number {
    let ctr : number = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if(inputArray[i] >= inputArray[i+1]){
            ctr = ctr + (inputArray[i] - inputArray[i+1] + 1);
            inputArray[i+1] = inputArray[i]+1;
        }
    }
    return ctr;
}

console.log(arrayChange([1, 1, 1]));