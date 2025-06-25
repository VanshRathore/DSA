function RotateArray(arr ) {
    result = []
    for (let i of arr ){
        if(arr[i] !== 0){
            let k = arr.shift(i);
            result.push(k);
        }
 }
    return result;
}

const arr = [ 4, 3 ,0 ,21, 0, 1];
D = 3;
const rotatedArray = RotateArray(arr);
console.log(rotatedArray);   