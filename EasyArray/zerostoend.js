function ZerostoLast(arr) {
    let result = []
    let count = 0;
    for (let i of arr){
        if (i === 0){
            count++
        }
        else{
            result.push(i);
        }
    } 
    while (count--) {
        result.push(0)
    }
    return result;
}


const arr = [ 0, 0, 0, 4, 0, 3, 0, 8, 21, 80];
const endResut = ZerostoLast(arr);
console.log(endResut);