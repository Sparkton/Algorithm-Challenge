function extractEachKth(inputArray:number[], k: number): number[] {
    var ls: number[] = [];
    for (let i = 0; i < inputArray.length; i++) {
        if((i+1)%k!=0){
            ls.push(inputArray[i]);
        }
    }
    return ls;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));