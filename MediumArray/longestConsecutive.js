function LongConsecutiveNo(arr, n) {
    let longest = 0;
    const st = new Set(arr); 

    for (let num of st) { 
        if (!st.has(num - 1)) {
            let count = 1;
            let current = num;

            while (st.has(current + 1)) {
                current += 1;
                count += 1;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
}


const arr = [ 1, 1 ,2, 2 ,0];
const n = arr.length;   
const Result = LongConsecutiveNo(arr, n);
console.log(Result);