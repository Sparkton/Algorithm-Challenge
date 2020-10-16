function confirmEnding(str: string, target: string) {
    var start = 0;
    var flag = target.length;
    while(flag <= str.length){
        var res = str.substring(start,flag);
        console.log(res);
        if (target === res && str[flag] == ' '){
            return false;
        }
        flag++;
        start++;
    }
    return true;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));