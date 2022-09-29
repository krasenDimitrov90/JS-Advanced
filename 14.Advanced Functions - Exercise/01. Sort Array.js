function sorter(arr, state) {
    if (state === 'asc') {
        return arr.sort((a , b) => a - b)
    } else if (state === 'desc') {
        return arr.sort((a , b) => b - a)
    }
}

// fancy way :D
// function sorter(arr, order) {
//     return arr.sort((a, b) => order === 'asc' ? a - b : b - a)
// }

console.log(sorter([14, 7, 17, 6, 8], 'asc'));
console.log(sorter([14, 7, 17, 6, 8], 'desc'));