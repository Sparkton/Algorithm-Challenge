function extractMatrixColumn(matrix: number[][], column: number): number[] {
    var ls: number[] = [];
    matrix.forEach(element => {
        ls.push(element[column]);
    });
    return ls;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));