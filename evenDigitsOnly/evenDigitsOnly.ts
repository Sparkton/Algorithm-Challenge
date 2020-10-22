function evenDigitsOnly(n: number): boolean {
    var ls: string[] = n.toString().split('');
    var ctr:number = 0;
    ls.forEach(element => {
        if(parseInt(element) % 2 != 0){
            ctr++;
        }
    });
    return (ctr > 0 ? false : true);
}

console.log(evenDigitsOnly(248022));
console.log(evenDigitsOnly(642386));