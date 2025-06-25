function RotateArray(arr) {
    return arr.slice(1).concat(arr[0]) 
}

const arr = [ 4, 3 ,8 ,21, 80];
const rotatedArray = RotateArray(arr);
console.log(rotatedArray);