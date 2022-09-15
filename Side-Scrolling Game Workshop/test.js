function solve(n) {

    let arr = [1];
    function firstNum(x) {
        return 2 * x + 1;
    }
    function secNum(x) {
        return 3 * x + 1;
    }
    let index = 0

    for (i = 0; i < n; i++) {
        let y = firstNum(arr[i]);
        arr.push(y);
        let z = secNum(arr[i]);
        arr.push(z)
        // arr.sort((a , b) => a - b)
        index++
    }
    // arr = arr.splice(0,n)
    arr.sort((a , b) => a - b)
    return arr.reduce((acc, x) => {
        if (!acc.includes(x)) {
             acc.push(x)
        }
        return acc;
    },[])
    if (n % 2 === 0) {
        return arr[n + 2];
    } else {
        return arr[n + 1];
    }
    
}

console.log(solve(100)[100]);