function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    let ctr = 0;
    let height = 0;
    while(height <= desiredHeight){
        height += upSpeed;
        if (height > desiredHeight){
            break;
        }
        height -= downSpeed;
        ctr++;
    }
    return ctr;
}

console.log(growingPlant(100, 10, 910))