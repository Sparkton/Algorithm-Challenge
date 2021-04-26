function countMins(str: string) : any {
    let t: string[] = str.split('-');
    let tNum: number[] = [];
    console.log(t);
    t.forEach(element => {
        console.log(element);
        if(element.charAt(element.length - 2) == 'a'){
            let x = parseInt(element.slice(0,element.indexOf(':')))*60 + parseInt(element.slice(element.indexOf(':')+1, element.indexOf('a')));
            if(x >= 720)
                x-=720;
            tNum.push(x);
        } else {
            let x: number = parseInt(element.slice(0,element.indexOf(':')))*60 + parseInt(element.slice(element.indexOf(':')+1, element.indexOf('p')));
            tNum.push(x);
        }
    });
    console.log(tNum)
    let x = 0;
    if(t[0].charAt(t[0].length -2) == 'a' && t[1].charAt(t[1].length -2) == 'a'){
        if(tNum[0] > tNum[1]) {
            return (1440 - (tNum[0] - tNum[1]));
        } else {
            return (tNum[1] - tNum[0]);
        }
    } else if(t[0].charAt(t[0].length -2) == 'a' && t[1].charAt(t[1].length -2) == 'p') {
        return 720 + (tNum[1] - tNum[0]);
    } else if(t[0].charAt(t[0].length -2) == 'p' && t[1].charAt(t[1].length -2) == 'a') {
        if(tNum[0] > 720)
            return 1440 - (tNum[0] - tNum[1]);
        else
            return 720 - (tNum[0] - tNum[1]);
    } else {
        if(tNum[0] > tNum[1])
            return 1440 - (tNum[0] - tNum[1]);
        else
            return tNum[1] - tNum[0];
    }
    return x;
}
console.log(countMins('12:30pm-12:00am'));
console.log(countMins('1:23am-1:08am'));
console.log(countMins('1:00am-1:08am'));
console.log(countMins('7:30pm-6:00pm'));
console.log(countMins('5:30am-5:29pm'));
console.log(countMins('3:30pm-12:00am'));