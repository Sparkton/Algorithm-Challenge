function containsDuplicates(a: number[]): boolean {
    return(dupChecker(a.sort()));
}

function dupChecker(a: number[]): boolean{
    for (let i = 0; i < a.length - 1; i++) {
        if(a[i] === a[i+1]){
            return true;
        }
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
