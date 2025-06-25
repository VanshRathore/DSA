function LinearSeacrh(arr, num) {
    
    for (let i = 0; i< arr.length; i++) {
        if ( arr[i] === num){
            return i;
        }
    }
    return "num. is not in array";
}


const arr = [ 4, 3 ,8 ,21, 80];
const num = 8;
const Search = LinearSeacrh(arr , num);
console.log(Search);