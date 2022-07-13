function getPersons() {
    let personsList = [];

    class Person {
        constructor (firstName, lastName, age, email) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.email = email
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }


    // personsList.push(new Person('Anna',	'Simpson', '22', 'anna@yahoo.com'))
    // personsList.push(new Person('SoftUni'))
    // personsList.push(new Person('Stephan', 'Johnson', '25'))
    // personsList.push(new Person('Gabriel', 'Peterson',	'24', 'g.p@gmail.com'))

    // return personsList

    return [
        new Person('Anna',	'Simpson', 22, 'anna@yahoo.com'),
        new Person('SoftUni'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson',	24, 'g.p@gmail.com')
    ]
}

console.log(getPersons());