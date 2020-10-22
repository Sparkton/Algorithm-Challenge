function findClosestPair(numbers: number[], sum: number): number {
    var ctr: number = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            const element = Math.abs(numbers[i] + numbers[j]);
            element

            if(element === sum){
                ctr++;
            }
        }
    }
    return (ctr == 0 ? -1 : ctr);
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));