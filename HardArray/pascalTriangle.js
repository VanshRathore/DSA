// 1)problem 

function nCr(n , r) {
    res = 1 ;
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res/(i+1);
    }
    return res;
}
    function PascalTriangle1(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
    }


const r = 1; 
const c = 1;
const element = PascalTriangle1(r, c);
console.log(`The element at position (${r},${c}) is: ${element}`);



