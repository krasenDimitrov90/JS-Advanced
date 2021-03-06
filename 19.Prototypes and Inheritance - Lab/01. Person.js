class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    set fullName(string) {
        [this.firstName, this.lastName] = string.split(' ')
    }
}

let person = new Person("Peter", "Ivanov");
let person2 = new Person("Krasen", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla


//This way also works , but SoftUni judge doesn't think so ;D

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName
    
// }

// Object.defineProperty(Person.prototype, 'fullName', {
//     get() {
//       return `${this.firstName} ${this.lastName}`;
//     },
  
//     set(value) {
//       [this.firstName, this.lastName] = value.split(" ");
//     }
//   });
