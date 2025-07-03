function majorityElement(v) {
    const n = v.length; 
    const ls = []; 

    for (let i = 0; i < n; i++) {
        if (ls.length == 0 || ls[0] != v[i]) {
            let cnt = 0;
            for (let j = 0; j < n; j++) {
                if (v[j] == v[i]) {
                    cnt++;
                }
            }
            if (cnt > Math.floor(n / 3))
                ls.push(v[i]);
        }

        if (ls.length == 2) break;
    }

    return ls;
}

const arr = [11, 33, 33, 11, 33, 11];
const ans = majorityElement(arr);
console.log("The majority elements are: " + ans.join(" "));
