let arr = [
    {x: 1},
    {x: 2},
    {x: 3}
]
arr.sort((a, b) => b.x - a.x)
console.log(arr);