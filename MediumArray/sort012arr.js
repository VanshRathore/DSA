function SortArray(arr, n) {
    let low = 0 , mid = 0, high = n-1 ;
    while (mid<=high) { 
        if(arr[mid]== 0 ){
            let temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            mid++;
            low++;
        }
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high --
        }
    }
    return arr;
}


const arr = [ 2, 2 ,1 ,1, 0];
const n = arr.length;
const Result = SortArray(arr, n);
console.log(Result);