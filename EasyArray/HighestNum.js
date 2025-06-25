function HighestNum(arr) {
    let max = 0;
    for (i of arr){
        if (arr[i] > max){
            max = arr[i];
        }

    }
    return max;

}

const arr = [ 4, 3 ,8 ,21, 80];
const largest = HighestNum(arr);
console.log(largest);