function alphabeticShift(inputString: string){
    let ctr = 0;
    let n = inputString.length;

    for(let i = 0;i < n;i++){
        if(inputString[i] == 'z')
            console.log('a');
        else{
            ctr = inputString.charCodeAt(i);
            ctr++;
            console.log(String.fromCharCode(ctr));
        }
    }
}

alphabeticShift('crazy');