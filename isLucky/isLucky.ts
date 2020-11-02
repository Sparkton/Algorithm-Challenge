function isLucky(n: number): boolean {
    let ctr: number = 0;
    let str: string = n.toString();
    let backVal: number = n.toString.length;
    for(let i = 0; i < str.length/2; i++) {
        ctr += parseInt(str[i]) - parseInt(str[str.length - i - 1]);
    }

    if(ctr == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLucky(1230));
console.log(isLucky(239017));