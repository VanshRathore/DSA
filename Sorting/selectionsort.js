const arr = [7 , 10 , 9, 2, 5, 6, 1, 3, 4, 8];
const n = arr.length;
for (let i =0; i<=n-1; i++) {
    let mini = i;
    for( let j = i+1; j<=n-1; j++) {
        if (arr[j] < arr[mini]) {
            mini = j;
        }
    }
    let temp = arr[i];  
    arr[i] = arr[mini];
    arr[mini] = temp;
}
console.log(arr);