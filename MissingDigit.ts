function calc(num: number[], op: string) : number {
    if(op == '+') {
        return num[0] + num[1];
    } else if(op == '-'){
        return num[0] - num[1];
    } else if(op == '*') {
        return num[0] * num[1];
    } else {
        return num[0] / num[1];
    }
}

function wordRepeat(str: string) : any {
    let ops : string[] = str.split(' ');
    // console.log(ops);
    let ctr : number = 0;
    let num: number[] = [];
    ops.forEach(element => {
        if(element.includes('x')){
            ctr = ops.indexOf(element);
        }
        if(typeof parseInt(element) == 'number' && !element.includes('x') && !Number.isNaN(parseInt(element))) {
            num.push(parseInt(element));
        }
    });
    // console.log(ops[3]);
    // console.log(num);
    let x: number = calc(num, ops[2]);
    // console.log(x);

    if(x < 1)
        x = 1/x;
    
    // console.log(ctr);
    // console.log(x);

    let xStr = ops[ctr];
    for (let i: number = 0;i < xStr.length; i++) {
        let finStr = x.toString();
        if(xStr[i] == 'x'){
            return finStr[i];
        }
    }
    return x;
}


console.log(wordRepeat('4 - 2 = x'));
console.log(wordRepeat('1x0 * 12 = 1200'));
console.log(wordRepeat('4 * x1 = 84'));
console.log(wordRepeat('89 / 8x = 1'));
console.log(wordRepeat('89 / 89 = x'));
