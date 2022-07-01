function solution(number) {
    function add(num1, num2) {
        return num1 + num2;
    }
    return add.bind(this, number);
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
