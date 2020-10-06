function arrayPreviousLess(items: number[]): number[] {
    let ctr: number = 0;
    const ls: number[] = [-1];
    for (let i = 1; i < items.length; i++) {
        let val = items[i];
        for (let j = 0; j <= i; j++) {
            if(items[j] < val && items[j] > 0){
                val = items[j];
            }
        }
        if(val !== items[i]){
            ls.push(val);
        }else{
            ls.push(-1);
        }
    }
    return ls;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));