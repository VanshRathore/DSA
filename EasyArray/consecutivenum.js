function ConsecutiveNum(arr) {
    let cnt = 0;
    let max = 0;

    for(let i of arr){
        if( i === 1){
            cnt++
            max = Math.max(max, cnt)
        }
        else{
            cnt = 0
        }
    }
    return max;
}

const arr = [ 1, 1 ,0 ,1, 1, 1];
const result = ConsecutiveNum(arr);
console.log(result);