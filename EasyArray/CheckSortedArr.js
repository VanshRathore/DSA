function isArraySorted(arr) {
    let ascending = true;
    let descending = true;
    for ( i of arr){
        if (arr[i] < arr [ i + 1]) descending = false;
        if (arr[i] > arr [ i + 1]) ascending = false;
    }
    if (ascending) return "Sorted in ascending order"
    if (descending) return "Sorted in descending order"
    return "Not sorted";

}

console.log(isArraySorted([1, 2, 3, 4]));    
console.log(isArraySorted([9, 6, 3, 1]));     
console.log(isArraySorted([3, 1, 4, 2]));  