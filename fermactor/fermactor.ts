function fermactor(n: number): number[] {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const element = Math.pow(i,2) - Math.pow(j,2);
            
            if(n === element){
                return [i,j];
            }
        }
    }
}

console.log(fermactor(15));