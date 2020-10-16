function convertString(s: string, t: string): boolean {
    var str: string = '';
    var ctr: number = 0;
    var j: number = 0;
    while(ctr<t.length && j < s.length){
        if(t.charAt(ctr) == s.charAt(j)){
            str = str.concat(s.charAt(j));
            ctr++;
            j++;
        }else{
            j++;
        }
    }
    if(str === t){
        return true;
    }
    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
