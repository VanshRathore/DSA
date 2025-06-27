function CountSubarr(mat) {
    let n = mat.length; 
    let m = mat[0].length;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;
    let ans = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            ans.push(mat[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            ans.push(mat[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                ans.push(mat[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                ans.push(mat[i][left]);
            }
            left++;
        }
    }

    return ans;
}

const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
];

let ans = CountSubarr(matrix);

console.log("The Final matrix is:");
console.log(ans.join(" "));
