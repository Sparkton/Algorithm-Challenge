function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    var val1:number = yourLeft > yourRight ? yourLeft : yourRight;
    var val11:number = yourLeft < yourRight ? yourLeft : yourRight;
    var val2:number = friendsLeft > friendsRight ? friendsLeft : friendsRight;
    var val22:number = friendsLeft < friendsRight ? friendsLeft : friendsRight;

    console.log(val1, val2);
    console.log(val11, val22);
    
    if(val1 == val2 && val11 == val22)
        return true;
    else
        return false;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
