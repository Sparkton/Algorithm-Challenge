function isCaseInsensitivePalindrome(inputString: string): boolean {
    var inStr: String =  reverse(inputString.toLowerCase());
    if (inputString.toLowerCase() === inStr && inputString !== '') {
        inStr = reverse(inputString);
        if(inputString === inStr){
            return true;
        }
    }
    return false;
}

function reverse(s: string){
    return s.split("").reverse().join("");
}
console.log(isCaseInsensitivePalindrome('AaaBaaA'));
console.log(isCaseInsensitivePalindrome('AbBbA'));
