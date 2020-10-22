function fancyRide(l: number, fares: number[]): string {
    var vehicle: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    let j = 0;
    fares = fares.map(x => x*l);
    for (let i = 0; i < fares.length; i++) {
        if(fares[i] <= 20 && fares[i] > j){
            j = i;
        }
    }
    return vehicle[j];
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));