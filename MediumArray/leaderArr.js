function LeaderArray(arr, n) {
    let max = -Infinity;
    let resarr = []
    for(let i = n-1; i>= 0; i--){
        if(arr[i] >= max){
            max = arr[i];
            resarr.push(arr[i])
        }
    }
    return resarr.reverse();
}

const arr = [ 1, 1 ,3, 4 ,0];
const n = arr.length;
const Result = LeaderArray(arr, n);
console.log(Result);