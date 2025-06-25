// function NumAppearsOnce(arr) {
//     for (let i = 0; i < arr.length; i++){
//         let count = 0;
//         for(let j = 0; j < arr.length ; j++){
//             if( arr[i] === arr[j]){
//                 count++;
//             }
//         }
//         if (count === 1) {
//       return arr[i];
//     }
//   }
//   return -1;
// }
    
// OR use XOR 

function NumAppearsOnce(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}

const arr = [ 4, 3 ,3 ,21, 4];
const result = NumAppearsOnce(arr);
console.log(result);