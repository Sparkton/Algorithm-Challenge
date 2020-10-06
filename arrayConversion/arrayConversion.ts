function arrayConversion(inputArray: number[]): number {
    let isOdd = true;
    let n = inputArray.length
    while(n !== 1){
        inputArray = calc(inputArray, isOdd);
        n = inputArray.length;
        isOdd = !isOdd;
    }
    return inputArray[0];
}

function calc(inputArray : number[], boolVal : boolean) : number[] {
    const prod: number[] = [];

    if(boolVal){
        for (let i = 0; i < inputArray.length; i+=2) {
            prod.push(inputArray[i]+inputArray[i+1])
        }        
    }else{
        for (let i = 0; i < inputArray.length; i+=2) {
            prod.push(inputArray[i]*inputArray[i+1])
        }  
    }
    return inputArray;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
