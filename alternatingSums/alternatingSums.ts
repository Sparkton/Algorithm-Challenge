function alternatingSums(a: number[]): number[] {
    let b = [0,0];
    let n = a.length;

    if(n % 2 != 0){
        b[0] = a[n-1];
        n = n-1;
    }

    for(let i = 0;i<n;i+=2){
        b[0]+=a[i];
        b[1]+=a[i+1];
    }
    return b;

}

console.log(alternatingSums([50, 60, 60, 45, 70]))