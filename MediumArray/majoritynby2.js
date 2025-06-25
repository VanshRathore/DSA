function MajorityNByTwo(arr , n) {
    for (let i = 0; i< n; i++){
        let sum = 0 ;
        for(let j = i; j< n; j++){
            if(arr[i] == arr[j]){
                sum++
            }
        }
        if(sum > (n/2)){
            return arr[i];  
        }
    }
    return false;
}

const arr = [ 1, 0 ,2, 2 ,2];
const n = arr.length;
const Result =  MajorityNByTwo(arr, n);
console.log(Result);