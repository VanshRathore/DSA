function SecondLargest(arr) {
    let max = -Infinity;
    let secondmax = -Infinity;
    for (i of arr){
        if (arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] > secondmax && arr[i] !== max){
            secondmax = arr[i];
        }

    }
    return secondmax;

}

const arr = [ 4, 3 ,8 ,21, 80];
const largest = SecondLargest(arr);
console.log(largest);