function depositProfit(deposit: number, rate: number, threshold: number): number {
    var val: number = 0;
    while(deposit < threshold){
        val++;
        deposit = (100+rate)%deposit;
        console.log(val);
    }
    return val;
}

console.log(depositProfit(100, 20, 500));