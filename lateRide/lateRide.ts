function addedVals(tm: number): number {
    let ctr: number = 0;
    while(Math.round(tm) > 0) {
        ctr += (tm%10);
        tm = tm/10;
    }
    return ctr;
}

function lateRide(n: number): number {
    let tm: number = 0;
    while (n >= 60) {
        n-=60;
        tm+=100;
    }
    tm += n;
    return addedVals(tm);

}

console.log(lateRide(240));
console.log(lateRide(808));
