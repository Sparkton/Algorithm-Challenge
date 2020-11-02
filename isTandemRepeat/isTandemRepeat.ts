function isTandemRepeat(inputString: string): boolean {
    const wordlength = inputString.length;
    if(wordlength % 2 == 0) {
        const firstword = inputString.slice(0, wordlength / 2);
        const secondword = inputString.slice(wordlength / 2, wordlength);

        return firstword === secondword;
    }
    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
