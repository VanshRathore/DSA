function twoSum(arr , target) {
    const pairs = [];
    const n = arr.length
    for(let i = 0; i<n; i++){
        for (let j = i+1; j<n; j++){
            if (arr[i]+arr[j] === target){
                pairs.push([arr[i], arr[j]]);
            }
        } 
    }
     return pairs.length ? pairs : "no pairs found";
}

const arr = [ 4, 3 ,8 ,-1, 80];
const target = 7;
const twoSumResult = twoSum(arr,target);
console.log(twoSumResult);

