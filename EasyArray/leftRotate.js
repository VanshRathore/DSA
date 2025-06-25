function leftRotate(arr) {
    let i = arr.shift();
    arr.push(i);
    return arr;
}


const arr = [ 4, 3 ,8 ,21, 80];
const rotated = leftRotate(arr);
console.log(rotated );