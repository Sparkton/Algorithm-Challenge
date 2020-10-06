function bishopAndPawn(bishop: string, pawn: string): boolean {
    const board = {
        "a" : 1,
        "b" : 2,
        "c" : 3,
        "d" : 4,
        "e" : 5,
        "f" : 6,
        "g" : 7,
        "h" : 8
    };
    const bishopX = board[bishop[0]];
    const pawnX = board[pawn[0]];
    const bishopY = parseInt(bishop[1]);
    const pawnY = parseInt(pawn[1]);
    if(Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY)){
        return true;
    }
    return false;
}

console.log(bishopAndPawn('b4', 'f8'));