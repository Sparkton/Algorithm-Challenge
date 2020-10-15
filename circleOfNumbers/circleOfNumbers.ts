function circleOfNumbers(n: number, firstNumber: number): number {
    var ctr: number = 0;
    while(ctr < (n/2)){
        if(firstNumber === n-1){
            firstNumber = 0;
        }else{
            firstNumber++;
        }
        ctr++;
    }
    return firstNumber;
}

console.log(circleOfNumbers(10, 8));