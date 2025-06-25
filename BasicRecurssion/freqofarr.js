const arr = [10, 5, 10, 15, 10, 5];
let output = [];

for (let i = 0; i < arr.length; i++) {
    let alreadyCounted = false;
    
    for (let k = 0; k < i; k++) {
        if (arr[i] === arr[k]) {
            alreadyCounted = true;
            break;
        }
    }

    if (!alreadyCounted) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        output.push( count );
    }
}

console.log(output);

//recall