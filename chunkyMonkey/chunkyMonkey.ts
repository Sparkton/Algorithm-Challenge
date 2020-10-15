function chunkyMonkey(arr: any[], size: number): any[][] {
    const nested = [];
    let ctr = 0;

    while (ctr < arr.length) {
        nested.push(arr.slice(ctr, ctr+=size));
    }
    return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));