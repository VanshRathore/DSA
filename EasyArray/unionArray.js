// function UnionArray(arr1 , arr2) {
//     return [...new Set([...arr1, ...arr2])]
// }

// or 

function UnionArray(arr1, arr2) {
    const result = []
    for (let i of arr1){
        if(!result.includes(i)){
            result.push(i);
        }
    }
    for (let i of arr2){
        if(!result.includes(i)){
            result.push(i);
        }
    }
    return  result;
}

const arr1 = [ 4, 3 ,8 ,21, 80];
const arr2 = [ 4, 7 ,8 ,22, 80, 2 , 4, 21, 6];
const result = UnionArray(arr1 , arr2);
console.log(result);