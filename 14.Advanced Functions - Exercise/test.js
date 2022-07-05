// function solve(input) {
//     let arr = input.slice(0);
//     while (arr.length > 1) {
//         let arrL = arr.length;
//         for (let i = 0; i < arrL; i += 2) {
//             if (arr[i] > arr[i + 1]) {
//                 arr.splice(i + 1 , 1);
//             } else {
//                 arr.splice(i , 1);
//             }
//         }
//         console.log(arr);
//     }
// }

// solve([9, 5, 4, 7, 6, 3, 8, 2])

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  console.log( pow(2, 3) );