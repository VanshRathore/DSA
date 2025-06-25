function Redep(arr) {
    for (let i of arr){
        if (arr[i] == arr[i+1]){
            arr.pop(i+1);
        }
    }
    return arr;
}
const arr = [ 4, 3 ,3 ,4, 80];
const removeDuplicate = Redep(arr);
console.log(removeDuplicate);