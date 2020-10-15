function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const board = {
        "A" : 1,
        "B" : 2,
        "C" : 3,
        "D" : 4,
        "E" : 5,
        "F" : 6,
        "G" : 7,
        "H" : 8
    };

    const t1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
    const t2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

    return (t1 === t2);
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
