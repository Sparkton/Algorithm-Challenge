function firstDuplicate(a: number[]): number {
    var flag: number = -1;
    a = a.sort();
    for (let i = 0; i < a.length - 1; i++) {
        if(a[i] === a[i+1]){
            return a[i];
        }
    }
    return flag;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
