function boxBlur(image: number[][]): number {
    var ctr: number = 0;
    var flag: number = 0;
    image.forEach(element => {
        element.forEach( ele => {
            ctr+=ele;
            flag+=1;
        });
    });
    return (Math.floor(ctr/flag));
}

console.log(boxBlur([[2, 2, 2], 
    [2, 11, 2], 
    [2, 2, 2]]));