function houseOfCats(legs: number): number[] {
    const ctr: number[] = [];
    while(legs > 0) {
        ctr.unshift(legs/2);
        legs-=4;
    }
    return ctr;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));

