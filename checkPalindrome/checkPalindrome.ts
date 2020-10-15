function checkPalindrome(inputString: string): boolean {
    var str: String = reverse(inputString);
    if(inputString.toLowerCase() === str.toLowerCase()){
        return true;
    }
    return false;
}

function reverse(s: string){
    return s.split("").reverse().join("");
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
