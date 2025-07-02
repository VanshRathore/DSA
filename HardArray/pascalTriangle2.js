

function PascalTriangle1(n) {
    let arr = [1];
    let current = 1
    for (let i = 1; i < n; i++) {
        current = current * (n - i)
        current = current/i
        arr.push(current);
    }
    return arr;

    //Current element = prevElement * (rowNumber - colIndex) / colIndex
}


const n = 5; 
const element = PascalTriangle1(n);
console.log(element);
