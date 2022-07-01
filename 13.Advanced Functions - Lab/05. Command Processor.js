function solve(x , y) {
    return function add() {
        add.bind(this, x , y);
        return x + y;
    }
}

let firstFunc = solve(5);
console.log(firstFunc(10));
// //let secondFunc = solve;
// //firstFunc(5)
// //secondFunc(6)

// let person = {
//     name: 'Peter',
//     lastName: 'Petrov',
//     introduce() {
//         let getFullName =  () => {
//             return this.name + ' ' + this.lastName;
//         }
//         console.log(`Hello my name is ${getFullName()}`);

//     }
// }

// person.introduce();



