const n = [ 1, 2 , 1, 3, 2] ;
let querie = [1, 3 , 4, 2 ,10];
let output = [];
for (let i of querie) {
    let count = 0;
    for (let j of n) {
        if (j === i) {
            count++;
        }
    }
    output.push(count);
}
console.log(output);