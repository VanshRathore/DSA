function NextPermutation(arr, n) {
    let indx = -1;
    for(let i = n-2; i>=0; i--){
        if(arr[i]< arr[i+1])
        {
            indx = i;
            break;
        }
    }
    if (indx == -1) {
        
        A.reverse();
        return A;
    }
    for (let i = n-1; i>= indx; i--){
        if(arr[i]>arr[indx]){
            [arr[i], arr[indx]] = [arr[indx], arr[i]];
            break;
        }
    }
    arr.splice(indx + 1, n - indx - 1, ...arr.slice(indx + 1).reverse());

    return arr;
}

const arr = [ 5, 2, 6, 4, 3, 1];
const n = arr.length;
const Result = NextPermutation(arr, n);
console.log(Result);                