function solve(number) {
    
    return add.bind(this, number)
}

function add(a , b , c) {
    return a + b + c;
}

let add5 = solve(5);
console.log(add5(3 , 2));
console.log(add5(7 , 4));
console.log(add(5 , 3 , 2));