function AlternatingNegPos(inputArr, n) {
    let result = new Array(n);  
    let posIndex = 0, negIndex = 1;

    for (let i of inputArr) {
        if (i >= 0 && posIndex < n) {
            result[posIndex] = i;
            posIndex += 2;
        } else if (i < 0 && negIndex < n) {
            result[negIndex] = i;
            negIndex += 2;
        }
    }

    return result;
}

const ans = [-1, 1, 2, -2, -2, 4];
const n = ans.length;
const Result = AlternatingNegPos(ans, n);
console.log(Result);