function TrasposeMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < m; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix [j][i] ;
            matrix [j][i] = temp; 
        }
    }

    for (const row of matrix) {
        row.reverse();
    }
    return matrix;
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let ans = TrasposeMatrix(matrix);

console.log("The Final matrix is:");
for (const row of ans) {
    console.log(row.join(" "));
}   