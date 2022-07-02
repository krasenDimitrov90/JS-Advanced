function getFibonator() {
    let arr = []
    return function () {
        let currentNum = 1
        if (arr.length > 0) {
            currentNum = arr[arr.length - 1];
        }
        
        let previousNum = 0
        if (arr.length > 1) {
            previousNum = arr[arr.length - 2];
        }
        arr.push(currentNum + previousNum);
        return arr[arr.length - 1]

    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
