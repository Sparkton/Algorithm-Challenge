function differentSymbolsNaive(s: string): number {
    var str: string = '';
    for (let i = 0; i < s.length; i++) {
        if(!str.includes(s.charAt(i))){
            str = str.concat(s.charAt(i));
        }
    }
    return(str.length)
}

console.log(differentSymbolsNaive('cabcad'));
