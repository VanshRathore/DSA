function MissingNum(arr) {
    
    for( let i = 0; i < arr.length; i++){  
        if(arr[i] !== i+1){
            return i+1;
        }
    }
    return arr.length+1;
}  

const arr = [1 , 2, 3, 4 , 5] ;
const result = MissingNum(arr);
console.log(result);