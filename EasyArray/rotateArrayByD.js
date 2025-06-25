function RotateArray(arr, D) {
    for (let i = 0; i < D ; i++ ){
        let k = arr.shift()
        arr.push(k);
 }
    return arr;
}

const arr = [ 4, 3 ,8 ,21, 80];
D = 3;
const rotatedArray = RotateArray(arr, D);
console.log(rotatedArray);   