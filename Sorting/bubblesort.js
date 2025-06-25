const arr = [7 , 10 , 9, 2, 5, 6, 1, 3, 4, 8];
const n = arr.length;
for (let i = n-1; i>= 0; i--) {
    for( let j = 0; j < i; j++) {
        if (arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr);