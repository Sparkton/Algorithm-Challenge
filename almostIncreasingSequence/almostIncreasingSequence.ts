function almostIncreasingSequence(seq: number[]): boolean {
    let ctr = 0;

    for(let i = 0;i <= seq.length;i++){
        if(seq[i] <= seq[i+1]){
            console.log(i,ctr);
        }
        if((seq[i-1] < seq[i+1]) && (seq[i] <= seq[i+2])){
            console.log(i,ctr);
            ctr++;
        }
        if(ctr > 1)
            return false;
    }
    return true;

}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 