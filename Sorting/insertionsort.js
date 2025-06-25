const arr = [7 , 10 , 9, 2, 5, 6, 1, 3, 4, 8];
const n = arr.length;
for (let i = 0; i<=n-1; i++) {
    for( let j = i+1; j < i; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i]=temp;
        }
    }
}
console.log(arr);
