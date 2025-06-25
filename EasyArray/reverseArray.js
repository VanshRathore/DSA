function reverseArray(arr,n) {
    let result = [];
    for(let i = n-1; i >= 0; i--){
        result[n-i-1] = arr[i];
    }
    return result;
}

const arr = [ 4, 3 ,8 ,21, 80];
let n = arr.length;
const resultArray = reverseArray(arr, n);
console.log(resultArray);