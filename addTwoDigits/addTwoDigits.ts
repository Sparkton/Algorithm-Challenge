function addTwoDigits(n: number): number {
    let ctr = 0;
    while(n > 0){
        ctr += (n%10);
        n = Math.floor(n / 10);
    }

    while(ctr > 9)
        ctr = addTwoDigits(ctr);

    if(ctr <= 9)
            return ctr;
}

console.log(addTwoDigits(99));