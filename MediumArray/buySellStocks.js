function BuySellStocks(arr, n) {
    let mini = Infinity;
    let profit = 0;
    for ( let i of arr){
        mini = Math.min(mini , i);
        profit = Math.max(profit , i- mini)
    }
    return profit;
}

const arr = [ 1, 1 ,3, 4 ,0];
const n = arr.length;
const Result =  BuySellStocks(arr, n);
console.log(Result);