
function generateRow(row) {
    let arr = [1];
    let current = 1;
    for (let i = 1; i <= row; i++) {
        current = (current * (row - i + 1)) / i;
        arr.push(current);
    }
    return arr;
}

function PascalTriangle2(n) {
    let ans = [];
    for (let row = 0; row <= n; row++) {
        ans.push(generateRow(row));
    }
    return ans;
}


const n = 5; 
const element = PascalTriangle2(n);
console.log(element);
