function alphabetSubsequence(s: string): boolean {
    let ctr = s.charCodeAt(0);
    for(let i = 1;i < s.length;i++){
        if(s.charCodeAt(i) <= ctr)
            return false;
        else
            ctr = s.charCodeAt(i);
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
