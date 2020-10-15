function companyBotStrategy(trainingData: number[][]): number {
    var ctr: number = 0;
    var val: number = 0;
    trainingData.forEach(element => {
        if(element[1] == 1){
            ctr += element[0];
            val++;
        }
    });
    if (val == 0){
        return 0;
    }
    return (ctr/val);
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
