function MaxSubArrSum(arr, n) {
    let max = -Infinity;
    let sum = 0;
    for (const i of arr) {
        sum += i;
        if (sum > max){
            max = sum
        }
        if(sum<0){
            sum = 0
        }
    }
    return max;
}

const arr = [ -1, 0 ,2, 2 ,-2];
const n = arr.length;
const Result =  MaxSubArrSum(arr, n);
console.log(Result);